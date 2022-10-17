import React from "react";
import Home from "../pages/Home"
import Contatos from "../pages/Contatos";
import Projetos from "../pages/Projetos";
import Desenvolvimento from "../pages/Desenvolvimento";
import Header from "../pages/Header";
import Footer from "../pages/Footer";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";

export default function Rotas() {
    return(
         <Router>
            <Header/>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/contatos" element={<Contatos/>}/>
                <Route path="/projetos" element={<Projetos/>} />
                <Route path="/desenvolvimento" element={<Desenvolvimento/>}/>
            </Routes>
            <Footer/>
        </Router>

    )
}