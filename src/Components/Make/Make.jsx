

import "./Make.css"
import tel from "../../assets/img/tel.png"
import { useTranslation } from "react-i18next"

function Make() {
    const {t, i18n} = useTranslation();
     return(
        <>
            <div className="make" id="make">
                <div className="container make__container">
                    <ul className="make__list">
                        <li className="make__item">
                            <img src={tel} alt="" className="make__img" />
                            <h1 className="make__title">{t("make.make")}</h1>
                            <a href="#" className="make__link">+998 99 299 99 96</a>
                        </li>
                        <li className="make__item">
                            <img src={tel} alt="" className="make__img" />
                            <h1 className="make__title">{t("make.make")}</h1>
                            <a href="#" className="make__link">+998 99 299 99 96</a>
                        </li>
                        <li className="make__item">
                            <img src={tel} alt="" className="make__img" />
                            <h1 className="make__title">{t("make.make")}</h1>
                            <a href="#" className="make__link">+998 99 299 99 96</a>
                        </li>
                    </ul>
                </div>
            </div>
        
        </>
     )
}
export default Make