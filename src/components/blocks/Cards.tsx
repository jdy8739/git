import Card1 from '../../../public/images/card1.png'
import Card2 from '../../../public/images/card2.png'
import Card3 from '../../../public/images/card3.png'
import Card4 from '../../../public/images/card4.png'

const Cards = () => {
    return (
        <section className="h-[851px] px-[12.31rem] py-[1.81rem_3.63rem] text-[#333333] flex flex-col gap-[3.00rem]">
            <div className="text-center flex flex-col gap-[1.25rem] items-center">
                <h1 className="text-[2.5rem] font-bold">Любые услуги за ваши денишки</h1>
                <p className="w-[28.13rem] text-[1.13rem] opacity-80">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc odio in et, lectus sit lorem id integer.</p>
            </div>
            <div className="grid grid-cols-2 grid-rows-2 h-full gap-[2.25rem_2rem]">
                <article className="bg-[#F5F5F5] rounded-[1.25rem] p-[1.5rem_1.8rem]">
                    <div className="flex flex-col gap-[0.9rem]">
                        <p className="w-[22.88rem] font-bold text-[1.5rem]">Б/у запчасти для грузовых авто из Европы</p>
                        <p className="w-[15.81rem] opacity-80">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc odio in et, lectus sit lorem id integer.</p>
                    </div>
                    <div>
                        {/* <img src={Card1} alt="card1" /> */}
                    </div>
                </article>
                <article className="bg-[#F5F5F5] rounded-[1.25rem] p-[1.5rem_1.8rem] relative">
                    <div className="flex flex-col gap-[0.9rem]">
                        <p className="w-[22.88rem] font-bold text-[1.5rem]">Автомойка грузовых и легковых авто</p>
                        <p className="w-[13.88rem] opacity-80">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc odio in et, lectus sit lorem id integer.</p>
                    </div>
                    <div className='absolute bottom-0 right-0'>
                        <img src={Card2} alt="card2" />
                    </div>
                </article>
                <article className="bg-[#F5F5F5] rounded-[1.25rem] p-[1.5rem_1.8rem]">
                    <div className="flex flex-col gap-[0.9rem]">
                        <p className="w-[15.56rem] font-bold text-[1.5rem]">Магазин аксессуаров</p>
                        <p className="w-[13.88rem] opacity-80">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc odio in et, lectus sit lorem id integer.</p>
                    </div>
                    <div>
                        {/* <img src={Card3} alt="card3" /> */}
                    </div>
                </article>
                <article className="bg-[#F5F5F5] rounded-[1.25rem] p-[1.5rem_1.8rem] relative">
                    <div className="flex flex-col gap-[0.9rem]">
                        <p className="w-[20.88rem] font-bold text-[1.5rem]">Пункт замены масла легковых авто</p>
                        <p className="w-[13.88rem] opacity-80">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc odio in et, lectus sit lorem id integer.</p>
                    </div>
                    <div className='absolute bottom-[1rem] right-0'>
                        <img src={Card4} alt="card4" />
                    </div>
                </article>
            </div>
        </section>
    )
}

export default Cards