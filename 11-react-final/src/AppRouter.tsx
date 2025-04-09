import Dashboard from "./component/dashboard/Dashboard.tsx";
import ManageCustomers from "./component/manage-customers/ManageCustomers.tsx";
import ManageItems from "./component/manage-items/ManageItems.tsx";
import {createBrowserRouter, Navigate, RouteObject} from "react-router";
import App from "./component/App.tsx";

type Routes = RouteObject[];
const routes: Routes = [
    {
        path: '/',
        Component: App,
        children: [
            {
                index: true,
                element: <Navigate to={'/dashboard'} />
            },
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
