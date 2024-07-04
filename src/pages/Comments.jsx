import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState, useEffect } from 'react';
import SingleComment from "../components/comments/SingleComment";
import Navbar from "../components/logo/Navbar";
import { faAngleDoubleLeft } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import FormComments from "../components/comments/FormComments";



const Comments = () => {
    
    return (
        <div className="bg-white-gradient h-screen ">
            <Navbar />
            <div className="flex flex-col w-[90%] justify-center m-auto gap-2">
                <div className="flex flex-row content-center self-end pb-2">
                    <h1 className="uppercase text-[1.5em] self-end">Comments</h1>
                </div>
                <div className="flex flex-col justify-center content-center bg-[color:var(--col-purer-white)] rounded-[22px] mt-[0.5em] py-5 gap-3 drop-shadow-xl overflow-auto h-[30em] no-scrollbar">
                {comments.map((comment, index) => (
                    <SingleComment key={index} comment={comment.comment} author={comment.author} admin="hidden"/>
                ))}
                </div>
                    <FormComments />
            </div>
        </div>
    );
};

export default Comments;