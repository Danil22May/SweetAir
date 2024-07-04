import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMessage } from "@fortawesome/free-regular-svg-icons";

const FormComments = () => {
    return (
        <section className="bg-[color:var(--col-purer-white)] rounded-[22px] mt-[1em] py-2 drop-shadow-xl no-scrollbar">
        <form action="" className="w-[90%] flex flex-col px-4 gap-6 m-auto">
            <input type="text" id="uname" name="uname" placeholder="Nombre" className="mt-3 shadow-[inset_0px_1px_8px_rgba(0,0,0,0.4)] border-[#D8D8D8] rounded-[0.75em] pl-3 h-[2.5em] opacity-50 overflow-x-hidden"/>
            <input type="text" id="comment" name="comment" placeholder="Comentario" className="shadow-[inset_0px_1px_8px_rgba(0,0,0,0.4)] border-[#D8D8D8] rounded-[1.5rem] h-[7em] pl-4 opacity-50 text-left text-wrap overflow-x-hidden" />
            <button type="submit" className="content-center ">
                <FontAwesomeIcon icon={faMessage} className="text-[color:var(--col-dark)] mb-1 mr-1 opacity-50 fa-lg"/>
            </button>
        </form>
    </section>
    )
}

export default FormComments;