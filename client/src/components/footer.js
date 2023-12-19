import React from 'react';

function Footer(props) {
    return (
        <div className="footer__superglav">
            <div className="footer__glav" style={{cursor: "pointer"}}>
                <ul className="footer__list">
                    <li className="footer__item">Екатеринбург, ул. Войкова, 2</li>
                    <li className="footer__item">89491249591</li>
                    <li className="footer__item">
                        Наш:
                        <span className="footer__object">WhatsApp</span>
                    </li>
                </ul>
            </div>
            <div className="footer__glav" >
                <ul className="footer__list" style={{cursor: "pointer"}}>
                    <li className="footer__item">О нас</li>
                    <li className="footer__item">Услуги</li>
                    <li className="footer__item">Акции</li>
                    <li className="footer__item">Этикет</li>
                    <li className="footer__item">Контакты</li>
                </ul>
            </div>
            <div className="footer__glav">
                <ul className="footer__list" style={{cursor: "pointer"}}>
                    <li className="footer__item">Оплата и доставка</li>
                    <li className="footer__item">Обмен и возврат</li>
                    <li className="footer__item">Ежемесячные скидки и акции</li>
                    <li className="footer__item">Электронный сертификат
                    </li>
                    <li className="footer__item">Показания и противопоказания</li>
                </ul>
            </div>
        </div>
    );
}

export default Footer;
