import api from "../utils/api";
import useFlashMessage from "./useFlashMessage";

export default function useAuth() {
    const { setFlashMessage } = useFlashMessage();
    async function register(user) {
        let messageText = "Cadastro realizado com sucesso!";
        let messageType = "success";
        try {
            const data = await api.post("/users/register", user).then((response) => {
                console.log(response);
                return response.data;

            })

            console.log(data);

        } catch (error) {
            messageText = error.response.data.message;
            messageType = "error";
        }
        setFlashMessage(messageText, messageType);
    }
    return { register };
}