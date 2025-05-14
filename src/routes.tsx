import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Produtos from "./pages/Products.tsx";
import Home from "./pages/Home.tsx";

const AppRoutes: React.FC = () => {
    return(
        <Router>
            <Routes>
                <Route path="/" element={ <Home/> } />
                <Route path="/produtos" element={ <Produtos /> } />
            </Routes>
        </Router>
    )
}

export default AppRoutes