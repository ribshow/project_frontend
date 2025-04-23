import { Navigate } from "react-router-dom";
import { Context } from "../context/Context";
import { useContext } from "react";

const PrivateRoute = ({ children }) => {
  const { authenticated } = useContext(Context);

  return authenticated ? children : <Navigate to="/login" />;
};

export default PrivateRoute;
