import AirCityInfo from "../components/airQuality/airCityInfo/AirCityInfo";
import Navbar from "../components/logo/Navbar";


const AirQualityMain = () => {

    return (
        <div className="w-screen h-screen bg-green-gradient">
            <Navbar />
            <AirCityInfo qualityNumber="47" city="Oviedo" status="buena"/>
        </div>
    )
}

export default AirQualityMain;