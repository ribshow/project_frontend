import Input from "./Input";
import Select from "./Select";
import { useState } from "react";

const PetForm = ({ handleSubmit, petData, btnText }) => {
    const [pet, setPet] = useState(petData || {});
    const [preview, setPreview] = useState([]);
    const situation = ["Perdido", "Procurando tutor"];
    const gender = ["Macho", "Fêmea"];
    const size = ["Grande", "Médio", "Pequeno"];

    // manipulando as imagens 
    function onFileChange(e) {
        setPreview(Array.from(e.target.files));
        setPet({ ...pet, images: [...e.target.files] });
        console.log(e.target.files);
    }

    // setando os valores do formulário
    function handleChange(e) {
        setPet({ ...pet, [e.target.name]: e.target.value });
    }

    // capturando a situação selecionada dentro do select
    function handleSituation(e) {
        setPet({ ...pet, situation: e.target.options[e.target.selectedIndex].text })
    }

    function handleGender(e) {
        setPet({ ...pet, gender: e.target.options[e.target.selectedIndex].text });
    }

    function handlePort(e) {
        setPet({ ...pet, size: e.target.options[e.target.selectedIndex].text });
    }

    function submit(e) {
        e.preventDefault();
        console.log(pet);
        handleSubmit(pet);
    }
    return (
        <div>
            <form onSubmit={submit}>
                <div>
                    {
                        preview.length > 0
                            ? preview.map((image, index) => (
                                <img src={URL.createObjectURL(image)} alt={pet.name} key={`${pet.name}${index}`} />
                            ))
                            : pet.image &&
                            pet.images.map((image, index) => (
                                <img src={`${process.env.REACT_APP_API}/public/images/pets/${image.name}`} alt={pet.name} key={index} />
                            ))
                    }
                </div>
                <Input
                    text="Imagens do Pet:"
                    type="file"
                    multiple={true} name="images"
                    handleOnChange={onFileChange} />
                <Input
                    text="Nome:"
                    type="text"
                    name="name"
                    value={pet.name || ""}
                    handleOnChange={handleChange} />
                <Input
                    text="Idade:"
                    type="text"
                    name="age"
                    value={pet.age || ""}
                    handleOnChange={handleChange} />
                <Input
                    text="Raça:"
                    type="text"
                    name="race"
                    value={pet.race || ""}
                    handleOnChange={handleChange} />
                <Input
                    text="Cor do pet:"
                    type="text"
                    name="color"
                    value={pet.color || ""}
                    handleOnChange={handleChange} />
                <Input
                    text="Cor dos olhos:"
                    type="text"
                    name="eyesColor"
                    value={pet.eyesColor || ""}
                    handleOnChange={handleChange} />
                <Input
                    text="Espécie:"
                    type="text"
                    name="species"
                    value={pet.species || ""}
                    handleOnChange={handleChange} />
                <Select
                    name="gender"
                    text="Gênero"
                    options={gender}
                    value={pet.gender || ""}
                    handleOnChange={handleGender}

                />
                <Select
                    name="size"
                    text="Tamanho"
                    options={size}
                    value={pet.size || ""}
                    handleOnChange={handlePort}

                />

                <Input
                    text="Local encontrado:"
                    type="text"
                    name="local"
                    value={pet.local || ""}
                    handleOnChange={handleChange} />
                <Input
                    text="Ponto de referência:"
                    type="text"
                    name="landmark"
                    value={pet.landmark || ""}
                    handleOnChange={handleChange} />
                <Input
                    text="Data:"
                    type="date"
                    name="date"
                    value={pet.date || ""}
                    handleOnChange={handleChange} />
                <Input
                    text="Recompensa:"
                    type="text"
                    name="reward"
                    value={pet.reward || ""}
                    handleOnChange={handleChange} />
                <Select
                    name="situation"
                    text="Situação:"
                    options={situation}
                    value={pet.situation || ""}
                    handleOnChange={handleSituation}

                />
                <Input
                    text="Comentário"
                    name="comment"
                    type="text"
                    value={pet.comment || ""}
                    handleOnChange={handleChange}
                />
                <input type="submit" value={btnText} />
            </form>
        </div>
    )
}

export default PetForm;