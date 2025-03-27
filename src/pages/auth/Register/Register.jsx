import styles from "../../../components/Form/Form.module.css";
import sRegister from "./Register.module.css";
import { useState } from "react";
import Input from "../../../components/Form/Input";
import register from "../../../hooks/useAuth";

const Register = () => {
    const [user, setUser] = useState({});

    function handleSubmit(e) {
        e.preventDefault();

        console.log(user);
        register(user);

    }

    function handleChange(e) {
        e.preventDefault();
        setUser({
            ...user,
            [e.target.name]: e.target.value,
        })
    }
    return (
        <section className={styles.form_container}>
            <h1>Registro</h1>
            <form onSubmit={handleSubmit}>
                <Input type="text" name="name" placeholder="Digite seu nome..." handleOnChange={handleChange} />
                <Input type="email" name="email" placeholder="Digite seu e-mail..." handleOnChange={handleChange} />
                <Input type="password" name="password" placeholder="Digite sua senha..." handleOnChange={handleChange} />
                <Input type="password" name="confirmPassword" placeholder="Digite sua senha..." handleOnChange={handleChange} />
                <Input type="text" name="phone" placeholder="Digite seu telefone" handleOnChange={handleChange} />
                <div className={sRegister.container_btn}>
                    <Input type="submit" value="Cadastrar" handleOnChange={handleChange} />
                </div>
            </form>
        </section>
    )
}

export default Register;