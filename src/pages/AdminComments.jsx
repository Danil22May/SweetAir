import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import SingleComment from "../components/comments/SingleComment";
import Navbar from "../components/logo/Navbar";
import { useState, useEffect } from 'react';
import FormComments from "../components/comments/FormComments";




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
    <div className="bg-white-gradient lg:h-[100vh]" >
            <Navbar />
            <div className="flex flex-col w-[90%] lg:w-[80%] lg:h-auto h-[50%] justify-around m-auto gap-2 py-4">
                <div className="flex flex-row self-end pb-2">
                    <h1 className="uppercase text-[1.5em] self-end">Comments</h1>
                </div>
                <div className="flex flex-col lg:flex-row gap-5">
                    <div className="flex flex-col items-center content-center bg-[color:var(--col-purer-white)] rounded-[22px] py-5 gap-3 drop-shadow-xl overflow-auto h-[30em] lg:w-[90%]">              
                {comments.map((comment, index) => (
                        <SingleComment key={index} id = {comment.id} comment={comment.comment} author={comment.author} admin={true}/>
                    ))}
                </div>
                <FormComments />
            </div>
        </div>
    </div>

    )
}

export default AdminComments;