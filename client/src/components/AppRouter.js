import React, {useContext} from 'react';
import {Routes, Route} from 'react-router-dom'
import {authRoutes, publicRoutes} from "../routes";
import Auth from "../pages/Auth";
import {ADMIN_ROUTE, BASKET_ROUTE, DEVICE_ROUTE, LOGIN_ROUTE, REGiSTRATION_ROUTE, SHOP_ROUTE} from "../const/consts";
import Shop from "../pages/Shop";
import {Context} from "../index";
const AppRouter = () => {
    const {user} = useContext(Context)
    console.log(user)
    return (
        <Routes>
            {authRoutes.map(({path, Component}) =>
                <Route path={path} element={<Component/>}/>
            )}
            { publicRoutes.map(({path, Component}) =>
                <Route  path={path} element={<Component/>} />
            )}

            />
        </Routes>
        //
        // <Routes>
        //
        //
        //         <Route  path={"login"} element={<Auth/>} />
        //
        // </Routes>

    );

};

export default AppRouter;