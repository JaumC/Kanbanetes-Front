import { Route, Routes } from "react-router-dom";
import { Home } from "../pages/Home";
import { Boards } from "../pages/Boards";
import { Profile } from "../pages/Profile";
import { Project } from "../pages/Project";

export function AppRoutes(){
    return(
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/boards" element={<Boards />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/project" element={<Project />} />
        </Routes>
    )
}