import { Outlet } from "react-router-dom";
import Navbar from "../components/logo/Navbar";


const Layout = () => {
    return(
        <>
            <Navbar />
            <main>
                <Outlet />
            </main>
        </>
    )

}

export default Layout;