import { useLocation } from "react-router-dom";
import styles from "./style.module.css";
import Button from "../../../components/Button/Button";

const Details = () => {
    const location = useLocation();
    const { pet } = location.state;

    function formatDate(pet) {
        const formatter = new Intl.DateTimeFormat("pt-BR");

        return formatter.format(new Date(pet));
    }
    return (
        <div className="">
            <h1>Detalhes do pet:</h1>
            <div className={styles.container}>
                <p><span>Nome:</span> {pet?.name}</p>
                <p><span>Idade:</span> {pet?.age}</p>
                <p><span>Raça:</span> {pet?.race}</p>
                <p><span>Cor:</span> {pet?.color}</p>
                <p><span>Cor dos olhos:</span> {pet?.eyesColor}</p>
                <p><span>Espécie:</span> {pet?.species}</p>
                <p><span>Gênero:</span> {pet?.gender}</p>
                <p><span>Tamanho:</span> {pet?.size}</p>
                <p><span>Local:</span> {pet?.local}</p>
                <p><span>Ponto de Referência:</span> {pet?.landmark}</p>
                <p><span>Data:</span> {formatDate(pet?.date)}</p>
                <p><span>Recompensa:</span> {pet?.reward}</p>
                <p><span>Situação:</span> {pet?.situation}</p>
                <p><span>Comentário:</span> {pet?.comment}</p>
                <img src={`${process.env.REACT_APP_API}/images/pets/${pet?.images[0]}`} alt="" />
                <Button>Entrar em contato</Button>
            </div>
        </div>
    )
}

export default Details;