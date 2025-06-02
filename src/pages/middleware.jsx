import { Navigate } from "react-router-dom";
import { Context } from "../context/Context";
import { useContext } from "react";

const PrivateRoute = ({ children }) => {
  const { authenticated, loading } = useContext(Context);
  console.log(authenticated);

  if (loading) {
    return <p>Carregando...</p>;
  }

  return authenticated ? children : <Navigate to="/login" />;
};

export default PrivateRoute;
