import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMessage } from "@fortawesome/free-regular-svg-icons";


const SingleComment = ({comment}) => {

    return (
        <div className="rounded-[22px] bg-[color:var(--col-dark)] w-[85%] py-4 px-3 flex flex-row space-around ">
            <FontAwesomeIcon icon={faMessage} className="text-[color:var(--col-white)] my-2"/>
            <p className="text-[color:var(--col-white)] text-center text-light my-2">{comment}</p>
        </div>
    )
}

export default SingleComment;