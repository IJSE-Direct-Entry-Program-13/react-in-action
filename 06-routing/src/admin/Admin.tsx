import {Link, NavLink} from 'react-router';
import './Admin.css'
import {Outlet} from "react-router";
  export function Admin() {
      return (
          <div className="flex h-screen">
              <aside className="p-2">
                  <h2 className="text-2xl border-b font-bold">
                      Admin Panel
                  </h2>
                  <menu className="pt-2">
                      <NavLink to="dashboard">
                          <li className="p-2 cursor-pointer rounded
                          hover:bg-gray-200">
                              Dashboard</li>
                      </NavLink>
                      <NavLink to="manage-clients">
                          <li className="p-2 cursor-pointer rounded
                          hover:bg-gray-200">
                              Manage Clients</li>
                      </NavLink>
                      <NavLink to="manage-stocks">
                          <li className="p-2 cursor-pointer rounded
                          hover:bg-gray-200">
                              Manage Stocks</li>
                      </NavLink>
                      <Link to="/main">
                          <li className="p-2 cursor-pointer rounded
                          hover:bg-gray-200">
                              Log Out</li>
                      </Link>
                  </menu>
              </aside>
              <main className="border-l border-l-gray-400
               grow p-2">
                  <Outlet />
              </main>
          </div>
      )
  }
  
