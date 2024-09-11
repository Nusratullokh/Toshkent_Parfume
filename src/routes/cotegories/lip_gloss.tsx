import { BsFillCartPlusFill } from "react-icons/bs";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import React from "react";
import { Product } from "../../types/dataTypes";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { toggleLike as toggleLike2 } from "../../redux/slices/liked-slice";
import { useState, useEffect } from "react";
import { addToCart } from "../../redux/slices/cart-slice";
import { setCurrency } from "../../redux/slices/currency-slice";
import "aos/dist/aos.css";

interface Lip_glossProps {
    products: Product[];
}

const Lip_gloss: React.FC<Lip_glossProps> = ({ products }) => {
    const [likedProducts, setLikedProducts] = useState<Product[]>([]);
    const [cartProducts, setCartProducts] = useState<Product[]>([]);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const currency = useSelector((state: any) => state.currency.currency);

    useEffect(() => {
        const savedLikedProducts = localStorage.getItem("likedProducts");
        if (savedLikedProducts) {
            setLikedProducts(JSON.parse(savedLikedProducts));
        }
        const savedCurrency = localStorage.getItem("currency");
        if (savedCurrency) {
            dispatch(setCurrency(savedCurrency));
        }
    }, [dispatch]);

    const moveToSingle = (product: Product) => {
        localStorage.setItem("product", JSON.stringify(product));
        navigate(`/single/${product.id}`);
        window.scrollTo(0, 0);
    };

    const isLiked = (product: Product) =>
        likedProducts.some((likedProduct) => likedProduct.id === product.id);

    const toggleLike = (product: Product) => {
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

    const isAddedToCart = (product: Product) =>
        cartProducts.some((cartProduct) => cartProduct.id === product.id);

    const handleAddToCart = (product: Product) => {
        dispatch(addToCart(product));
        const updatedCartProducts = [...cartProducts, product];
        setCartProducts(updatedCartProducts);
        localStorage.setItem(
            "cartProducts",
            JSON.stringify(updatedCartProducts)
        );
    };

    const convertPrice = (price: number, currency: string) => {
        if (currency === "UZS") {
            return (price * 12646).toFixed(2);
        }
        return price.toFixed(2);
    };

    return (
        <div className="flex flex-wrap gap-10 mt-[50px]">
            {products?.map((product) => (
                <div className="relative group" key={product.id}>
                    <div
                        className="w-[300px] min-h-[500px] bg-white rounded-[10px] mb-[20px] flex flex-col items-center shadow-md p-[20px]"
                        data-aos="fade-up"
                        data-aos-anchor-placement="top-bottom"
                    >
                        <div className="flex items-center justify-center w-[250px] h-[270px]">
                            <img
                                src={product.api_featured_image}
                                alt=""
                                className="w-60 h-[240px] object-cover mt-5  "
                            />
                        </div>
                        <div className="w-full h-[120px] flex flex-col gap-1">
                            <h3>{product.name}</h3>
                            <p>{product.brand}</p>
                            <p>
                                {convertPrice(
                                    parseFloat(product.price),
                                    currency
                                )}{" "}
                                {currency}
                            </p>
                            <p className="product-rating text-orange-500">★★★★★ {product.rating} <b className="text-black">5</b></p>
                        </div>
                    </div>
                    <div
                        onClick={(e) => {
                            if (
                                e.target instanceof HTMLElement &&
                                !e.target.closest("button")
                            ) {
                                moveToSingle(product);
                            }
                        }}
                        className="absolute cursor-pointer h-[500px] rounded-lg inset-0 shadow-2xl flex justify-center items-end opacity-0 group-hover:opacity-100 transition-opacity"
                    >
                        <div className="flex ml-2 mr-2">
                            <button className="text-white flex items-center">
                                {isLiked(product) ? (
                                    <AiFillHeart
                                        style={{
                                            color: "red",
                                            fontSize: "30px",
                                            cursor: "pointer",
                                            position: "absolute",
                                            top: "20px",
                                            left: "250px",
                                        }}
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            toggleLike(product);
                                        }}
                                    />
                                ) : (
                                    <AiOutlineHeart
                                        style={{
                                            color: "red",
                                            fontSize: "30px",
                                            position: "absolute",
                                            top: "20px",
                                            left: "250px",
                                            cursor: "pointer",
                                        }}
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            toggleLike(product);
                                        }}
                                    />
                                )}
                            </button>
                            <button
                                className={`mb-3 flex   items-center w-[260px] h-10 text-white p-3 rounded-[10px] transition-transform transform active:scale-[.97] ${isAddedToCart(product)
                                        ? "bg-gray-500"
                                        : "bg-red-500"
                                    }`}
                                onClick={(e) => {
                                    e.stopPropagation();
                                    if (!isAddedToCart(product)) {
                                        handleAddToCart(product);
                                    }
                                }}
                            >
                                {isAddedToCart(product)
                                    ? <div className="flex items-center ml-12 "> <b className="text-center">Savatga qo'shilgan</b></div>
                                    : <div className="flex gap-6 items-center"><BsFillCartPlusFill className="text-[25px]" /><b >Savatga qo'shish</b></div>}
                            </button>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Lip_gloss;
