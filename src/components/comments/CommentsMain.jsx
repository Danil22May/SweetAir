import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDoubleRight } from "@fortawesome/free-solid-svg-icons";
import SingleComment from "./SingleComment";
import { Link } from "react-router-dom";

const CommentsMain = () => {
    const [comments, setComments] = useState([]);

    useEffect(() => {
        fetchComments();
    }, []);

    const fetchComments = async () => {
        try {
            const response = await fetch('http://localhost:3000/api/comments'); // Reemplaza la URL con la URL correcta de tu backend
            if (!response.ok) {
                throw new Error('Failed to fetch comments');
            }
            const data = await response.json();
            // Limitar a solo dos comentarios
            const limitedComments = data.slice(0, 2);
            setComments(limitedComments);
        } catch (error) {
            console.error('Error fetching comments:', error);
            // Manejar el error, mostrar un mensaje de error, etc.
        }
    };

    return (
        <div className="w-[85%] m-auto flex flex-col items-center justify-center content-center bg-[color:var(--col-white)] rounded-[22px] mt-[1em] py-5 gap-4 drop-shadow-xl">
            {comments.map(comment => (
                <SingleComment key={comment.id} comment={comment.comment} author = {comment.author} />
            ))}
        </div>
    );
};

export default CommentsMain;
