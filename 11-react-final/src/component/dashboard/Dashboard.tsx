import './Dashboard.css';
import {useNavigate} from "react-router";

function Dashboard() {
    return (
        <>
            <header className="p-2 px-3 border-bottom">
                <h1>React Final Project</h1>
                <div>Time to sign up from React</div>
            </header>
            <div className="dashboard__card-wrapper d-flex gap-2 justify-content-around p-3">
                <Card color="lightgreen" text="Customers"
                      link="/manage-customers"
                      value={20} icon="bi-people"/>
                <Card color="lightblue" text="Items"
                      link="/manage-items"
                      value={40} icon="bi-list"/>
            </div>
        </>
    );
}

export default Dashboard;

type CardPropType = {
    color: string,
    text: string,
    value: number,
    icon: string,
    link: string
}

function Card({color, text, value, icon, link}: CardPropType) {
    const navigate = useNavigate();

    return (<div onClick={()=> navigate(link)}
                 className="card p-3 text-center"
        style={{backgroundColor: color}}>
        <h1 className="card__title">{text}</h1>
        <div className="d-flex align-items-center gap-3 justify-content-center">
            <i className={icon + " card__icon"}></i>
            <h1 className="card__value">{value}</h1>
        </div>
    </div>)
}