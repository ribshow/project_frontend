import api from "../utils/api";

// export default async function Register(user) {
//     try {
//         const data = await api.post("/users/register", user).then((response) => {
//             response.data;
//         })

//         console.log(data);
//     } catch (error) {
//         console.error("Erro ao registrar usuário", error);
//     }
// }

export default function useAuth() {
    async function register(user) {
        try {
            const data = await api.post("/users/register", user).then((response) => {
                return response.data;
            })

            console.log(data);

        } catch (error) {
            console.error("Erro ao registrar usuário", error);
        }
    }
    return { register };
}