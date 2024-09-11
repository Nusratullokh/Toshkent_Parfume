import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import Header from "./components/header/Header";
import RouteController from "./routes";
import Footer from "./components/footer/Footer";
import { fetchProducts } from "./redux/slices/products-slice";

function App() {
    const dispatch = useDispatch<any>();
    const status = useSelector((state: any) => state.products.status);

    useEffect(() => {
        if (status === "idle") {
            dispatch(fetchProducts());
        }
    }, [status, dispatch]);

   

    if (status === "failed") {
        return <div>Failed to load products.</div>;
    }

    return (
        <>
            <Header />
            <RouteController />
            <Footer />
        </>
    );
}

export default App;
