
import SearchCity from "../components/searchCity/SearchCity";



const Home  = () => {

    return (
        <div className="w-screen h-screen bg-white-gradient absolute z-[-2]">
            <div className="mt-[11rem]">
                <h1 className="text-[5rem] font-[600] text-center">SWEET</h1>
                <h2 className="text-[5rem] font-[600] text-center mt-[-3rem]">Air</h2>
            </div>
            <SearchCity className="pt-[5rem] pl-[3.5rem] w-[370px] mx-auto" text="Busca tu ciudad" length="w-[15rem]"/>
            <img src="public/assets/wavesIntroDesktop.png" className="absolute bottom-0 z-[-1] object-right lg:h-[500px] w-[100%]"></img>
        </div>

    )
}

export default Home;
