import { Outlet } from "react-router-dom";
import Navbar from "../components/logo/Navbar";


const Layout = () => {
    return(
        <div>
            <main>
                <Outlet />
            </main>
        </div>
    )

}

export default Layout;