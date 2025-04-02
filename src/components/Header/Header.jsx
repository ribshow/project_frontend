import styles from "./Header.module.css";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { Context } from "../../context/Context";

const Header = () => {
    const { authenticated, logout } = useContext(Context);
    return (
        <nav className={styles.navbar}>
            <div className={styles.navbar_logo}><h2>meu pet sumiu</h2></div>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>

                {authenticated && (
                    <li onClick={logout}>
                        Sair
                    </li>
                )}

                {!authenticated && (
                    <>
                        <li>
                            <Link to="/login">Entrar</Link>
                        </li>
                        <li>
                            <Link to="/register">Registrar</Link>
                        </li>
                    </>
                )}

            </ul>
        </nav>
    )
}

export default Header;