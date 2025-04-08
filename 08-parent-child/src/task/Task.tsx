import './Task.css';

function Task({text, handleDelete}: { text: string, handleDelete?: () => void }) {
    return (
        <div className="task p-2 d-flex
        justify-content-between align-items-center">
            <span>{text}</span>
            <button onClick={handleDelete} className={'task__btn-delete btn btn-sm btn-outline-danger'}>
                ❌
            </button>
        </div>
    );
}

export default Task;