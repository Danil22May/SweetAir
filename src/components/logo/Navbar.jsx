import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { faSearch} from "@fortawesome/free-solid-svg-icons";



const Navbar = () => {

    return (
        <div className="flex flex-row w-[100%] justify-between content-center">
            <div className="w-[40px] h-[40px] bg-[color:var(--col-dark)] rounded-[50%] m-[3em] flex content-center justify-center ">
                <FontAwesomeIcon icon={faSearch} className="text-[color:var(--col-dark)]  self-start fa-lg" />
            </div>
            <div>
                <FontAwesomeIcon icon={faUser} className="text-[color:var(--col-dark)] m-[2em] self-end fa-2x" />
            </div>
        </div>
    )
}

export default Navbar;