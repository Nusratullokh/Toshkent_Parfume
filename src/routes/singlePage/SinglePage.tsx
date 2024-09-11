import { BsFillCartPlusFill } from "react-icons/bs";
import React, { useState, useEffect } from "react";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { toggleLike as toggleLike2 } from "../../redux/slices/liked-slice";
import { addToCart } from "../../redux/slices/cart-slice";
import "aos/dist/aos.css";

const SinglePage: React.FC = () => {
    const product = JSON.parse(localStorage.getItem("product") || "{}");
    const [likedProducts, setLikedProducts] = useState<any[]>([]);
    const [cartProducts, setCartProducts] = useState<any[]>([]);
    const dispatch = useDispatch();

    useEffect(() => {
        const savedLikedProducts = localStorage.getItem("likedProducts");
        if (savedLikedProducts) {
            setLikedProducts(JSON.parse(savedLikedProducts));
        }
        const savedCartProducts = localStorage.getItem("cartProducts");
        if (savedCartProducts) {
            setCartProducts(JSON.parse(savedCartProducts));
        }
    }, []);


    const isLiked = (product: any) =>
        likedProducts.some((likedProduct) => likedProduct.id === product.id);

    const toggleLike = (product: any) => {
        dispatch(toggleLike2(product));
        let updatedLikedProducts;
        if (isLiked(product)) {
            updatedLikedProducts = likedProducts.filter(
                (likedProduct) => likedProduct.id !== product.id
            );
        } else {
            updatedLikedProducts = [...likedProducts, product];
        }
        setLikedProducts(updatedLikedProducts);
        localStorage.setItem(
            "likedProducts",
            JSON.stringify(updatedLikedProducts)
        );
    };

    const isAddedToCart = (product: any) =>
        cartProducts.some((cartProduct) => cartProduct.id === product.id);

    const handleAddToCart = (product: any) => {
        dispatch(addToCart(product));
        const updatedCartProducts = [...cartProducts, product];
        setCartProducts(updatedCartProducts);
        localStorage.setItem(
            "cartProducts",
            JSON.stringify(updatedCartProducts)
        );
    };
    const cleanAndShortenDescription = (description: string, maxLength: number) => {
        if (!description) return "";

        const cleanedDescription = description.replace(/<\/?[^>]+(>|$)/g, "");

        return cleanedDescription.length > maxLength
            ? cleanedDescription.substring(0, maxLength) + "..."
            : cleanedDescription;
    };

    return (
        <div className="flex  max-w-6xl mx-auto p-5 gap-10">
            <div className="w-1/2" data-aos="fade-up-right">
                <img
                    src={product.api_featured_image}
                    alt=""
                    className="w-96 rounded-lg"
                />
            </div>
            <div
                className="w-1/2 flex flex-col justify-center"
                data-aos="fade-left"
            >
                <p className=" text-orange-400 text-xl flex mb-6 justify-end">★★★<b className="text-gray-300">★★</b> {product.rating} <b className="text-black ml-2">3</b></p>
                <h1 className="text-4xl mb-5 font-serif font-bold">{product.name}</h1>
                <p className="text-xl mb-3"><b className="font-bold">Brand:</b> {product.brand}</p>

                {/* <p className="text-lg leading-relaxed">{product.description}</p> */}
                <p>{cleanAndShortenDescription(product.description, 100)}</p> {/* Description cleaned and shortened */}

                <p className="text-xl mb-3">
                    {product.price} {product.price_sign}
                </p>

                <div className="flex gap-4 mt-5">
                    <button
                        className={`px-4 py-2 text-white rounded-lg transition-transform transform active:scale-95 ${isAddedToCart(product)
                                ? "bg-gray-400 "
                                : "bg-red-500"
                            }`}
                        onClick={() => {
                            if (!isAddedToCart(product)) {
                                handleAddToCart(product);
                            }
                        }}
                    >
                        {isAddedToCart(product)
                            ? <div className="flex items-center  "> <b className="text-center">Savatga qo'shilgan</b></div>
                            : <div className="flex gap-4 items-center "><BsFillCartPlusFill className="text-[25px]" /><b >Savatga qo'shish</b></div>}
                    </button>
                    <div className="flex w-[50px] h-[50px] items-center justify-center rounded-xl bg-gray-100">
                        <button className="text-red-500  ">
                            {isLiked(product) ? (
                                <AiFillHeart
                                    style={{ fontSize: "30px", cursor: "pointer" }}
                                    onClick={() => toggleLike(product)}
                                />
                            ) : (
                                <AiOutlineHeart
                                    style={{ fontSize: "30px", cursor: "pointer" }}
                                    onClick={() => toggleLike(product)}
                                />
                            )}
                        </button>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default SinglePage;
