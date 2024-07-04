import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import SingleComment from "../components/comments/SingleComment";
import Navbar from "../components/logo/Navbar";
import { faAngleDoubleLeft } from "@fortawesome/free-solid-svg-icons";


const Comments = () => {
    const comment = ['Soy un comentario sobre la calidad del aire de esta ciudad', 'Soy un comentario sobre la calidad del aire de esta ciudad', 'Soy un comentario sobre la calidad del aire de esta ciudad', 'Soy un comentario sobre la calidad del aire de esta ciudad']

    return (
        <div className="bg-white-gradient h-screen ">
            <Navbar />
            <div className="px-[0.5em] mx-[1em] flex flex-col">
                <div className="flex flex-row justify-between mx-3 content-center pb-2">
                    <FontAwesomeIcon icon={faAngleDoubleLeft} className="text-[color:var(--col-dark)] self-center"/>
                    <h1 className="uppercase text-[1.5em] self-center">Comments</h1>
                </div>
                <div className="m-auto flex flex-col items-center justify-center content-center bg-[color:var(--col-white)] rounded-[22px] mt-[1em] py-5 gap-4 drop-shadow-xl">
                    {comment.map((comment, index) => (
                        <SingleComment key={index} comment={comment} admin="hidden"/>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Comments;