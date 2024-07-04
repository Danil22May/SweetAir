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
            <div className="flex flex-col w-[90%] lg:w-[50%] lg:h-[80%] h-[90%] justify-around m-auto gap-2 lg:mt-[5em]">
                <div className="flex flex-row self-end content-center pb-2">
                    <h1 className="uppercase text-[1.5em] item-end lg:mb-[2em]">Comments</h1>
                </div>
                <div className="flex flex-col items-center content-center bg-[color:var(--col-purer-white)] rounded-[22px] mt-[0.5em] py-3 lg:py-[3em] gap-3 drop-shadow-xl overflow-auto h-[60%] lg:h-[50em]">
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