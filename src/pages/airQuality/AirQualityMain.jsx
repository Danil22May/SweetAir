import AirCityInfo from "./airCityInfo/AirCityInfo";

const AirQualityMain = () => {

    return (
        <div className="w-screen h-screen bg-green-gradient">
            <AirCityInfo qualityNumber="47" city="Oviedo" status="buena"/>
        </div>
    )
}

export default AirQualityMain;