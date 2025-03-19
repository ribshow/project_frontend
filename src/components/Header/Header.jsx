import styles from "./Header.module.css";
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <nav className={styles.navbar}>
            <div className={styles.navbar_logo}><h2>meu pet sumiu</h2></div>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/login">Entrar</Link>
                </li>
                <li>
                    <Link to="/register">Registrar</Link>
                </li>
            </ul>
        </nav>
    )
}

export default Header;