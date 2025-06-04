import Button from "../atoms/Button"
import logo from "../../../public/svgs/logo.svg"

const Header = () => {
    return (
        <header className="w-full h-[161px] flex flex-col px-[165px] shadow-[0_14px_14px_-4px_rgba(0,0,0,0.02)]">
            <div className="h-full flex justify-between items-center text-[0.9rem] opacity-70">
                <div className="flex gap-[1rem]">
                    <div>
                        <div>Наш адрес:</div>
                        <div className="font-medium">г. Бишкек, ул. Ляляля 69</div>
                    </div>
                    <div />
                    <div>
                        <div>График работы:</div>
                        <div className="font-medium">С 8:00 до 22:00 без выходных</div>
                    </div>
                </div>
                <div>
                    <div>+7 (708) 51 51 518</div>
                    <div>+7 (708) 51 51 518</div>
                </div>
            </div>
            <hr className="w-full h-[1px] bg-[#333333] opacity-10" />
            <div className="h-full flex justify-between items-center">
                <figure>
                    <img src={logo} alt="logo" />
                </figure>
                <ul className="flex gap-[46px]">
                    <li>Это мы</li>
                    <li>Почему мы?</li>
                    <li>А вот поэтому</li>
                    <li>Контакты</li>
                </ul>
                <Button>Заказать звонок</Button>
            </div>
        </header>
    )
}

export default Header