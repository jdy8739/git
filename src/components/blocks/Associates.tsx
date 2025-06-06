import logo1 from '../../../public/images/logo1.jpg'
import logo2 from '../../../public/images/logo2.jpg'
import logo3 from '../../../public/images/logo3.jpg'
import logo4 from '../../../public/images/logo4.jpg'
import logo5 from '../../../public/images/logo5.jpg'

const Associates = () => {
    return (
        <section className="h-[34.63rem] px-[10.31rem] py-[4.19rem] flex gap-[4.44rem]">
            <article className="flex flex-col gap-[1rem] text-[#333333]">
                <h2 className="w-[33.75rem] font-bold text-[3rem] leading-[1.2]">У вас вопрос кто мы а кто мы блин</h2>
                <div className="w-[34rem] opacity-80 flex flex-col gap-[0.6rem] leading-[1.5] text-[1.13rem]">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc odio in et, lectus sit lorem id integer.</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc odio in et, lectus sit lorem id integer.</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc odio in et, lectus sit lorem id integer.</p>
                </div>
            </article>
            <div className='w-full relative'>
                <img src={logo1} alt="logo1" className='absolute top-0 right-0' />
                <img src={logo2} alt="logo2" className='absolute top-0 left-0' />
                <img src={logo3} alt="logo3" className='absolute top-[50%] right-[50%] translate-x-[50%] translate-y-[-50%]' />
                <img src={logo4} alt="logo4" className='absolute bottom-[4rem] left-0' />
                <img src={logo5} alt="logo5" className='absolute bottom-0 right-0' />
            </div>
        </section>
    )
}

export default Associates