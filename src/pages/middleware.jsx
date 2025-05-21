import { Navigate } from "react-router-dom";
import { Context } from "../context/Context";
import { useContext } from "react";

const PrivateRoute = ({ children }) => {
  const { authenticated } = useContext(Context);
  console.log(authenticated);

  return authenticated ? children : <Navigate to="/login" />;
};

export default PrivateRoute;
