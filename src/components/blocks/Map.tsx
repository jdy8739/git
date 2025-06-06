import map from '../../../public/images/map.jpg'

const Map = () => {
    return (
        <section className="h-[33.81rem] bg-[#F4F4F4] relative">
            <article className="px-[10.31rem] py-[6.00rem] flex flex-col gap-[2.56rem]">
                <h1 className="font-bold text-[3rem]">Где мы?</h1>
                <div className="w-[34rem] opacity-80 flex flex-col gap-[0.6rem] leading-[1.5] text-[1.13rem]">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc odio in et, lectus sit lorem id integer.</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc odio in et, lectus sit lorem id integer.</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc odio in et, lectus sit lorem id integer.</p>
                </div>
            </article>
            <div className="absolute top-0 right-0">
                <img src={map} alt="map" />
            </div>
        </section>
    )
}

export default Map