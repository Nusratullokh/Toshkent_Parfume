import { CgCloseO } from "react-icons/cg";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { removeFromCart } from "../../redux/slices/cart-slice";
import { Product } from "../../types/dataTypes";
const Cart: React.FC = () => {
    const [cartProducts, setCartProducts] = React.useState<Product[]>([]);

    useEffect(() => {
        const addedProducts = localStorage.getItem("cartProducts");
        if (addedProducts) {
            setCartProducts(JSON.parse(addedProducts));
        }
    }, [cartProducts]);

    const dispatch = useDispatch();

    const handleRemoveFromCart = (id: number) => {
        dispatch(removeFromCart(id));
        const updatedCartProducts = cartProducts.filter(
            (item: Product) => item.id !== id
        );
        localStorage.setItem(
            "cartProducts",
            JSON.stringify(updatedCartProducts)
        );
    };

    const totalPrice = cartProducts.reduce(
        (total: number, item: Product) => total + parseFloat(item.price),
        0
    );

    return (
        <div className="container mx-auto py-10 px-4"
            data-aos="fade-down"
            data-aos-easing="linear"
            data-aos-duration="1500">
            {cartProducts.length > 0 && (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ">
                    {cartProducts?.map((item: Product) => (
                        <div
                            key={item.id}
                            className="bg-white shadow-lg rounded-lg p-5 relative flex flex-col items-center h-auto max-w-[300px]"
                        >
                            <button
                                className="absolute top-2 right-2 text-red-500 mb-4 "
                                onClick={() => handleRemoveFromCart(item.id)}

                            >
                                <CgCloseO size={20} />
                            </button>
                            <img
                                src={item.api_featured_image}
                                alt=""
                                className="w-full h-[300px] object-cover mb-4 mt-4 shadow-md"
                            />
                            <h2 className="text-xl font-serif font-bold mb-2 text-center ">
                                {item.name}
                            </h2>
                            <p className="text-gray-500 mb-2  ">{item.brand}</p>
                            <p className="product-rating text-orange-500">★★★★★ {item.rating} <b className="text-black">5</b></p>

                            <p className="text-lg font-bold mb-4 ">
                                {item.price}   {item.price_sign}
                            </p>
                        </div>
                    ))}
                </div>
            )}
            {cartProducts.length > 0 && (
                <div className="mt-10 flex flex-col items-end">
                    <p className="text-xl font-mono ">
                        Total: {totalPrice.toFixed(2)}{" "}
                        {cartProducts[0]?.price_sign}
                    </p>
                </div>
            )}
        </div>
    );
};

export default Cart;
