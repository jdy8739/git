import slide from '../../../public/images/slide.jpg'

const Slides = () => {
    return (
        <section className="h-[49.88rem] px-[10.31rem] py-[3.50rem] flex flex-col gap-[1rem]">
            <div>
                <h2 className="font-bold text-[3rem] text-center">Фоточки</h2>
            </div>
            <div className='flex flex-col gap-[1.44rem]'>
                <div>
                    <img src={slide} alt="slide" width={'100%'}  />
                </div>
                <div className='flex justify-center'>
                    <ul className='flex gap-[0.5rem] [&>li:first-child]:mr-[0.5rem] [&>li]:cursor-pointer'>
                        <li className='w-[1.31rem] h-[0.50rem] rounded-full bg-[#4762FF] opacity-74'></li>
                        <li className='size-[0.5rem] rounded-full bg-[#4762FF] opacity-74'></li>
                        <li className='size-[0.5rem] rounded-full bg-[#4762FF] opacity-74'></li>
                        <li className='size-[0.5rem] rounded-full bg-[#4762FF] opacity-74'></li>
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default Slides