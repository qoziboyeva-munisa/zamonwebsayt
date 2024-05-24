

import "./Make.css"
import metro from "../../assets/img/metro.avif"
import { useTranslation } from "react-i18next"

function Make() {
    const {t, i18n} = useTranslation();
     return(
        <>
            <div className="make" id="make">
            <img className="make__metro" src={metro} alt="" />
                <div className="container make__container">
                     <div className="make__wrapper">
                    <div className="make__box">
                        <p className="make__text">{t("make.book")}</p>
                        <h1 className="make__title__name">{t("make.your")}</h1>
                        <a href="#make" className="make__link__name">{t("make.discover")}</a>
                    </div>
                    <ul className="make__list">
                        <li className="make__item">
                          <button className="make__icon">
                          <i class="fa-solid fa-phone fa-2xl" style={{color:"#22b3c1"}} ></i>
                          </button>
                            <h1 className="make__title">{t("make.make")}</h1>
                            <a href="#" className="make__link">+998 99 299 99 96</a>
                        </li>
                        <li className="make__item">
                            <button className="make__icon">
                            <i class="fa-brands fa-instagram fa-2xl" style={{color:"#22b3c1" }}></i>
                            </button>
                       
                            <h1 className="make__title">Bizni instagram orqali kuzating</h1>
                            <a href="#" className="make__link">zamonbiznestour@mail.ru</a>
                        </li>
                        <li className="make__item">
                          <button className="make__icon">
                          <i class="fa-brands fa-telegram fa-2xl" style={{color:"#22b3c1"}}></i>
                          </button>
                            <h1 className="make__title">Bizning telegram sahifamiz</h1>
                            <a href="#" className="make__link">+998 99 299 99 96</a>
                        </li>
                    </ul>
                    </div>
                </div>
            </div>
        
        </>
     )
}
export default Make