import SearchCity from "../components/searchCity/SearchCity";
import Navbar from "../components/logo/Navbar";


const Search = () => {

    return (
        <>
        <div className="w-screen h-screen bg-white-gradient absolute top-0 z-[-2]">
            <Navbar/>
            <div className="flex flex-col">
            <SearchCity className="pt-[5rem] pl-[3.5rem] w-[370px] mx-auto" text="Busca tu ciudad" length="w-[15rem]"/>
            </div>
            <img src="public/assets/wavesIntroDesktop.png" className="absolute bottom-0 z-[-1] object-right lg:h-[500px] w-[100%]"></img>
        </div>
        </>
    )
}

export default Search;