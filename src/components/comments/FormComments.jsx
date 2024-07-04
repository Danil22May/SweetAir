import { useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMessage } from "@fortawesome/free-regular-svg-icons";

const FormComments = () => {
    const [uname, setUname] = useState('');
    const [comment, setComment] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('http://localhost:3000/api/comments', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ author: uname, comment: comment }),
            });

            if (response.ok) {
                const result = await response.json();
                alert('Comentario creado exitosamente');

                setUname('');
                setComment('');
                window.location.reload(); 
            } else {
                alert('Error al crear el comentario');
            }
        } catch (error) {
            //error
            window.location.reload(); 
        }
    };

    return (
        <section className="w-[100%] bg-[color:var(--col-purer-white)] rounded-[22px] mt-[1em] py-2 drop-shadow-xl no-scrollbar m-auto flex justify-center">
            <form onSubmit={handleSubmit} className="w-[86%] flex flex-col px-4 gap-6">
                <input 
                    type="text" 
                    id="uname" 
                    name="uname" 
                    placeholder="Nombre" 
                    value={uname}
                    onChange={(e) => setUname(e.target.value)}
                    className="mt-3 shadow-[inset_0px_1px_8px_rgba(0,0,0,0.4)] border-[#D8D8D8] rounded-[0.75em] pl-3 h-[2.5em] opacity-50"
                />
                <input 
                    type="text" 
                    id="comment" 
                    name="comment" 
                    placeholder="Comentario" 
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                    className="shadow-[inset_0px_1px_8px_rgba(0,0,0,0.4)] border-[#D8D8D8] rounded-[1.5rem] h-[7em] pl-4 opacity-50" 
                />
                <button type="submit" className="content-center ">
                    <FontAwesomeIcon icon={faMessage} className="text-[color:var(--col-dark)] mb-1 mr-1 opacity-50 fa-lg"/>
                </button>
            </form>
        </section>
    );
}

export default FormComments;
