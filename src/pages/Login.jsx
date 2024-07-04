import Navbar from "../components/logo/Navbar";
import SearchCity from "../components/searchCity/SearchCity";


const Login  =() => {

    return (
        <>
        <div className="w-screen h-screen bg-white-gradient absolute top-0 z-[-2]">
            <Navbar/>
            <div className="flex flex-col lg:ml-[36%]">
                <SearchCity className="pt-[2rem] pl-[3.7rem] " text="Usuario" length="w-[20rem]" view="hidden"/>
                <SearchCity className="pt-[2.5rem] pl-[3.7rem] " text="Contraseña" length="w-[20rem]" view="hidden"/>
                <button className="bg-[--col-dark] text-[--col-white] w-[7rem] h-[2.5rem] rounded-[2.5rem] mt-[2.5rem] ml-[10rem]">Entrar</button>
            </div>
            <img src="public/assets/wavesIntroDesktop.png" className="absolute bottom-0 z-[-1] object-right w-[100%]"></img>
        </div>
        </>
    )

}

export default Login;