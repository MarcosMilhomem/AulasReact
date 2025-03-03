import { Link } from "react-router-dom"
import '../.././App.css';

function Nav() {
    return (
        <div>
            <ul className="nav">
                <li>
                <Link to="/">Home</Link>
                </li>
                <li>
                <Link to="/empresa">Empresa</Link>
                </li>
                <li>
                <Link to="/contato">Contato</Link>
                </li>
            </ul>
        </div>
    )
}

export default Nav
