import api from "../utils/api";
import useFlashMessage from "./useFlashMessage";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";


export default function useAuth() {
    const [authenticated, setAuthenticated] = useState(false);
    const navigate = useNavigate();
    const { setFlashMessage } = useFlashMessage();

    useEffect(() => {
        const token = localStorage.getItem("token");
        console.log(token);
        if (token) {
            api.defaults.headers.Authorization = `Bearer ${JSON.parse(token)}`;
            setAuthenticated(true);
        }
    }, []);

    // LOGIN DO USUÁRIO
    async function login(user) {
        let messageText = "Login efetuado com sucesso!";
        let messageType = "success";

        try {
            const response = await api.post("/users/login", user);
            console.log(response);
            await authUser(response.data);


        } catch (error) {
            console.log("Erro ao efetuar login", error);
            messageText = error.response.data.message;
            messageType = "error";
        }
        setFlashMessage(messageText, messageType);
    }

    // REGISTRO DO USUÁRIO
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

    // LOGOUT DO USUÁRIO
    async function logout() {
        let messageText = "Logout efetuado com sucesso!";
        let messageType = "success";

        setAuthenticated(false);
        localStorage.clear("tokne");

        api.defaults.headers.Authorization = undefined;
        navigate("/login");
        setFlashMessage(messageText, messageType);

    }

    // FUNÇÃO PARA AUTENTICAR USUÁRIO
    async function authUser(data) {
        setAuthenticated(true);
        localStorage.setItem("token", JSON.stringify(data.token));
        navigate("/");
    }
    return { register, login, logout, authenticated };
}