import Admin from "./pages/Admin";
import {
    ADMIN_ROUTE,
    BASKET_ROUTE,
    DEVICE_ROUTE,
    HOUSE_SITE,
    LOGIN_ROUTE,
    REGiSTRATION_ROUTE,
    SHOP_ROUTE
} from "./const/consts";
import Auth from "./pages/Auth";
import Basket from "./pages/Basket";
import Shop from "./pages/Shop";
import DevicePage from "./pages/DevicePage";
import HouseSite from "./pages/HouseSite";

export const authRoutes = [
    {
        path: ADMIN_ROUTE,
        Component: Admin
    },
    {
        path: BASKET_ROUTE,
        Component: Basket
    },

]

export const publicRoutes = [
    {
        path: SHOP_ROUTE,
        Component: Shop
    },
    {
        path: LOGIN_ROUTE,
        Component: Auth
    },
    {
        path: REGiSTRATION_ROUTE,
        Component: Auth
    },
    {
        path: HOUSE_SITE,
        Component: HouseSite
    },
    {
        path: DEVICE_ROUTE + '/:id',
        Component: DevicePage
    },

]