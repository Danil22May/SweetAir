import SingleComment from "../components/comments/SingleComment";
import Navbar from "../components/logo/Navbar";


const Comments = () => {
    const comment = ['Soy un comentario sobre la calidad del aire de esta ciudad', 'Soy un comentario sobre la calidad del aire de esta ciudad', 'Soy un comentario sobre la calidad del aire de esta ciudad', 'Soy un comentario sobre la calidad del aire de esta ciudad']

    return (
        <div className="bg-white-gradient">
            <Navbar />
        <div className="w-[85%] m-auto flex flex-col items-center justify-center content-center bg-[color:var(--col-white)] rounded-[22px] mt-[1em] py-5 gap-4 drop-shadow-xl">
            {comment.map((comment, index) => (
                 <SingleComment key={index} comment={comment}/>
            ))}
           
        </div>
        </div>
    )
}

export default Comments;