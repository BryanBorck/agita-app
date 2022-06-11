import { BrowserRouter, Routes, Route } from "react-router-dom";
import Chatbot from "./components/Chatbot";
import GlobalStyle from "./components/GlobalStyle";
import Login from "./components/Login";
import Profile from "./components/Profile";
import Start from "./components/Start";
import Store from "./components/Store";
import WhoWeAre from "./components/WhoWeAre";


function App() {
  return (
    <BrowserRouter>
      <GlobalStyle/>
      <Routes>
        <Route path="/"  element={<Start/>} />
        <Route path="/login"  element={<Login/>} />
        <Route path="/quemsomos"  element={<WhoWeAre/>} />
        <Route path="/converse"  element={<Chatbot/>} />
        <Route path="/loja"  element={<Store/>} />
        <Route path="/profile"  element={<Profile/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;