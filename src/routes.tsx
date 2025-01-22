import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Catalogue from "./pages/Catalogue.tsx";
import LandingPg from "./pages/LandingPg.tsx";

const AppRoutes: React.FC = () => {
    return(
        <Router>
            <Routes>
                <Route path="/" element={ <LandingPg /> } />
                <Route path="/catalogue" element={ <Catalogue /> } />
            </Routes>
        </Router>
    )
}

export default AppRoutes