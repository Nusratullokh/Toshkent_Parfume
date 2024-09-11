import { BsFacebook } from "react-icons/bs";
import { FaInstagramSquare } from "react-icons/fa";
import { BsTelegram } from "react-icons/bs";
import { FiMail } from "react-icons/fi";
import React from "react";
import MakeupLogo from "../../images/logo.svg";
import appStore from "../../images/apple.webp";
import googlePlay from "../../images/google-play-6647242_1280.webp";

import { BsTelephoneInbound } from "react-icons/bs";


const Footer: React.FC = () => {
    return (
        <footer className="bg-white text-black py-10 mt-[200px] m-auto">

            <div className="max-w-[1400px]  m-auto flex justify-between items-center bg-gray-200 px-4">


                <div className=" max-w-[1400px]   flex items-center gap-10 bg-gray-200">

                    <div className="flex  items-center gap-10">
                        <img
                            className=" mx-auto mt-2"
                            src={MakeupLogo}
                            alt="Makeup Setup"
                        />
                        <BsTelephoneInbound style={{
                            color: "gray",
                            fontSize: "18px",
                            marginLeft: "5px",
                            marginRight: "5px",
                        }} />
                        <span
                            style={{
                                fontSize: "14px",
                                color: "gray",
                            }}>
                            998 (95) 145 55 66
                        </span>
                    </div>
                    <div className="flex gap-2">
                        <FiMail style={{
                            color: "gray",
                            fontSize: "18px",
                            marginLeft: "5px",
                            marginRight: "5px",
                        }} />
                        <span
                            style={{
                                fontSize: "14px",
                                color: "gray",
                            }}>
                            tashkentparfume@gmail.com
                        </span>
                    </div>

                </div>
                <div className="flex items-center">
                    <a href="https://apps.apple.com/uz/app/toshkent-parfum/id6458222909"><img className="w-[180px] h-20" src={appStore} alt="" /></a>
                    <a href="https://play.google.com/store/apps/details?id=uz.tashkentparfum.tashkentparfumapp&pli=1"><img className="w-[180px] h-20" src={googlePlay} alt="" /></a>

                </div>
            </div>
            <div className="max-w-[1400px] mx-auto px-4 flex flex-col md:flex-row justify-between items-center py-[50px] bg-gray-100">
                <div className="mb-6 md:mb-0 text-center md:text-left">
                    <h1 className="text-2xl font-semibold mb-2">Our address</h1>
                    <p className="text-sm">Yunusobod, Ahmad Donish ko'chasi, 4/80</p>
                    <p className="text-sm">tashkentparfume@gmail.com</p>
                    <p className="text-sm">+998 (95) 145 55 66</p>
                </div>
                <div className="mb-6 md:mb-0">
                    <h2 className="text-lg font-semibold mb-4">Mijozlar uchun</h2>
                    <ul className="flex flex-col space-y-2">
                        <li>
                            <a href="https://toshkent-parfum.uz/sr" className="hover:text-gray-400">
                                Magazin haqida
                            </a>
                        </li>
                        <li>
                            <a href="https://toshkent-parfum.uz/sr" className="hover:text-gray-400">
                                Yangiliklar
                            </a>
                        </li>
                        <li>
                            <a href="#" className="hover:text-gray-400">

                                Tavsiyalar
                            </a>
                        </li>
                        <li>
                            <a href="+998935378886" className="hover:text-gray-400">
                                Savol javob
                            </a>
                        </li>
                        <li>
                            <a href="+998935378886" className="hover:text-gray-400">
                                Ommaviy oferta
                            </a>
                        </li>

                    </ul>
                </div>
                <div className="mb-6 md:mb-0">
                    <h2 className="text-lg font-semibold mb-4">Quick Links</h2>
                    <ul className="flex flex-col space-y-2">
                        <li>
                            <a href="/" className="hover:text-gray-400">
                                Bo'limlar
                            </a>
                        </li>
                        <li>
                            <a href="https://toshkent-parfum.uz/sr" className="hover:text-gray-400">
                                Parfyumeriya
                            </a>
                        </li>
                        <li>
                            <a href="#" className="hover:text-gray-400">
                                Tana va vanna
                            </a>
                        </li>
                        <li>
                            <a href="+998935378886" className="hover:text-gray-400">
                                Sochlar
                            </a>
                        </li>
                        <li>
                            <a href="+998935378886" className="hover:text-gray-400">
                                Yuz
                            </a>
                        </li>
                    </ul>
                </div>
                <div>
                    <h2 className="text-lg font-semibold mb-4  text-center">Bizning ijtimoiy tarmoqlar</h2>
                    <div className="flex gap-5 justify-center">
                        <a href="https://t.me/toshkentparfumhelp">
                            <BsTelegram className="text-3xl" />
                        </a>
                        <a href="https://www.instagram.com/toshkent_parfum_/">
                            <FaInstagramSquare className="text-3xl" />
                        </a>
                        <a href="https://www.facebook.com/tashkentparfume/">
                            <BsFacebook className="text-3xl" />
                        </a>

                    </div>
                </div>
            </div>
            <div className="bg-white text-gray-400 py-4 mt-10">
                <div className="max-w-[1400px] mx-auto px-4 text-center">
                    <p className="text-sm">
                        &copy; {new Date().getFullYear()} Toshkent Parfum  Barcha huquqlar himoyalangan.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
