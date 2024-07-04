import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch} from "@fortawesome/free-solid-svg-icons";


const SearchCity = ({className, text, view, length}) => {
    return(
        <section>
            <div className={className}>
                <h3 className="font-medium text-[--col-dark] text-[1.5rem] ">{text}</h3>
                <div>
                    <input type="text" className={`rounded-[0.5rem] shadow-[inset_0px_1px_8px_rgba(0,0,0,0.2)] border-[#D8D8D8] ${length} h-[2rem]`}/>
                    <FontAwesomeIcon icon={faSearch} className={`text-[color:var(--col-dark)]  self-start fa-lg ml-7 ${view}`}/>
                </div>
            </div>
        </section>
    )
}

export default SearchCity;