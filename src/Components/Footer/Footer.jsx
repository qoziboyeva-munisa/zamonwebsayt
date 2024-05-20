

import { useTranslation } from "react-i18next"
import "./Footer.css"

function Footer(){
 const {t, i18n} = useTranslation();
    return(
        <>
        
        <div className="footer">
            <div className="container footer__container">
                <div className="footer__box">
                    <div className="footer__boxtext">
                    <h1 className="footer__title">{t("footer.are")}</h1>
                    <p className="footer__text">{t("footer.make")}</p>
                    </div>
                    <button className="footer__btn">{t("footer.book")}</button>
                </div>
                    <div className="footer__inside">
                    <a href="#" className="footer__link">{t("footer.cop")}</a>
                    </div>
               
            </div>
        </div>
        </>
    )
}
export default Footer