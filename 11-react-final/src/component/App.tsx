import './App.css'
import Menu from "./menu/Menu.tsx";
import {Outlet} from "react-router";

function App() {

    return (<div className="d-flex">
        <Menu/>
        <div className="flex-grow-1">
            <Outlet/>
        </div>
    </div>)
}

export default App
