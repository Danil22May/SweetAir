import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import SingleComment from "../components/comments/SingleComment";
import Navbar from "../components/logo/Navbar";
import { faAngleDoubleLeft } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import FormComments from "../components/comments/FormComments";



const AdminComments = () => {
    const comment = ['Soy un comentario sobre la calidad del aire de esta ciudad', 'Soy un comentario sobre la calidad del aire de esta ciudad', 'Soy un comentario sobre la calidad del aire de esta ciudad', 'Soy un comentario sobre la calidad del aire de esta ciudad','Soy un comentario sobre la calidad del aire de esta ciudad', 'Soy un comentario sobre la calidad del aire de esta ciudad', 'Soy un comentario sobre la calidad del aire de esta ciudad']

    return (
        <div className="bg-white-gradient h-screen ">
            <Navbar />
            <div className="flex flex-col w-[90%] justify-center m-auto gap-2">
                <div className="flex flex-row justify-between content-center pb-2">
                    <Link to="/airquality">
                        <FontAwesomeIcon icon={faAngleDoubleLeft} className="text-[color:var(--col-dark)] self-center"/>
                    </Link>
                    <h1 className="uppercase text-[1.5em] self-center">Comments</h1>
                </div>
                <div className="flex flex-col items-center content-center bg-[color:var(--col-purer-white)] rounded-[22px] mt-[0.5em] py-5 gap-3 drop-shadow-xl overflow-auto h-[30em]">
                    {comment.map((comment, index) => (
                        <SingleComment key={index} comment={comment} admin="flex"/>
                    ))}
                </div>
                    <FormComments />
            </div>
        </div>
    )
}

export default AdminComments;