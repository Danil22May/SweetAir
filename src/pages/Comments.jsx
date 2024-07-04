import { useState, useEffect } from 'react';
import SingleComment from "../components/comments/SingleComment";
import Navbar from "../components/logo/Navbar";

const Comments = () => {
    const [comments, setComments] = useState([]);

    useEffect(() => {
        fetchComments();
    }, []);

    const fetchComments = async () => {
        try {
            const response = await fetch('http://localhost:3000/api/comments'); 
            if (!response.ok) {
                throw new Error('Failed to fetch comments');
            }
            const data = await response.json();
            setComments(data);
        } catch (error) {
            console.error('Error fetching comments:', error);
        }
    };

    return (
        <div className="bg-white-gradient">
            <Navbar />
            <div className="w-[85%] m-auto flex flex-col items-center justify-center content-center bg-[color:var(--col-white)] rounded-[22px] mt-[1em] py-5 gap-4 drop-shadow-xl">
                {comments.map((comment, index) => (
                    <SingleComment key={index} comment={comment.comment} author={comment.author}/>
                ))}
            </div>
        </div>
    );
};

export default Comments;
