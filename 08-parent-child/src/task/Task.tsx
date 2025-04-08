import './Task.css';

function Task() {
    return (
        <div className="task p-2 d-flex
        justify-content-between align-items-center">
            <span>Task Description</span>
            <button className={'task__btn-delete btn btn-sm btn-outline-danger'}>
                ❌
            </button>
        </div>
    );
}

export default Task;