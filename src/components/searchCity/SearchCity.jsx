import { useState } from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const SearchCity = ({ className, text, view, length }) => {
    const [cityName, setCityName] = useState('');

    const handleSearch = async () => {
        try {
            const response = await axios.post('http://localhost:3000/api/fetch-city', { city: cityName });
            console.log(response.data); 
        } catch (error) {
            console.error('Error al crear la ubicación:', error);
        }
    };


    return (
        <section>
            <div className={className}>
                <h3 className="font-medium mb-3 text-[--col-dark] text-[1.5rem] ">{text}</h3>
                <div>
                    <input 
                        type="text" 
                        className={`rounded-[0.5rem] focus:ring-4 text-xl p-2 shadow-[inset_0px_1px_8px_rgba(0,0,0,0.2)] border-[#D8D8D8] ${length} h-[2rem]`}
                        value={cityName}
                        onChange={(e) => setCityName(e.target.value)}
                    />
                    <Link to={`/airquality/${encodeURIComponent(cityName)}`}>
                        <FontAwesomeIcon 
                            icon={faSearch} 
                            className={`text-[color:var(--col-dark)]  self-start fa-lg ml-7 ${view}`}
                            onClick={handleSearch}
                        />
                    </Link>  
                </div>
            </div>
        </section>
    );
};

export default SearchCity;
