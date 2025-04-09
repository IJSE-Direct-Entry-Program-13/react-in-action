import './Dashboard.css';

function Dashboard() {
    return (
        <>
            <header className="text-center p-2 border-bottom">
                <h1 className="m-0">React Final Project</h1>
            </header>
            <div className="d-flex">
                <Card color="green" text="Customers"
                      value={20} icon="bi-people" />
                <Card color="green" text="Items"
                      value={20} icon="bi-people" />
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

function Card({color, text, value, icon}: CardPropType){
    return (<>

    </>)
}