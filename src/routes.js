import React from "react";
import { BrowserRouter, Route, Routes} from "react-router-dom";
import PlanetScreen from "./screens/planets";

const ScreenRoutes = () => (
    <BrowserRouter>
        <Routes>
            <Route exact path='/' element={<PlanetScreen />}/>
        </Routes>
    </BrowserRouter>
    )

export default ScreenRoutes;