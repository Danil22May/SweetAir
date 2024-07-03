import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { faSearch} from "@fortawesome/free-solid-svg-icons";



const Navbar = () => {

    return (
        <div className="flex flex-row w-[100%] justify-between content-center">
            <FontAwesomeIcon icon={faSearch} className="text-[color:var(--col-dark)] m-[3em] self-start fa-lg" />
            <FontAwesomeIcon icon={faUser} className="text-[color:var(--col-dark)] m-[2em] self-end fa-2x" />
                
        </div>
    )
}

export default Navbar;