import React from "react";
import { BrowserRouter, Route, Routes} from "react-router-dom";
import PlanetsScreen from "./screens/planets";
import PlanetScreen from "./screens/planet"
import NotFoundScreen from "./screens/notFound"

const ScreenRoutes = () => (
    <BrowserRouter>
        <Routes>
            <Route exact path='/' element={<PlanetsScreen />}/>
            <Route exact path='/planet/:id' element={<PlanetScreen/>}/>
            <Route path='*' element={<NotFoundScreen/>}></Route>
        </Routes>
    </BrowserRouter>
    )

export default ScreenRoutes;