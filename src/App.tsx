import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Register } from "./page/Register";
import { Login } from "./page/Login";
import "./style/tailwind.css";
import "./style/Global.css";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
