import Dashboard from "./dashboard/Dashboard.tsx";
import ManageCustomers from "./manage-customers/ManageCustomers.tsx";
import ManageItems from "./manage-items/ManageItems.tsx";
import {createBrowserRouter, Navigate, RouteObject} from "react-router";
import App from "./App.tsx";

type Routes = RouteObject[];
const routes: Routes = [
    {
        path: '/',
        Component: App,
        children: [
            {
                path: 'dashboard',
                Component: Dashboard
            },
            {
                path: 'manage-customers',
                Component: ManageCustomers
            },
            {
                path: 'manage-items',
                Component: ManageItems
            },
        ]
    },
    {
        path: '*',
        element: <Navigate to={'/dashboard'}/>
    }
];
export const AppRouter = createBrowserRouter(routes);
