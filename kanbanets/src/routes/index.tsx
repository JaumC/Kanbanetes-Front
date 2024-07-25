import { Route, Routes } from "react-router-dom";
import { Home } from "../pages/Home";
import { Boards } from "../pages/Boards";

export function AppRoutes(){
    return(
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/boards" element={<Boards />} />
        </Routes>
    )
}