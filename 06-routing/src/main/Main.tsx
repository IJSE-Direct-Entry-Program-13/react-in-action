import './Main.css'
import {Link} from "react-router";
  export function Main() {
      return (
          <main className="flex h-screen justify-around items-center">
              <Link to='/admin'>
                  <div
                      className="p-4 border rounded cursor-pointer
                  hover:bg-sky-400
                  active:bg-sky-600 active:text-white active:border-black">
                      Admin</div>
              </Link>
              <Link to="/guest">
                  <div
                      className="p-4 border rounded cursor-pointer
                  hover:bg-sky-400
                  active:bg-sky-600 active:text-white active:border-black">
                      Guest</div>
              </Link>
          </main>
      )
  }
  
