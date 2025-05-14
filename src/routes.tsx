import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Produtos from "./pages/Products.tsx";
import HomePage from "./pages/HomePage.tsx";

const AppRoutes: React.FC = () => {
    return(
        <Router>
            <Routes>
                <Route path="/" element={ <HomePage/> } />
                <Route path="/produtos" element={ <Produtos /> } />
            </Routes>
        </Router>
    )
}

export default AppRoutes