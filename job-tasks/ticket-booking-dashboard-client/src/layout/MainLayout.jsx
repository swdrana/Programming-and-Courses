import { Outlet } from "react-router-dom"
import Nav from "../components/Nav"

function MainLayout() {
    return (
        <>
            <Nav/>
            <Outlet/>
        </>
    )
}

export default MainLayout
