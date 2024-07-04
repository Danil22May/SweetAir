import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMessage } from "@fortawesome/free-regular-svg-icons";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { faPen } from "@fortawesome/free-solid-svg-icons";



const SingleComment = ({comment, admin}) => {

    return (
        <div className="rounded-[22px] bg-[color:var(--col-dark)] w-[85%] py-4 px-3 flex flex-row justify-around gap-1">
                <FontAwesomeIcon icon={faMessage} className="text-[color:var(--col-white)] ml-1 mr-[0.1em]"/>
            <p className="text-[color:var(--col-white)] text-center text-light my-2">{comment}</p>
            <div className={`${admin} flex flex-col gap-7 fa-sm space-between pl-1`}>
                <FontAwesomeIcon icon={faPen} className="text-[color:var(--col-white)] self-start "/>
                <FontAwesomeIcon icon={faTrashCan} className="text-[color:var(--col-white)] self-end"/>
            </div>
        </div>
    )
}

export default SingleComment;