import {useState} from "react";
import Task from "../task/Task.tsx";

function TaskList() {
    const [taskList] = useState(['Task 1', 'Task 2']);

    return (
        <div className={'p-2'}>
            <form action="" className={'d-flex gap-2'}>
                <input placeholder={'Eg. Time to sleep'}
                    className="form-control" type="text"/>
                <button className={'btn btn-primary'}>ADD</button>
            </form>
            <div className={'p-2'}>
                {taskList.map(() => <Task />)}
            </div>
        </div>
    );
}

export default TaskList;