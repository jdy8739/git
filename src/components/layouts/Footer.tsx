import logo from '../../../public/images/footer-logo.png'

const Footer = () => {
    return (
        <footer className="h-[391px] bg-[#1A1A1A] text-white px-[9.13rem] py-[2.5rem_1.19rem] flex flex-col justify-between">
            <div className="flex justify-between gap-[0.81rem]">
                <div>
                    <img src={logo} alt="logo" />
                </div>
                <div className="flex flex-col gap-[1rem]">
                    <h4 className="text-[1.25rem] font-medium">Главная</h4>
                    <ul className="flex flex-col gap-[0.25rem]">
                        <li>Это мы</li>
                        <li>Кто мы</li>
                        <li>Почему мы?</li>
                        <li>Остались вопросы</li>
                        <li>Контакты</li>
                    </ul>
                </div>
                <div className="flex flex-col gap-[1rem]">
                    <h4 className="text-[1.25rem] font-medium">Контакты</h4>
                    <ul className="flex flex-col gap-[0.25rem]">
                        <li>+7 (708) 802 88 88</li>
                        <li>+7 (708) 802 88 88</li>
                        <li>+7 (708) 51 51 518</li>
                        <li className="mb-[0.5rem]">+7 (708) 51 51 518</li>
                        <li className="mb-[0.5rem]">+7 (708) 802 88 88</li>
                        <li>г. Бишкек, ул. Ляляля 69</li>
                    </ul>
                </div>
                <div className="flex flex-col gap-[1rem]">
                    <h4 className="text-[1.25rem] font-medium">Следите за нами</h4>
                    <ul className="flex flex-col gap-[0.5rem]">
                        <li>truck_service_ofFicIaL</li>
                        <li>truck_service_ofFicIaL</li>
                    </ul>
                </div>
            </div>
            <div className="pt-[1.25rem]">
                <p className="text-[#D9DBE1] text-[0.75rem] border-t-[#474747] border-t-[0.7px] pt-[1rem]">Copyright © Truck Services 2022. All rights reserved.</p>
            </div>
        </footer>
    )
}

export default Footer