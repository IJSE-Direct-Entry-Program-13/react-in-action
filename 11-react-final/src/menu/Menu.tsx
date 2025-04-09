import './Menu.css';
import {useNavigate} from "react-router";

function Menu() {
    const navigate = useNavigate();

    return (
        <aside className="menu vh-100
            d-flex border-end justify-content-center">
            <menu className="w-100 text-center list-unstyled m-0
            d-flex flex-column gap-1">
                <li onClick={()=>navigate('/dashboard')}
                    title="Dashboard"
                    className="menu__menu-item py-3">
                    <i className="bi-building-dash fs-2"></i></li>
                <li onClick={()=>navigate('/manage-customers')}
                    title="Manage Customers"
                    className="menu__menu-item py-3">
                    <i className="bi-people fs-2"></i></li>
                <li onClick={()=>navigate('/manage-items')}
                    title="Manage Items"
                    className="menu__menu-item py-3">
                    <i className="bi-list fs-2"></i></li>
            </menu>
        </aside>
    );
}

export default Menu;