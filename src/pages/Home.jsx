
import AirCityInfo from "./airQuality/airCityInfo/AirCityInfo";


const Home  = () => {

    return (
        <div className="w-screen h-screen bg-green-gradient">
            < AirCityInfo status="buena" qualityNumber="47" city="Oviedo"/>
        </div>

    )
}

export default Home;
