import React from 'react';
import backImg from '../img/noroot.png'
import logoMini from '../img/logomini.png'
import '../style/housesite.css'
import Footer from "../components/footer";
import {HOUSE_SITE, SHOP_ROUTE} from "../const/consts";
const HouseSite = () => {
    return (
        <div className={'root'}>
            <div className="main__image">
                <img className="main__image-img" src={backImg} alt=""/>
            </div>
            <section className="about">
                <div className="wrapper">
                    <div className="super__about">
                        <div className="about__title">
                            <h2 className="title-h2">О салоне</h2>
                        </div>
                        <div className="about__logo">
                            <img src={logoMini} alt=""/>
                        </div>
                        <div className="about__text">
                            <p className="about__text-p">В переводе с тайского языка "Сабай" - это высшая степень наслаждения (неважно чем: запахом, вкусом, красотой мелодии или жизнью).
                                Почувствуйте заботу о Вашем теле, насладитесь ароматом масел и отдохните от повседневных забот в тайском СПА-салоне "Сабай Тай". Натуральные масла и травяные составы, уютная атмосфера экзотического Востока в сочетании с мастерством дипломированных массажистов из Тайланда, надолго прогонят усталость и депрессию, подарят Вашей коже нежную заботу, а мышцам — гибкость.).
                            </p>
                            <p className="about__text-p">
                                Традиционный тайский массаж, уход за лицом и телом, уход для рук и ног, программы для детей, коррекция фигуры - далеко не полный список услуг, которые мы предоставляем.
                                Полноценный отдых, ощущение энергии, гибкости и легкости тела, позитивные эмоции и впечатления от процедур, — все это не оставит Вас равнодушным. Вы обязательно придете к нам вновь.
                                Побалуйте свое тело и душу, зарядитесь бодростью и позитивом — подарите себе визит в СПА-салон тайского массажа "Сабай Тай"!.
                            </p>
                        </div>
                        <a className="link" href={SHOP_ROUTE}>Перейти к выбору услуг</a>
                    </div>
                </div>
            </section>
            <section className="promotion">
                <div className="wrapper">
                    <Footer/>
                </div>
            </section>
        </div>

    );
};

export default HouseSite;