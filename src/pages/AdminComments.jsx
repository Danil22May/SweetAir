import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import SingleComment from "../components/comments/SingleComment";
import Navbar from "../components/logo/Navbar";
import { faAngleDoubleLeft } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { useState, useEffect } from 'react';




const AdminComments = () => {
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
        <div className="bg-white-gradient h-screen ">
            <Navbar />
            <div className="flex flex-col w-[85%] h-[90%] justify-center m-auto gap-2">
                <div className="flex flex-row justify-between content-center pb-2">
                    <Link to="/search">
                        <FontAwesomeIcon icon={faAngleDoubleLeft} className="text-[color:var(--col-dark)] self-center"/>
                    </Link>
                    <h1 className="uppercase text-[1.5em] self-center">Comments</h1>
                </div>
                <div className="flex flex-col items-center content-center bg-[color:var(--col-purer-white)] rounded-[22px] mt-[0.5em] py-5 gap-3 drop-shadow-xl overflow-auto h-[30em]">
                    {comments.map((comment, index) => (
                        <SingleComment key={index} id = {comment.id} comment={comment.comment} author={comment.author} admin={true}/>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default AdminComments;