import React, {useContext, useState} from 'react';
import Logo from "../img/logo.svg"
import '../style/Auth.css'
import {NavLink, useLocation, useNavigate} from "react-router-dom";
import {LOGIN_ROUTE, REGiSTRATION_ROUTE, SHOP_ROUTE} from "../const/consts";

import {login, registration} from "../http/userApi";
import {Button} from "react-bootstrap";
import {observer} from "mobx-react-lite";
import {Context} from "../index";

const Auth = observer(() => {
    const {user} = useContext(Context)
    const location = useLocation()
    const navigate = useNavigate()
    const isLogin = location.pathname === LOGIN_ROUTE
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const click = async () => {
        try {
            let data;
            if (isLogin){
                data = await login(email, password)
            } else {
                data = await registration(email, password)
                console.log(data)

            }
            user.setUser(user)
            user.setIsAuth(true)
            navigate(SHOP_ROUTE)
        } catch (e){
            alert(e.response.data.message)
        }

    }

    return (
        <div className="container__auth">
            <div className="img">
                <img className="post" src={Logo} alt=""/>
            </div>

            <div className="login-container">
                <form action="/login" method="POST">
                    <h2 className="welcom">{isLogin ?'Авторизоватьcя' : "Регистрация"}</h2>

                    <div className="input-div one">
                        <div className="i">
                            <i className="fas fa-user"></i>
                        </div>
                        <div>
                            <h5>Email</h5>
                            <input className="input" type="text"  value={email} onChange={e => setEmail(e.target.value)} name="login" id="login" />
                        </div>
                    </div>

                    <div className="input-div two">
                        <div className="i">
                            <i className="fas fa-lock"></i>
                        </div>
                        <div>
                            <h5>Password</h5>
                            <input className="input" type="password" value={password} onChange={e => setPassword(e.target.value)} name="password" id="password" />
                        </div>
                    </div>
                    <div className={'flex__div'}>
                        {isLogin ?
                            <div className={'registration'}>
                                Нет аккаунта? <NavLink to={REGiSTRATION_ROUTE} className={'gray'}>Зарегистрируйся!</NavLink>
                            </div>
                            :
                            <div className={'registration'}>
                                Есть аккаунт? <NavLink to={LOGIN_ROUTE}>Войдите!</NavLink>
                            </div>
                        }
                        <Button className="btn recCall-a" onClick={click} >{isLogin ? 'Войти' : "Регистрироваться"}</Button>
                    </div>

                </form>
            </div>

        </div>


    );
});

const inputs = document.querySelectorAll('.input');

function focusFunc(){
    let parent = this.parentNode.parentNode;
    parent.classList.add('focus')
}

function blurFunc(){
    let parent = this.parentNode.parentNode;
    if (this.value === ""){
        parent.classList.remove('focus')
    }

}

inputs.forEach(input =>{
    input.addEventListener('focus',focusFunc)
    input.addEventListener('blur',blurFunc)
})



export default Auth;