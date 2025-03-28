import './App.css'
import {createBrowserRouter, RouteObject, RouterProvider} from "react-router";
import Main from "./main/Main.tsx";
import Admin from "./admin/Admin.tsx";
import Guest from "./guest/Guest.tsx";

type Routes = RouteObject[];
const routes: Routes = [
    {
        path: 'main',
        Component: Main
    },
    {
        path: 'admin',
        Component: Admin
    },
    {
        path: 'guest',
        Component: Guest
    }
]
const router = createBrowserRouter(routes);

function App() {

  return <RouterProvider router={router} />
}

export default App
