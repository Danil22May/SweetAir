import { Outlet } from "react-router-dom";
import Navbar from "../components/logo/Navbar";


const Layout = () => {
    return(
        <div className="w-screen h-screen bg-green-gradient">
            <main>
                <Outlet />
            </main>
        </div>
    )

}

export default Layout;