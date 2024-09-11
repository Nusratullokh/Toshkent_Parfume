import { useRoutes } from "react-router-dom";
import Home from "./home/Home";
import Dynamic from "./singlePage/SinglePage";
import Liked from "./like/Like";
import Cart from "./cart/Cart";

const RouteController = () => {
    return useRoutes([
        {
            path: "*",
            element: <Home />,
        },
        {
            path: "products/:id",
            element: <Dynamic />,
        },
        {
            path: "liked",
            element: <Liked />,
        },
        {
            path: "cart",
            element: <Cart />,
        },
    ]);
};

export default RouteController;
