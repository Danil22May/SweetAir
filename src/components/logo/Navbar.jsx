import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { faSearch} from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";




const Navbar = () => {

    return (
        <div className="flex flex-row w-[100%] justify-between content-center px-4 mb-2 lg:px-[9em] lg:py-[4em]">
            <NavLink to="/search" className="my-[1.5em] mx-[1.5em] flex content-center justify-center relative">
                <FontAwesomeIcon icon={faSearch} className="text-[color:var(--col-dark)]  self-start fa-lg object-cover absolute mt-2" />
                <div className="w-[40px] h-[40px] bg-[color:var(--col-dark)] rounded-[50%] opacity-[20%] absolute hover:opacity-[30%]"></div>
            </NavLink>
            <NavLink to="/login" className="my-[1.5em] mx-[1.5em] flex content-center justify-center relative">
            <FontAwesomeIcon icon={faUser} className="text-[color:var(--col-dark)] self-end fa-lg mt-2" />
                <div className="w-[40px] h-[40px] bg-[color:var(--col-dark)] rounded-[50%] opacity-[20%] absolute hover:opacity-[30%]"></div>
            </NavLink>
        </div>
    )
}

export default Navbar;