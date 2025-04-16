import PetForm from "../../components/Form/PetForm";
import useFlashMessage from "../../hooks/useFlashMessage";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import api from "../../utils/api";

const AddPet = () => {
    return (
        <div>
            <h1>Adicionar Pet</h1>
            <PetForm />
        </div>)
};

export default AddPet;