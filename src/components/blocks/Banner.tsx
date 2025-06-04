import Button from "../atoms/Button"
import banner from "../../../public/images/trucks.jpg"

const Banner = () => {
    return (
        <section className="h-[551px] px-[10.32rem] py-[4.06rem] flex relative">
            <div className="w-[33.75rem] flex flex-col gap-[2rem] text-[#333333]">
                <h1 className="text-[3.75rem] font-bold leading-[4.75rem]">Affordable truck service</h1>
                <p className="w-[31.00rem] text-[1.13rem] opacity-80">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc odio in et, lectus sit lorem id integer.</p>
                <div>
                    <Button className="px-[37px]">Чета сделать</Button>
                </div>
            </div>
            <div>
                <figure className="absolute bottom-0 right-0">
                    <img src={banner} alt="banner" />
                </figure>
            </div>
        </section>
    )
}

export default Banner