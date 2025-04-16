import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Login from "./pages/Auth/Login/Login";
import Register from "./pages/Auth/Register/Register";
import AddPet from "./pages/Pet/AddPet";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Container from "./components/Container/Container";
import Message from "./components/Message/Message";
import { UserProvider } from "./context/Context";

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
            <Route path="/pets/create" element={<AddPet />} />
          </Routes>
        </Container>
        <Footer />
      </UserProvider>
    </BrowserRouter>
  );
}

export default AppRoutes;
