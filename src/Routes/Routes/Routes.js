import Login from "../../Login/Login";
import Register from "../../Login/Register";
import MyCarts from "../../Pages/MyCart/MyCarts";
import BagsDetails from "../../Pages/Home/BagsCategories/BagsDetails";
import CoffeeDetails from "../../Pages/Home/Coffee-Category/CoffeeDetails";
import DashboardLayout from "../../Layout/DashboardLayout";
import Users from "../../Pages/Dashboard/Users/Users";
import AddProducts from "../../Pages/Dashboard/AddProduct/AddProducts";
import AllProducts from "../../Pages/Dashboard/AllProduct/AllProducts";
import FullProducts from "../../Pages/Dashboard/FullProduct/FullProducts";
import Details from "../../Pages/Dashboard/FullProduct/Details";
import CoffeeBrand from "../../Pages/Dashboard/AddProduct/CoffeeBrand/CoffeeBrand";
import CoffeeName from "../../Pages/Dashboard/AddProduct/CoffeeName/CoffeeName";
import CoffeePacket from "../../Pages/Dashboard/AddProduct/CoffeePacket/CoffeePacket";
import Menu from "../../Pages/Menu/Menu";
import SingleCoffeeBrand from "../../Pages/Menu/SingleCoffeeBrand";
import SingleCoffeePacket from "../../Pages/Menu/SingleCoffeePacket";
import SingleCoffeeName from "../../Pages/Menu/SingleCoffeeName";
import PrivateRoutes from "../PrivateRoutes/PrivateRoutes";
import AdminRoute from "../AdminRoute/AdminRoute";
import Contact from "../../Pages/Contact/Contact";

const { createBrowserRouter } = require("react-router-dom");
const { default: Main } = require("../../Layout/Main");
const { default: Home } = require("../../Pages/Home/Home/Home");

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/coffeeDetails/:id',
                element: <PrivateRoutes><CoffeeDetails></CoffeeDetails></PrivateRoutes>,
                loader: ({ params }) => fetch(`https://coffee-shop-server.vercel.app/coffeeDetails/${params.id}`)
            },
            {
                path: '/bagDetails/:id',
                element: <PrivateRoutes><BagsDetails></BagsDetails></PrivateRoutes>,
                loader: ({ params }) => fetch(`https://coffee-shop-server.vercel.app/bagDetails/${params.id}`)
            },
            {
                path: '/myCart',
                element: <PrivateRoutes><MyCarts></MyCarts></PrivateRoutes>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/contact',
                element: <Contact></Contact>
            },
            {
                path: '/menu',
                element: <PrivateRoutes><AdminRoute><Menu></Menu></AdminRoute></PrivateRoutes>,
                children: [
                    {
                        path: '/menu',
                        element: <SingleCoffeeBrand></SingleCoffeeBrand>
                    },
                    {
                        path: '/menu/packet',
                        element: <SingleCoffeePacket></SingleCoffeePacket>
                    },
                    {
                        path: '/menu/coffee',
                        element: <SingleCoffeeName></SingleCoffeeName>
                    }
                ]
            }
        ]
    },
    {
        path: '/dashboard',
        element: <PrivateRoutes><AdminRoute><DashboardLayout></DashboardLayout></AdminRoute></PrivateRoutes>,
        children: [
            {
                path: '/dashboard',
                element: <AllProducts></AllProducts>
            },
            {
                path: '/dashboard/fullItem',
                element: <FullProducts></FullProducts>
            },
            {
                path: '/dashboard/:id',
                element: <Details></Details>,
                loader: ({ params }) => fetch(`https://coffee-shop-server.vercel.app/fullProduct/${params.id}`)
            },
            {
                path: '/dashboard/allUsers',
                element: <Users></Users>
            },
            {
                path: '/dashboard/addProduct',
                element: <AddProducts></AddProducts>,
                children: [
                    {
                        path: '/dashboard/addProduct',
                        element: <CoffeeBrand></CoffeeBrand>
                    },
                    {
                        path: '/dashboard/addProduct/coffeeName',
                        element: <CoffeeName></CoffeeName>
                    },
                    {
                        path: '/dashboard/addProduct/coffeePacket',
                        element: <CoffeePacket></CoffeePacket>
                    }
                ]
            }
        ]
    },
    {
        path: "/*",
        element: <div className="flex mx-auto w-10/12">
            <div className="text-orange-500 lg:ml-96 lg:mt-80">
                <h1 className="lg:text-5xl font-bold mb-3">Sorryyyyyyy</h1>
                <h3 className="lg:text-5xl font-bold">We Have Nothing This URL</h3>
            </div>
        </div>
    }
])

export default router;