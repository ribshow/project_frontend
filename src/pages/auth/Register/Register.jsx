import styles from "../../../components/Form/Form.module.css";
import { useState, useContext } from "react";
import Input from "../../../components/Form/Input";
import Button from "../../../components/Button/Button";
// import { authContext } from "../../../context/Context";

const Register = () => {
    const [user, setUser] = useState({});

    function handleSubmit(e) {
        e.preventDefault();

        console.log(user);
    }

    function handleChange(e) {
        e.preventDefault();
        setUser({
            ...user,
            [e.target.name]: e.target.value,
            [e.target.email]: e.target.value
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

                <Button type="submit">Registrar</Button>
            </form>
        </section>
    )
}

export default Register;