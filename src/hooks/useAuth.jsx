import api from "../utils/api";
import useFlashMessage from "./useFlashMessage";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function useAuth() {
  const [authenticated, setAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const { setFlashMessage } = useFlashMessage();

  useEffect(() => {
    const token = localStorage.getItem("token");
    //console.log(token);
    if (token) {
      try {
        const parsedToken = JSON.parse(token);
        const payloadBase64 = parsedToken.split(" ")[1];
        const payload = JSON.parse(atob(payloadBase64));
        const isExpired = payload.exp * 1000 < Date.now();

        if (isExpired) {
          localStorage.removeItem("token");
          setAuthenticated(false);
          api.defaults.headers.Authorization = undefined;
        } else {
          api.defaults.headers.Authorization = `Bearer ${parsedToken}`;
          setAuthenticated(true);
        }
      } catch (error) {
        console.error("Erro ao validar token", error);
        localStorage.removeItem("token");
        setAuthenticated(false);
      }

      api.defaults.headers.Authorization = `Bearer ${JSON.parse(token)}`;
      setAuthenticated(true);
    }

    setLoading(false);
  }, []);

  // LOGIN DO USUÁRIO
  async function login(user) {
    let messageText = "Login efetuado com sucesso!";
    let messageType = "success";

    try {
      const response = await api.post("/users/login", user);
      //console.log(response);
      await authUser(response.data);
    } catch (error) {
      console.log("Erro ao efetuar login", error);
      messageText = error.response.data.message;
      messageType = "error";
    } finally {
      setFlashMessage(messageText, messageType);
    }
  }

  // REGISTRO DO USUÁRIO
  async function register(user) {
    let messageText = "Cadastro realizado com sucesso!";
    let messageType = "success";
    try {
      const data = await api.post("/users/register", user).then((response) => {
        navigate("/login");
        return response.data;
      });

      console.log(data);
    } catch (error) {
      messageText = error.response.data.message;
      messageType = "error";
    } finally {
      setFlashMessage(messageText, messageType);
    }
  }

  // LOGOUT DO USUÁRIO
  async function logout() {
    let messageText = "Logout efetuado com sucesso!";
    let messageType = "success";

    setAuthenticated(false);
    localStorage.clear("token");

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
  return { register, login, logout, authenticated, loading };
}
