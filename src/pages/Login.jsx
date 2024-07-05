import Navbar from "../components/logo/Navbar";
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';


const Login  =() => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();
        if (username === 'Admin' && password === 'Admin') {
            navigate('/admin-comments');
        } else {
            alert('Usuario o contraseña incorrectos. No eres Administrador');
        }
    };
    return (
        <>
        <div className="w-screen h-screen bg-white-gradient absolute top-0 z-[-2]">
            <Navbar/>
            <div className="flex flex-col">
                <form className="mx-auto" onSubmit={handleLogin}>
                    <div className="pt-[2rem] pl-[3.7rem]">
                        <h3 className="font-medium text-[--col-dark] text-[1.5rem] ">Usuario</h3>
                        <div>
                            <input 
                                    type="Usuario" 
                                    className={`rounded-[0.5rem] shadow-[inset_0px_1px_8px_rgba(0,0,0,0.2)] border-[#D8D8D8] w-[20rem] h-[2rem]`}
                                    value={username}
                                    onChange={(e) => setUsername(e.target.value)}
                            />
                        </div>
                    </div>
                    <div className="pt-[2.5rem] pl-[3.7rem]">
                        <h3 className="font-medium text-[--col-dark] text-[1.5rem] ">Contraseña</h3>
                        <div>
                            <input 
                                    //type="Usuario" 
                                    className={`rounded-[0.5rem] shadow-[inset_0px_1px_8px_rgba(0,0,0,0.2)] border-[#D8D8D8] w-[20rem] h-[2rem]`}
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    type="password"
                            />
                        </div>
                    </div>
                    <button className="bg-[--col-dark] text-[--col-white] w-[7rem] h-[2.5rem] rounded-[2.5rem] mt-[2.5rem] ml-[10rem]" type= "submit">Entrar</button>
                </form>
            </div>
            <img src="public/assets/wavesIntroDesktop.png" className="absolute bottom-0 z-[-1] object-right lg:h-[500px] w-[100%]"></img>
        </div>
        </>
    )

}

export default Login;