import './Task.css';

function Task({text}: {text: string}) {
    return (
        <div className="task p-2 d-flex
        justify-content-between align-items-center">
            <span>{text}</span>
            <button className={'task__btn-delete btn btn-sm btn-outline-danger'}>
                ❌
            </button>
        </div>
    );
}

export default Task;