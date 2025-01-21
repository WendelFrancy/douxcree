import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Home from "./pages/Home.tsx";
import About from "./pages/About.tsx";
import LandingPg from "./components/landingpage/LandingPg.tsx";

const AppRoutes: React.FC = () => {
    return(
        <Router>
            <Routes>
                <Route path="/" element={ <LandingPg /> } />
                <Route path="/about" element={ <About /> } />
                <Route path="/home" element={ <Home /> } />
            </Routes>
        </Router>
    )
}

export default AppRoutes