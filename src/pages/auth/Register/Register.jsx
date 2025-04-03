import styles from "../../../components/Form/Form.module.css";
import sInput from "../../../components/Form/Input.module.css";
import sRegister from "./Register.module.css";
import { useState, useContext } from "react";
import Input from "../../../components/Form/Input";
import { Context } from "../../../context/Context";

const Register = () => {
  const [user, setUser] = useState({});
  const { register } = useContext(Context);

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
    });
  }
  return (
    <section className={styles.form_container}>
      <h1>Registro</h1>
      <form onSubmit={handleSubmit} className={sInput.form_control}>
        <label htmlFor="name">Nome:</label>
        <Input
          type="text"
          name="name"
          placeholder="Digite seu nome..."
          handleOnChange={handleChange}
        />

        <label htmlFor="email">Email:</label>
        <Input
          type="email"
          name="email"
          placeholder="Digite seu e-mail..."
          handleOnChange={handleChange}
        />

        <label htmlFor="phone">Telefone:</label>
        <Input
          type="text"
          name="phone"
          placeholder="Digite seu telefone"
          handleOnChange={handleChange}
        />

        <label htmlFor="password">Senha:</label>
        <Input
          type="password"
          name="password"
          placeholder="Digite sua senha..."
          handleOnChange={handleChange}
        />

        <label htmlFor="password-confirm">Confirmar senha:</label>
        <Input
          type="password"
          name="confirmPassword"
          placeholder="Digite sua senha..."
          handleOnChange={handleChange}
        />

        <div className={sRegister.container_btn}>
          <Input
            type="submit"
            value="Cadastrar"
            handleOnChange={handleChange}
          />
        </div>
      </form>
    </section>
  );
};

export default Register;
