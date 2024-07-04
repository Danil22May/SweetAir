import { useEffect, useState } from 'react';
import axios from 'axios';
import AirCityInfo from '../components/airQuality/airCityInfo/AirCityInfo';
import Navbar from '../components/logo/Navbar';
import { useParams } from 'react-router-dom';

const AirQualityMain = () => {
    const { cityName } = useParams();
    const decodedCityName = decodeURIComponent(cityName);
    const [airQualityData, setAirQualityData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [backgroundClass, setBackgroundClass] = useState('bg-green-gradient'); 
    const [status, setStatus] = useState('buena'); 
    const [id, setId] = useState("1"); 

    useEffect(() => {
        const fetchAirQualityData = async () => {
            try {
                const response = await axios.get(`https://api.waqi.info/feed/${decodedCityName}/?token=095b5eb0cab92e4551eeccf569b81bf8244dcb1b`);
                setAirQualityData(response.data);
                setLoading(false);
            } catch (error) {
                setError(error);
                setLoading(false);
            }
        };

        fetchAirQualityData();
    }, [decodedCityName]);

    // Función para determinar el color de fondo y el status basado en el valor de calidad del aire (aqi)
    useEffect(() => {
        if (!airQualityData) return;

        const aqi = airQualityData.data.aqi;

        if (aqi <= 50) {
            setBackgroundClass('bg-green-gradient');
            setStatus('buena');
            setId("1");
        } else if (aqi <= 100) {
            setBackgroundClass('bg-yellow-gradient');
            setStatus('media');
            setId("2");
        } else if (aqi <= 150) {
            setBackgroundClass('bg-orange-gradient');
            setStatus('mala');
            setId("3");
        } else if (aqi <= 200) {
            setBackgroundClass('bg-pink-gradient');
            setStatus('dañina');
            setId("4");
        } else if (aqi <= 250) {
            setBackgroundClass('bg-red-gradient');
            setStatus('muy dañina');
            setId("5");
        } else if (aqi <= 300) {
            setBackgroundClass('bg-violet-gradient');
            setStatus('arriesgada');
            setId("6");
        } else {
            setBackgroundClass('bg-white-gradient');
            setStatus('muerte');
            setId("7");
        }
    }, [airQualityData]);

    if (loading) {
        return <div className="w-screen h-screen bg-green-gradient">Loading...</div>;
    }

    if (error) {
        return <div className="w-screen h-screen bg-red-500">Error: {error.message}</div>;
    }

    return (
        <div className={`w-screen h-screen ${backgroundClass}`}>
            <Navbar />
            {airQualityData && (
                <AirCityInfo
                    qualityNumber={airQualityData.data.aqi}
                    city={decodedCityName}
                    status={status}
                    id = {id}
                />
            )}
        </div>
    );
};

export default AirQualityMain;
