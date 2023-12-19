import React, {useContext} from 'react';
import {Context} from "../index";
import Logo from "../img/logo.svg"
import '../style/NavBar.css'
import {ADMIN_ROUTE, HOUSE_SITE, LOGIN_ROUTE, SHOP_ROUTE} from "../const/consts";
import {observer} from "mobx-react-lite";
import {useNavigate} from "react-router-dom";

const NavBar = observer(() => {
    const {user} = useContext(Context)
    const  navigate = useNavigate()

    const logOut = () => {
        user.setUser({})
        user.setIsAuth(false)
    }
    return (
        <header className={'header mb-5'}>
            <div className={'container__header m'}>
                <a className={"lala"} href={HOUSE_SITE}><img className={'header__logo-img'} src={Logo} alt={'Сабай Тай'}/></a>
                <nav className={'nav'}>
                    <ul className={'nav__list'}>
                        <li className={'nav__item'}>
                            <a className={'nav__item-link'} href={'#'}>О нас</a>
                        </li>
                        <li className={'nav__item'}>
                            <a className={'nav__item-link'} href={'#'}>Услуги</a>
                        </li>
                        <li className={'nav__item'}>
                            <a className={'nav__item-link'} href={'#'}>Акции</a>
                        </li>
                        <li className={'nav__item'}>
                            <a className={'nav__item-link'} href={'#'}>Этикет</a>
                        </li>
                        <li className={'nav__item'}>
                            <a className={'nav__item-link'} href={'#'}>Контакты</a>
                        </li>
                    </ul>
                </nav>
                <div className={'header__adress'}>
                    <p>Екатеринбург, ул. Войкова, 2</p>
                    <p>89491249591</p>
                </div>
                {user.isAuth ?
                    <div className={'button__registration-button'}>

                        <button className={'button__authentication button__registration link'} onClick={() => logOut() }>Выйти</button>
                        <button className={'button__authentication button__registration link'} onClick={() => navigate(ADMIN_ROUTE) }>Админ</button>
                    </div>
                    :
                    <div className={'button__registration-button'}>
                        <button className={'button__authentication button__authorization link'} onClick={() => navigate(LOGIN_ROUTE)}>Авторизоваться</button>

                    </div>
                }
            </div>
        </header>
    );
});

export default NavBar;