import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../../redux/slices/products-slice";
import { RootState } from "../../redux/store/index";
import { useRoutes, RouteObject, NavLink, useLocation } from "react-router-dom";
import Nmadur from "../home/routes/nmadur";
import Bb_cc from "../home/routes/bb_cc";
import Concealer from "../home/routes/concealer";
import Contour from "../home/routes/contour";
import Cream from "../home/routes/cream";
import Gel from "../home/routes/gel";
import Highlighter from "../home/routes/highlighter";
import Lip_gloss from "../home/routes/lip_gloss";
import Lip_stain from "../home/routes/lip_stain";
import Lipstick from "../home/routes/lipstick";
import Liquid from "../home/routes/liquid";
import Mineral from "../home/routes/mineral";
import Null from "../home/routes/null";
import Pelette from "../home/routes/palette";
import Pencil from "../home/routes/pencil";
import Powder from "../home/routes/powder";
import MakeupImg from "../../images/beauty.webp";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Home.css"

const Home: React.FC = () => {
    const dispatch = useDispatch<any>();
    const { categorizedProducts, status, error } = useSelector(
        (state: RootState) => state.products
    );

    const location = useLocation();

    useEffect(() => {
        if (status === "idle") {
            dispatch(fetchProducts());
        }
    }, [dispatch, status]);

    useEffect(() => {
        AOS.init({
            duration: 1200,
        });
    }, []);

    if (status === "loading") {
        return <div>Loading...</div>;
    }

    if (status === "failed") {
        return <div>Error: {error}</div>;
    }

    const routes: RouteObject[] = [
        {
            path: "/",
            element: <Nmadur products={categorizedProducts[""] || []} />,
        },
        {
            path: "/bb_cc",
            element: <Bb_cc products={categorizedProducts["bb_cc"] || []} />,
        },
        {
            path: "/concealer",
            element: (
                <Concealer products={categorizedProducts["concealer"] || []} />
            ),
        },
        {
            path: "/contour",
            element: (
                <Contour products={categorizedProducts["contour"] || []} />
            ),
        },
        {
            path: "/cream",
            element: <Cream products={categorizedProducts["cream"] || []} />,
        },
        {
            path: "/gel",
            element: <Gel products={categorizedProducts["gel"] || []} />,
        },
        {
            path: "/highlighter",
            element: (
                <Highlighter
                    products={categorizedProducts["highlighter"] || []}
                />
            ),
        },
        {
            path: "/lip_gloss",
            element: (
                <Lip_gloss products={categorizedProducts["lip_gloss"] || []} />
            ),
        },
        {
            path: "/lip_stain",
            element: (
                <Lip_stain products={categorizedProducts["lip_stain"] || []} />
            ),
        },
        {
            path: "/lipstick",
            element: (
                <Lipstick products={categorizedProducts["lipstick"] || []} />
            ),
        },
        {
            path: "/liquid",
            element: <Liquid products={categorizedProducts["liquid"] || []} />,
        },
        {
            path: "/mineral",
            element: 
                <Mineral products={categorizedProducts["mineral"] || []} />
            ,
        },
        {
            path: "/null",
            element: <Null products={categorizedProducts[""] || []} />,
        },
        {
            path: "/palette",
            element: (
                <Pelette products={categorizedProducts["palette"] || []} />
            ),
        },
        {
            path: "/pencil",
            element: <Pencil products={categorizedProducts["pencil"] || []} />,
        },
        {
            path: "/powder",
            element: <Powder products={categorizedProducts["powder"] || []} />,
        },
    ];

    const routing = useRoutes(routes);

    return (
        <div>
            <ul className="max-w-[1400px] mx-auto h-[80px] flex justify-between items-center font-sans font-medium text-lg mb-[50px] ">
                <li>
                    <NavLink 
                        to="/"
                        className={({ isActive }) =>
                            isActive ? "border-b-2 border-gray-500" : ""
                        }

                    >
                        Home
                    </NavLink>
                </li>
                <span className="tadd">|</span>

                <li>
                    <NavLink 
                        to="/bb_cc"
                        className={({ isActive }) =>
                            isActive ? "border-b-2 border-gray-500" : ""
                        }
                    >
                        Bb cc
                    </NavLink>
                </li>
                <span className="tadd">|</span>

                <li>
                    <NavLink 
                        to="/concealer"
                        className={({ isActive }) =>
                            isActive ? "border-b-2 border-gray-500" : ""
                        }
                    >
                        Concealer
                    </NavLink>
                </li>
                <span className="tadd">|</span>

                <li>
                    <NavLink
                        to="/contour"
                        className={({ isActive }) =>
                            isActive ? "border-b-2 border-gray-500" : ""
                        }
                    >
                        Contour
                    </NavLink>
                </li>
                <span className="tadd">|</span>

                <li>
                    <NavLink 
                        to="/cream"
                        className={({ isActive }) =>
                            isActive ? "border-b-2 border-gray-500" : ""
                        }
                    >
                        Cream
                    </NavLink>
                </li>
                <span className="tadd">|</span>

                <li>
                    <NavLink 
                        to="/gel"
                        className={({ isActive }) =>
                            isActive ? "border-b-2 border-gray-500" : ""
                        }
                    >
                        Gel
                    </NavLink>
                </li>
                <span className="tadd">|</span>

                <li>
                    <NavLink 
                        to="/highlighter"
                        className={({ isActive }) =>
                            isActive ? "border-b-2 border-gray-500" : ""
                        }
                    >
                        Highlighter
                    </NavLink>
                </li>
                <span className="tadd">|</span>

                <li>
                    <NavLink 
                        to="/lip_gloss"
                        className={({ isActive }) =>
                            isActive ? "border-b-2 border-gray-500" : ""
                        }
                    >
                        Lip gloss
                    </NavLink>
                </li>
                <span className="tadd">|</span>

                <li>
                    <NavLink 
                        to="/lip_stain"
                        className={({ isActive }) =>
                            isActive ? "border-b-2 border-gray-500" : ""
                        }
                    >
                        Lip stain
                    </NavLink>
                </li>
                <span className="tadd">|</span>

                <li>
                    <NavLink 
                        to="/lipstick"
                        className={({ isActive }) =>
                            isActive ? "border-b-2 border-gray-500" : ""
                        }
                    >
                        Lipstick
                    </NavLink>
                </li>
                <span className="tadd">|</span>

                <li>
                    <NavLink 
                        to="/liquid"
                        className={({ isActive }) =>
                            isActive ? "border-b-2 border-gray-500" : ""
                        }
                    >
                        Liquid
                    </NavLink>
                </li>
                <span className="tadd">|</span>

                <li>
                    <NavLink 
                        to="/mineral"
                        className={({ isActive }) =>
                            isActive ? "border-b-2 border-gray-500" : ""
                        }
                    >
                        Mineral
                    </NavLink>
                </li>
                <span className="tadd">|</span>

                <li>
                    <NavLink 
                        to="/null"
                        className={({ isActive }) =>
                            isActive ? "border-b-2 border-gray-500" : ""
                        }
                    >
                        Null
                    </NavLink>
                </li>
                <span className="tadd">|</span>

                <li>
                    <NavLink 
                        to="/palette"
                        className={({ isActive }) =>
                            isActive ? "border-b-2 border-gray-500" : ""
                        }
                    >
                        Palette
                    </NavLink>
                </li>
                <span className="tadd">|</span>

                <li>
                    <NavLink 
                        to="/pencil"
                        className={({ isActive }) =>
                            isActive ? "border-b-2 border-gray-500" : ""
                        }
                    >
                        Pencil
                    </NavLink>
                </li>
                <span className="tadd">|</span>
                <li>
                    <NavLink 
                        to="/powder"
                        className={({ isActive }) =>
                            isActive ? "border-b-2 border-gray-500" : ""
                        }
                    >
                        Powder
                    </NavLink>
                </li>
            </ul>

            {location.pathname === "/" && (
                <div data-aos="fade-up" data-aos-anchor-placement="top-bottom">
                    <img
                        className="max-w-[1400px] mx-auto"
                        src={MakeupImg}
                        alt="Makeup Setup"
                    />
                </div>
            )}

            <div className="max-w-[1400px] mx-auto">{routing}</div>
        </div>
    );
};

export default Home;
