import styles from "./Home.module.css";
import api from "../../utils/api";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Home = () => {
  const [pets, setPets] = useState([]);

  useEffect(() => {
    const token = localStorage.getItem("token");
    const authenticated = JSON.parse(token);
    api
      .get("/pets/getAll", {
        method: "GET",
        headers: {
          Authorization: `Bearer ${authenticated}`,
        },
      })
      .then((response) => {
        console.log(response);
        setPets(response.data);
      });
  }, []);
  return (
    <section>
      <div className={styles.home}>
        <h1>Bem-vindo ao meu petsumiu</h1>
        <h3>Encontre seu melhor amigo!</h3>
      </div>
      <div className={styles.pet_container}>
        {pets &&
          pets.map((pet) => (
            <div className={styles.pet_card} key={pet._id}>
              <div className={styles.pet_card_header}>{pet.situation}</div>
              <div
                className={styles.pet_card_image}
                style={{
                  backgroundImage: `url(${
                    process.env.REACT_APP_API
                  }/images/pets/${pet.images?.[0] || "default.jpg"})`,
                }}
              ></div>
              <div className={styles.pet_card_body}>
                <h3>{pet.name || "Nome não informado :("}</h3>
                <Link to={`/pet/${pet._id}`} className={styles.details_button}>
                  Ver mais
                </Link>
              </div>
            </div>
          ))}
        {!pets && <p>Não há pets cadastrados no momento :D</p>}
      </div>
    </section>
  );
};

export default Home;
