import { BsFacebook } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { BsTelegram } from "react-icons/bs";
import { GoLocation } from "react-icons/go";
import { BsTelephoneInbound } from "react-icons/bs";
import { BiBasket } from "react-icons/bi";
import { FaHeart } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";
import { Select } from "antd";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useState } from "react";
import { setCurrency } from "../../redux/slices/currency-slice";
import { useDispatch } from "react-redux";
import MakeupLogo from "../../images/logo_1.png";

const Parfume = () => {
    const [search, setSearch] = useState("");
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const cartItems = useSelector((state: any) => state.cart.items);

    const likedProducts = useSelector(
        (state: any) => state.liked.likedProducts
    );

    const handleChange = (value: string) => {
        localStorage.setItem("currency", value);
        dispatch(setCurrency(value));
    };

    const handleSearch = () => {
        navigate(`/search?query=${search}`);
    };
    return (
        <>
            <div className="max-w-[1400px] m-auto h-[100px] flex justify-between items-center ">
                <div className="flex gap-8">
                    <div className="flex gap-2">
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
                        <GoLocation style={{
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
                            Yunusobod, Ahmad Donish ko'chasi, 4/80
                        </span>
                    </div>

                </div>
                <div >
                    <div className="flex gap-3 items-center">
                        <a href="https://t.me/toshkentparfumhelp">
                            <BsTelegram
                                style={{

                                    color: "gray",
                                    fontSize: "23px",
                                    marginLeft: "5px",
                                    marginRight: "5px",
                                }} />
                        </a>
                        <a href="https://www.instagram.com/toshkent_parfum_/">
                            <BsInstagram
                                style={{
                                    color: "gray",
                                    fontSize: "23px",
                                    marginLeft: "5px",
                                    marginRight: "5px",
                                }} />
                        </a>
                        <a href="https://www.facebook.com/tashkentparfume/">
                            <BsFacebook
                                style={{
                                    color: "gray",
                                    fontSize: "23px",
                                    marginLeft: "5px",
                                    marginRight: "5px",
                                }} />
                        </a>
                        <Select
                            className="shadow-sm rounded-[7px]"
                            defaultValue={localStorage.getItem("currency") || "USD"}
                            style={{ width: 70 }}
                            onChange={handleChange}
                            options={[
                                { value: "USD", label: "USD" },
                                { value: "UZS", label: "UZS" },
                            ]}
                        />
                    </div>
                </div>
            </div>
            <div className="max-w-[1400px] mx-auto h-[100px] flex items-center justify-between mb-10">
                <div>
                    <img
                        onClick={() => navigate("/")}
                        className="ring-red-400 max-w-[200px] mx-auto mt-2"
                        src={MakeupLogo}
                        alt="Makeup Setup"
                    />
                </div>
                <div className="flex items-center w-[600px] h-[40px] px-2 rounded-xl bg-gray-200 border-[1px] shadow-md">
                    <CiSearch
                        style={{
                            fontSize: "23px",
                            marginLeft: "5px",
                            marginRight: "5px",
                        }}
                    />
                    <input
                        className="w-[600px] h-[38px] px-2  outline-none bg-gray-200 "
                        type="text"
                        placeholder="Search products"
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        onKeyDown={(e) => {
                            if (e.key === "Enter") {
                                handleSearch();
                            }
                        }}
                    />
                </div>
                <div className="flex items-center gap-3">

                    <div
                        onClick={() => navigate("/liked")}
                        className="relative cursor-pointer  p-[10px] flex items-center justify-center"
                    >
                        <FaHeart style={{ fontSize: "25px" }} />
                        <span className="absolute top-0 right-0 bg-red-500 text-white rounded-full w-[15px] h-[15px] text-xs flex items-center justify-center">
                            {likedProducts.length}
                        </span>
                    </div>
                    <div
                        onClick={() => navigate("/cart")}
                        className="relative cursor-pointer    p-[10px] flex items-center justify-center"
                    >
                        <BiBasket style={{ fontSize: "25px" }} />
                        <span className="absolute top-0 right-0 bg-red-500 text-white  w-[15px] h-[15px] text-xs flex items-center justify-center">
                            {cartItems.length}
                        </span>
                    </div>


                </div>
            </div>
        </>
    );
};


export default Parfume;
