import { Route, Routes } from "react-router";
import Login from "./pages/login/login";
import Register from "./pages/register/register";
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/styles/main.scss'
import Clinet from "./pages/client/client";
const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Login />} />
      <Route path='/register' element={<Register />} />
      <Route path='/client' element={<Clinet />} />
    </Routes>
  );
}

export default App;
