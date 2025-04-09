import './Menu.css';
import {useLocation, useNavigate} from "react-router";

function Menu() {
    const navigate = useNavigate();
    const location = useLocation();

    return (
        <aside className="menu vh-100
            d-flex border-end justify-content-center">
            <menu className="w-100 text-center list-unstyled m-0
            d-flex flex-column">
                <li onClick={() => navigate('/dashboard')}
                    title="Dashboard"
                    className={getClassName(location.pathname === '/dashboard')}>
                    <i className="bi-building-dash fs-2"></i></li>
                <li onClick={() => navigate('/manage-customers')}
                    title="Manage Customers"
                    className={getClassName(location.pathname === '/manage-customers')}>
                    <i className="bi-people fs-2"></i></li>
                <li onClick={() => navigate('/manage-items')}
                    title="Manage Items"
                    className={getClassName(location.pathname === '/manage-items')}>
                    <i className="bi-list fs-2"></i></li>
            </menu>
        </aside>
    );
}

function getClassName(active: boolean = false) {
    return ['menu__menu-item',
        'py-3',
        active ? 'menu__menu-item--active' : ''
    ].join(' ');
}

export default Menu;