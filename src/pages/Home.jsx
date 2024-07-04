
import SearchCity from "../components/searchCity/SearchCity";



const Home  = () => {

    return (
        <div className="w-screen h-screen bg-white-gradient absolute top-0 z-[-2]">
            <div className="mt-[11rem]">
                <h1 className="text-[5rem] font-[600] text-center">SWEET</h1>
                <h2 className="text-[5rem] font-[600] text-center mt-[-3rem]">Air</h2>
            </div>
            <SearchCity className="pt-[5rem] pl-[4.7rem] lg:ml-[36%]" text="Busca tu ciudad" length="w-[15rem]"/>
            <img src="public/assets/wavesIntroDesktop.png" className="absolute bottom-0 z-[-1]"></img>
        </div>

    )
}

export default Home;
