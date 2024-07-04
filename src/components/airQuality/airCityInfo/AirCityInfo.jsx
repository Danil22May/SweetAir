
import Navbar from "../../logo/Navbar";
import CommentsMain from "../../comments/CommentsMain";
import TipsStatus from "./tips/TipsStatus";


const AirCityInfo = ({city, qualityNumber, status}) => {

    return (
        <div className="flex flex-col">
            <section className="flex flex-col px-[3em] text-[color:var(--col-dark)] ">
                <h2 className="self-end uppercase text-[1.5em] pb-6">{city}</h2>
                <p className="self-center text-[10em] font-medium font-sans-secondary leading-[1em]">{qualityNumber}</p>
                <p className="uppercase self-center">Calidad Aire</p>
                <p className="uppercase self-center text-[1.75em] font-medium">{status}</p>
            </section>
            <TipsStatus />
            <CommentsMain />
        </div>
    )
}

export default AirCityInfo;