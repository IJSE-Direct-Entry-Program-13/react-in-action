import './App.css'
import {createBrowserRouter, Navigate, redirect, RouteObject, RouterProvider} from "react-router";
import {Main} from "./main/Main.tsx";
import {Admin} from "./admin/Admin.tsx";
import {Guest} from "./guest/Guest.tsx";
import {Dashboard} from "./admin/dashboard/Dashboard.tsx";
import {ManageClients} from "./admin/manage-clients/Manage-clients.tsx";
import {ManageStocks} from "./admin/manage-stocks/Manage-stocks.tsx";

type Routes = RouteObject[];
const routes: Routes = [
    {
        index: true,
        loader: ()=>{
           return redirect('/main')
        }
    },
    {
        path: 'main',
        Component: Main
    },
    {
        path: 'admin',
        Component: Admin,
        children: [
            {
                index: true,
                element: <Navigate to="dashboard" />
            },
            {
                path: 'dashboard',
                element: <Dashboard />
            },
            {
                path: 'manage-clients',
                Component: ManageClients
            },
            {
                path: 'manage-stocks',
                Component: ManageStocks
            }
        ]
    },
    {
        path: 'guest',
        Component: Guest
    }
];
const router = createBrowserRouter(routes);

function App() {

    return <RouterProvider router={router} />
}

export default App
