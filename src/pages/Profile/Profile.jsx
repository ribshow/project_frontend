import { useState, useEffect } from "react";
import api from "../../utils/api";
import styles from "./profile.module.css";

const Profile = () => {
  const [petsUser, setPetsUser] = useState([]);

  useEffect(() => {
    const token = localStorage.getItem("token");
    const authenticated = JSON.parse(token);
    api
      .get("/pets/user", {
        method: "GET",
        headers: {
          Authorization: `Bearer ${authenticated}`,
        },
      })
      .then((response) => {
        console.log(response);
        setPetsUser(response.data);
      });
  }, []);

  const formatDate = (dateString) => {
    if (!dateString) return "";
    return new Intl.DateTimeFormat("pt-BR").format(new Date(dateString));
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Perfil</h1>
      <p className={styles.subtitle}>Exibindo seus pets cadastrados.</p>

      <div className={styles.petContainer}>
        {petsUser &&
          petsUser.map((pet) => (
            <div key={pet._id} className={styles.card}>
              <img
                className={styles.image}
                src={`${process.env.REACT_APP_API}/images/pets/${
                  pet.images?.[0] || "default.jpg"
                }`}
                alt={pet.name}
              />
              <div className={styles.details}>
                <h3>{pet.name}</h3>
                <table>
                  <tbody>
                    <tr>
                      <td>Situação:</td>
                      <td>{pet.situation}</td>
                    </tr>
                    <tr>
                      <td>Espécie:</td>
                      <td>{pet.species}</td>
                    </tr>
                    <tr>
                      <td>Raça:</td>
                      <td>{pet.race}</td>
                    </tr>
                    <tr>
                      <td>Idade:</td>
                      <td>{pet.age}</td>
                    </tr>
                    <tr>
                      <td>Cor:</td>
                      <td>{pet.color}</td>
                    </tr>
                    <tr>
                      <td>Olhos:</td>
                      <td>{pet.eyesColor}</td>
                    </tr>
                    <tr>
                      <td>Sexo:</td>
                      <td>{pet.gender}</td>
                    </tr>
                    <tr>
                      <td>Tamanho:</td>
                      <td>{pet.size}</td>
                    </tr>
                    <tr>
                      <td>Local:</td>
                      <td>{pet.local}</td>
                    </tr>
                    <tr>
                      <td>Referência:</td>
                      <td>{pet.landmark}</td>
                    </tr>
                    <tr>
                      <td>Data:</td>
                      <td>{formatDate(pet.date)}</td>
                    </tr>
                    <tr>
                      <td>Recompensa:</td>
                      <td>{pet.reward}</td>
                    </tr>
                    <tr>
                      <td>Comentário:</td>
                      <td>{pet.comment}</td>
                    </tr>
                  </tbody>
                </table>
                <p className={styles.description}>{pet.description}</p>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Profile;
