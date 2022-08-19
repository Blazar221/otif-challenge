import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Intro from "./Intro";

const OtifRoutes = () => {
    return <Router>
        <Routes>
            <Route path="/" element={<Intro />} />
        </Routes>
    </Router>
}

export default OtifRoutes