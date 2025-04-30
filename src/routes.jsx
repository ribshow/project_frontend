import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Login from "./pages/auth/Login/Login";
import Register from "./pages/auth/Register/Register";
import AddPet from "./pages/Pet/AddPet";
import Profile from "./pages/Profile/Profile";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Container from "./components/Container/Container";
import Message from "./components/Message/Message";
import { UserProvider } from "./context/Context";
import PrivateRoute from "./pages/middleware";

function AppRoutes() {
  return (
    <BrowserRouter>
      <UserProvider>
        <Header />
        <Message />
        <Container>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route
              path="/profile"
              element={
                <PrivateRoute>
                  <Profile />
                </PrivateRoute>
              }
            />
            <Route
              path="/pets/create"
              element={
                <PrivateRoute>
                  <AddPet />
                </PrivateRoute>
              }
            />
          </Routes>
        </Container>
        <Footer />
      </UserProvider>
    </BrowserRouter>
  );
}

export default AppRoutes;
