import formBg from '../../../public/images/footer-banner.jpg';
import Button from '../atoms/Button';
import Input from '../atoms/Input';

const Form = () => {
    return (
        <section className="h-[42.94rem] relative">
            <div>
                <img src={formBg} alt="formBg" width={'100%'} />
            </div>
            <div className='absolute top-[4.38rem] right-[10.31rem]'>
                <form className='
                    bg-white
                    w-[38.19rem]
                    h-[34.25rem]
                    px-[4.44rem]
                    py-[2.44rem]
                    rounded-2xl
                    flex
                    flex-col
                    justify-between'>
                    <div className='flex flex-col text-[#333333] gap-[1rem]'>
                        <h2 className='font-bold text-[3.50rem] leading-[1.2]'>Остались вопросы?</h2>
                        <p className='text-[1.2rem] opacity-80'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc odio in et, lectus sit lorem id integer.</p>
                    </div>
                    <div className='flex flex-col'>
                        <Input type="text" placeholder='Имя' className='mb-[1.44rem]' />
                        <Input type="text" placeholder='Номер Телефон' className='mb-[2.31rem]' />
                        <Button className='h-[4.13rem]'>Отправить</Button>
                    </div>
                </form>
            </div>
        </section>
    )
}

export default Form