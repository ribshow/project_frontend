import Input from "../../../components/Form/Input";
import styles from "../../../components/Form/Form.module.css";
import sRegister from "../../auth/Register/Register.module.css"
import { useState, useContext } from "react";
import { Context } from "../../../context/Context";

const Login = () => {
    const [user, setUser] = useState({});
    const { login } = useContext(Context);

    function handleSubmit(e) {
        e.preventDefault();

        console.log(user);
        login(user);
    }

    function handleChange(e) {
        e.preventDefault();
        setUser({
            ...user,
            [e.target.name]: e.target.value,
        });
    }
    return (
        <section className={styles.form_container}>
            <h1>Login</h1>
            <form onSubmit={handleSubmit}>
                <Input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Digite seu e-mail..."
                    handleOnChange={handleChange}
                />
                <Input
                    type="password"
                    name="password"
                    id="password"
                    placeholder="Digite sua senha..."
                    handleOnChange={handleChange}
                />
                <div className={sRegister.container_btn}>
                    <Input
                        type="submit"
                        value="Entrar"
                        handleOnChange={handleChange}
                    />
                </div>
            </form>
        </section>
    )
}

export default Login;