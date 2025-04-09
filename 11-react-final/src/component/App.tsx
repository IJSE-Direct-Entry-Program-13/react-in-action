import './App.css'
import Menu from "./menu/Menu.tsx";
import {Outlet} from "react-router";
import {CustomerProvider} from "../context/CustomerContext.tsx";

function App() {

    return (<div className="d-flex">
        <Menu/>
        <div className="flex-grow-1">
            <CustomerProvider>
                <Outlet/>
            </CustomerProvider>
        </div>
    </div>)
}

export default App
