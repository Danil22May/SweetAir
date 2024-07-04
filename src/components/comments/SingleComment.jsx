import { useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMessage } from "@fortawesome/free-regular-svg-icons";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { faPen } from "@fortawesome/free-solid-svg-icons";

const SingleComment = ({ id, comment, author, admin, onDelete, onUpdate }) => {
    const [isEditing, setIsEditing] = useState(false);
    const [newComment, setNewComment] = useState(comment);
    const [newAuthor, setNewAuthor] = useState(author);

    const handleDelete = async () => {
        try {
            const response = await fetch(`http://localhost:3000/api/comments/${id}`, {
                method: 'DELETE',
            });

            if (response.ok) {
                console.log('Comentario eliminado exitosamente');
                if (onDelete) {
                    onDelete(id);
                }
                window.location.reload();  // Recarga la página después de eliminar el comentario
            } else {
                console.error('Error al eliminar el comentario:', response.statusText);
                alert('Error al eliminar el comentario');
            }
        } catch (error) {
            console.error('Error al enviar la solicitud:', error);
            alert('Error al enviar la solicitud');
        }
    };

    const handleUpdate = async () => {
        try {
            const response = await fetch(`http://localhost:3000/api/comments/${id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ text: newComment, author: newAuthor }),
            });

            if (response.ok) {
                console.log('Comentario actualizado exitosamente');
                setIsEditing(false);
                if (onUpdate) {
                    onUpdate(id, newComment, newAuthor);
                }
                window.location.reload();  // Recarga la página después de actualizar el comentario
            } else {
                console.error('Error al actualizar el comentario:', response.statusText);
                alert('Error al actualizar el comentario');
            }
        } catch (error) {
            console.error('Error al enviar la solicitud:', error);
            alert('Error al enviar la solicitud');
        }
    };

    return (
        <div className="rounded-[22px] bg-[color:var(--col-dark)] w-[85%] py-4 px-3 flex flex-row items-center justify-start space-x-4">
            <FontAwesomeIcon icon={faMessage} className="text-[color:var(--col-white)] my-2" />
            {isEditing ? (
                <div className="flex flex-col">
                    <input
                        type="text"
                        value={newAuthor}
                        onChange={(e) => setNewAuthor(e.target.value)}
                        className="text-[color:var(--col-white)] text-center text-light my-2 bg-transparent border-b border-[color:var(--col-white)]"
                    />
                    <textarea
                        value={newComment}
                        onChange={(e) => setNewComment(e.target.value)}
                        className="text-[color:var(--col-white)] text-center text-light my-2 bg-transparent border-b border-[color:var(--col-white)]"
                    />
                    <button onClick={handleUpdate} className="text-[color:var(--col-white)] mt-2">Guardar</button>
                </div>
            ) : (
                <div className="flex flex-col">
                    <p className="text-[color:var(--col-white)] text-center text-light my-2">{author} : {comment}</p>
                </div>
            )}
            {admin && (
                <div className="flex flex-col gap-7 fa-sm space-between pl-1">
                    <FontAwesomeIcon
                        icon={faPen}
                        className="text-[color:var(--col-white)] self-start self-end"
                        onClick={() => setIsEditing(!isEditing)}
                    />
                    <FontAwesomeIcon
                        icon={faTrashCan}
                        className="text-[color:var(--col-white)] self-end"
                        onClick={handleDelete}
                    />
                </div>
            )}
        </div>
    );
};

export default SingleComment;
