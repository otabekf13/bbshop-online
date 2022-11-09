import Image from "next/image";
import Link from 'next/link'

// images
import logo from '../public/assets/img/Logo.png'
import userImage from '../public/assets/img/svg/user.svg'
import wishIcon from '../public/assets/img/svg/wishlist.svg'
import cartIcon from '../public/assets/img/svg/cart.svg'


function Header() {

    return (
        <header className="flex flex-col w-full">

            <div className="container mx-auto flex justify-between items-center
                                xl:h-[50px] md:h-[50px] sm:h-[70px] xs:h-[70px]
                                xl:px-[32px] md:px-[82px] sm:px-[26px] xs:px-[16px]
                                ">
                <Image src={logo}
                       alt="logo"
                       className="
                           xl:w-[117px] xl:h-[34px]
                           md:w-[117px] md:h-[34px]
                           sm:w-[130px] sm:h-[38px]
                           xs:w-[130px] xs:h-[38px]"
                />


                <ul className="flex justify-end items-center
                                    sm:hidden xs:hidden
                                    xl:w-[800px] md:w-[500px]
                                    xl:flex-row md:flex-row sm:flex-col xs:flex-col
                                    xl:gap-x-[40px] md:gap-x-[18px]
                        ">
                    <li className="headerLink">
                        <Link href="/about">О нас</Link>
                    </li>
                    <li className="headerLink">
                        <Link href="/payment">Оплата и доставка</Link>
                    </li>
                    <li className="headerLink">
                        <Link href="/reviews">Отзывы</Link>
                    </li>
                    <li className="headerLink">
                        <Link href="/faq">FAQ</Link>
                    </li>
                    <li className="headerLink">
                        <Link href="/blog">Блог</Link>
                    </li>
                    <li className="headerLink">
                        <Link href="/contacts">Контакты</Link>
                    </li>
                </ul>

                <div className="hidden xl:flex md:flex sm:flex-col xs:flex-col justify-between items-center
                    xl:gap-x-[40px] md:gap-x-[18px]
                    ">
                    <ul className="flex items-center justify-end xl:gap-x-[40px] md:gap-x-[18px]
                                        xl:grow md:grow
                                        xl:flex-row md:flex-row sm:flex-col xs:flex-col
                                        ">
                        <li className="headerLink flex items-center gap-x-2">
                            <i className="icon-phone"/>
                            +998 999 535 888
                        </li>
                        <li className="headerLink flex items-center gap-x-2">
                            <i className="icon-mail"/>
                            bbshop@gmail.com
                        </li>
                    </ul>

                    <ul className="flex items-center justify-end gap-x-4
                                        xl:grow md:grow
                                        xl:flex-row md:flex-row sm:flex-col xs:flex-col
                                        ">
                        <li className="headerLink activeLink">RU</li>
                        <li className="headerLink notActiveLink">EN</li>
                    </ul>

                </div>
            </div>


            <div className="bg-gray-light">

                <div className="container mx-auto flex justify-between items-center
                                xl:h-[70px] md:h-[70px] sm:hidden xs:hidden
                                xl:px-[32px] md:px-[82px]
                                ">

                    <button className="flex items-center gap-x-3 w-1/5">
                        <i className="icon-burger"/>
                        <span className="uppercase font-semibold">каталог товаров</span>
                    </button>

                    <div className="w-3/5 flex items-center justify-between grow">
                        <div
                            className="w-full h-[42px] flex justify-between items-center border bg-[#fff] rounded-full border-gray overflow-hidden mr-[34px]">
                            <i className="icon-search pl-4"/>
                            <input placeholder="Введите запрос для поиска"
                                   className="rounded-lg p-4 w-full text-gray text-[15px]"
                            />
                            <button className="w-[95px] text-[#fff] font-medium text-[15px] bg-blue h-full px-[25px]">
                                Найти
                            </button>
                        </div>

                        <div className="flex justify-end items-center gap-x-[30px] w-1/3">
                            <div className="flex items-center gap-x-2">
                                <Image src={userImage}
                                       alt="userImage"
                                       className="w-[34px] h-[34px] sm:hidden xs:hidden"
                                />
                                <div className="flex flex-col justify-between
                                                {/*hidden*/}
                                                ">
                                    <p className="text-gray text-[13px]">Войти</p>
                                    <p className="font-semibold text-[14px]">Регистрироваться</p>
                                </div>
                            </div>
                            <Image src={wishIcon}
                                   alt="wishIcon"
                                   className="h-[30px]"
                            />
                            <Image src={cartIcon}
                                   alt="cartIcon"
                                   className="h-[30px]"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;