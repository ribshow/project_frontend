import PetForm from "../../components/Form/PetForm";
import useFlashMessage from "../../hooks/useFlashMessage";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import api from "../../utils/api";

const AddPet = () => {
    const [token] = useState(localStorage.getItem("token") || "");
    const navigate = useNavigate();
    const { setFlashMessage } = useFlashMessage();
    //const [pet, setPet] = useState("");

    async function registerPet(pet) {
        let msgType = "success";
        let data;
        const formData = new FormData();
        Object.keys(pet).forEach((key) => {
            if (key === "images") {
                for (let i = 0; i < pet[key].length; i++) {
                    formData.append("images", pet[key][i]);
                }
            } else {
                formData.append(key, pet[key]);
            }
        });

        try {
            const response = await api.post("pets/store", formData, {
                headers: {
                    Authorization: `Bearer ${JSON.parse(token)}`
                },
                "Content-Type": "multipart/form-data"
            });
            data = response.data;
            console.log(data);
        } catch (error) {
            console.log("Erro ao cadastrar pet", error);
            msgType = "error";
            data = error.response?.data || { message: "Erro desconhecido" }
        } finally {
            setFlashMessage(data.message, msgType);
            if (msgType !== "error") {
                navigate("/");
            }
        }

    }
    return (
        <div>
            <h1>Adicionar Pet</h1>
            <PetForm handleSubmit={registerPet} btnText="Cadastrar" />
        </div>)
};

export default AddPet;