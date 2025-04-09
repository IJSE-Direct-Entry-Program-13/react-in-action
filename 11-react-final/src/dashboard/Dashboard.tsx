import './Dashboard.css';

function Dashboard() {
    return (
        <>
            <header className="text-center p-2 border-bottom">
                <h1 className="m-0">React Final Project</h1>
            </header>
            <div className="dashboard__card-wrapper d-flex gap-2 justify-content-around p-3">
                <Card color="green" text="Customers"
                      value={20} icon="bi-people"/>
                <Card color="blue" text="Items"
                      value={20} icon="bi-people"/>
            </div>
        </>
    );
}

export default Dashboard;

type CardPropType = {
    color: string,
    text: string,
    value: number,
    icon: string
}

function Card({color, text, value, icon}: CardPropType) {
    return (<div className="card text-white p-3 text-center"
        style={{backgroundColor: color}}>
        <h2 className="card__title">{text}</h2>
        <div className="d-flex align-items-center gap-3 justify-content-center">
            <i className={icon + " card__icon"}></i>
            <h1 className="card__value">{value}</h1>
        </div>
    </div>)
}