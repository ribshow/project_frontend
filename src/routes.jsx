import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Login from "./pages/Auth/Login/Login";
import Register from "./pages/Auth/Register/Register";
import AddPet from "./pages/Pet/Create/AddPet";
import Details from "./pages/Pet/Details/Details";
import Profile from "./pages/Profile/Profile";
import Contact from "./pages/Pet/Contact/Contact";
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

            <Route
              path="/pets/details"
              element={
                <PrivateRoute>
                  <Details />
                </PrivateRoute>
              }
            />

            <Route
              path="/pets/contact"
              element={
                <PrivateRoute>
                  <Contact />
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
