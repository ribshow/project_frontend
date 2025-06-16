import styles from "./contact.module.css";
import { useState } from "react";
import api from "../../../utils/api";
const Contact = () => {
  const [form, setForm] = useState({ message: "" });
  const [token] = useState(localStorage.getItem("token") || "");
  const [message, setMessage] = useState("");
  async function handleSubmit(e) {
    e.preventDefault();

    try {
      await api.post("/users/send-sms", form, {
        headers: {
          Authorization: `Bearer ${JSON.parse(token)}`,
        },
      });

      setMessage("Mensagem enviada com sucesso!");
      setTimeout(() => {
        setMessage("");
      }, 3000);
    } catch (error) {
      console.error("Erro ao enviar mensagem", error);
      setMessage("Erro ao enviar o SMS!");
      setTimeout(() => {
        setMessage("");
      }, 3000);
    }
  }

  function handleChange(e) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  }
  return (
    <div className={styles.container}>
      <div className="title">
        <h1>Contato</h1>
        <p>Deixe sua mensagem abaixo:</p>
      </div>
      <div className={styles.form}>
        <form className={styles.form} onSubmit={handleSubmit}>
          <textarea
            onChange={handleChange}
            name="message"
            id="message"
          ></textarea>
          <input type="submit" value="Enviar SMS" />
        </form>
        <div className={styles.response}> {message && <p>{message}</p>}</div>
      </div>
    </div>
  );
};

export default Contact;
