import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDoubleRight } from "@fortawesome/free-solid-svg-icons";
import SingleComment from "./SingleComment";
import { Link } from "react-router-dom";



const CommentsMain = () => {
    return (
        <div className="w-[85%] m-auto flex flex-col items-center justify-center content-center bg-[color:var(--col-white)] rounded-[22px] mt-[1em] py-5 gap-4 drop-shadow-xl">
            <SingleComment comment="Soy un comentario sobre la calidad del aire de esta ciudad"/>
            <SingleComment comment="Soy un comentario sobre la calidad del aire de esta ciudad"/>
            <Link to="/comments"><FontAwesomeIcon icon={faAngleDoubleRight} className="border-[solid]  fa-lg text-[color:var(--col-dark)]"/></Link>
        </div>
    )
}

export default CommentsMain;