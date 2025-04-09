import './App.css'
import Menu from "./menu/Menu.tsx";
import {Outlet} from "react-router";

function App() {

    return (<div className="d-flex">
        <Menu/>
        <Outlet/>
    </div>)
}

export default App
