import {useRef, useState} from "react";
import Task from "../task/Task.tsx";

function TaskList() {
    const [taskList, setTaskList] = useState(['Task 1', 'Task 2']);
    const txtRef =
        useRef<HTMLInputElement>(null);

    function handleAdd() {
        const elm = txtRef.current!;
        if (!elm.value.trim().length) {
            elm.select();
            elm.focus();
            return;
        }
        setTaskList([...taskList, elm.value.trim()]);
        elm.value = '';
        elm.focus();
    }

    function handleDelete(index: number) {
        setTaskList(taskList
            .filter((_t, i) => i !== index));
    }

    return (
        <div className={'p-2'}>
            <form action="javascript:void(0)" className={'d-flex gap-2'}>
                <input ref={txtRef} placeholder={'Eg. Time to sleep'}
                       className="form-control" type="text"/>
                <button onClick={handleAdd} className={'btn btn-primary'}>
                    ADD
                </button>
            </form>
            <div className={'p-2'}>
                {/*{taskList.map((t) => <Task>{t}</Task>)}*/}
                {taskList.map((t, index) =>
                    // <Task text={t} handleDelete={() => handleDelete(index)}/>)}
                    <Task text={t} handleDelete={handleDelete
                        .bind(this, index)}/>)}
            </div>
        </div>
    );
}

export default TaskList;