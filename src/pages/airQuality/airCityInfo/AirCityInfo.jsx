
const AirCityInfo = ({city, qualityNumber, status}) => {

    return (
        <div className="">
            <div>
                <span></span>
                <span></span>
            </div>
            <section className="flex flex-col px-[3em] py-[3em]">
                <h2 className="self-end uppercase text-[1.5em]">{city}</h2>
                <p className="self-center text-[10em] font-medium ">{qualityNumber}</p>
                <p className="uppercase self-center">Calidad Aire</p>
                <p className="uppercase self-center text-[1.75em] font-medium">{status}</p>
            </section>
        </div>
    )
}

export default AirCityInfo;