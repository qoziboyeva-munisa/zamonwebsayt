
import poezd  from "../../assets/img/poezd.jpg"
import samolyot from "../../assets/img/samolyot.jpg"
import dubai2 from "../../assets/img/dubai2.jpg"
import antaliya from "../../assets/img/antaliya.jpg"
import sharm2 from "../../assets/img/sharm2.jpg"
import istanbul3 from "../../assets/img/istanbul3.jpg"
import "./Explore.css"
import { useTranslation } from "react-i18next"

function Explore(){
    const {t, i18n} = useTranslation()


    return(
        <>
        <div className="explore" id="explore">
            <div className="container explore__container">
               <hr />
               <h1 className="explore__title">{t("explore.explore")}</h1>
               <p className="explore__text">{t("explore.find")}</p>

          <div className="explore__boxone">
                 <img className="explore__img" src={poezd} alt="" />
                 <div className="explore__wrapper">
                    <div className="explore__boxtext">
                        <div className="explore__intinue">
                        <h2 className="explore__title__name">{t("explore.cheap")}</h2>
                        <p className="explore__text__name">{t("explore.world")}</p>
                        </div>
                    <a href="#make">
                    <button className="explore__btn">{t("explore.more")}</button>
                    </a>
                    </div>
                    <p className="explore__text">{t("explore.embark")} </p>
                 </div>
          </div>

          <hr />

          <div className="explore__boxone">
                 <img className="explore__img" src={samolyot} alt="" />
                 <div className="explore__wrapper">
                    <div className="explore__boxtext">
                        <div className="explore__intinue">
                        <h2 className="explore__title__name">{t("explore.discover")}</h2>
                        <p className="explore__text__name">{t("explore.global")}</p>
                        </div>
                        <a href="#make">
                    <button className="explore__btn">{t("explore.more")}</button>
                    </a>
                    </div>
                    <p className="explore__text">{t("explore.embark")}</p>
                 </div>
          </div>

          <hr />

          <h1 className="explore__title">{t("explore.visit")}</h1>
               <p className="explore__text">{t("explore.offers")}</p>
<div className="explore__boxtoo">
                 <img className="explore__img" src={dubai2} alt="" />
                 <div className="explore__wrapper">
                    <div className="explore__boxtext">
                        <div className="explore__intinue">
                        <h2 className="explore__title__name">{t("explore.dubai")}</h2>
                        <p className="explore__text__name">{t("explore.united")}</p>
                        </div>
                        <a href="#make">
                    <button className="explore__btn">{t("explore.more")}</button>
                    </a>
                    </div>
                    <p className="explore__text">
                    {t("explore.city")} </p>
                    <hr />
                    <div className="explore__ending">
                         <p className="explore__ending__text">{t("explore.people")}</p>
                         <p className="explore__ending__text">41.290 km2</p>
                         <p className="explore__ending__text">$1.100.200</p>
                    </div>
                    <a href="#make" className="explore__link">{t("explore.need")}</a>
                 </div>
          </div>
          <hr />
          <div className="explore__boxtoo">
                 <img className="explore__img" src={antaliya} alt="" />
                 <div className="explore__wrapper">
                    <div className="explore__boxtext">
                        <div className="explore__intinue">
                        <h2 className="explore__title__name">{t("explore.antaliya")}</h2>
                        <p className="explore__text__name">{t("explore.turkey")}</p>
                        </div>
                        <a href="#make">
                    <button className="explore__btn">{t("explore.more")}</button>
                    </a>
                    </div>
                    <p className="explore__text">
                    {t("explore.fastest")} </p>
                    <hr />
                    <div className="explore__ending">
                         <p className="explore__ending__text">{t("explore.people")}</p>
                         <p className="explore__ending__text">275.400 km2</p>
                         <p className="explore__ending__text">$946.000</p>
                    </div>
                    <a href="#make" className="explore__link">{t("explore.need")}</a>
                 </div>
          </div>

          <hr />
          <div className="explore__boxtoo">
                 <img className="explore__img" src={sharm2} alt="" />
                 <div className="explore__wrapper">
                    <div className="explore__boxtext">
                        <div className="explore__intinue">
                        <h2 className="explore__title__name">{t("explore.sheik")}</h2>
                        <p className="explore__text__name">{t("explore.egypt")}</p>
                        </div>
                        <a href="#make">
                    <button className="explore__btn">{t("explore.more")}</button>
                    </a>
                    </div>
                    <p className="explore__text">{t("explore.sharm")}</p>
                    <hr />
                    <div className="explore__ending">
                         <p className="explore__ending__text">{t("explore.people")}</p>
                         <p className="explore__ending__text">551.500 km2</p>
                         <p className="explore__ending__text">$425.600</p>
                    </div>
                    <a href="#make" className="explore__link">{t("explore.need")} </a>
                 </div>
          </div>
          <hr />
          <div className="explore__boxtoo">
                 <img className="explore__img" src={istanbul3} alt="" />
                 <div className="explore__wrapper">
                    <div className="explore__boxtext">
                        <div className="explore__intinue">
                        <h2 className="explore__title__name">{t("explore.istanbul")}</h2>
                        <p className="explore__text__name">{t("explore.turkey")}</p>
                        </div>
                        <a href="#make">
                    <button className="explore__btn">{t("explore.more")}</button>
                    </a>
                    </div>
                    <p className="explore__text">{t("explore.populous")}</p>
                    <hr />
                    <div className="explore__ending">
                         <p className="explore__ending__text">{t("explore.people")}</p>
                         <p className="explore__ending__text">551.500 km2</p>
                         <p className="explore__ending__text">$425.600</p>
                    </div>
                    <a href="#make
                    " className="explore__link">{t("explore.need")} </a>
                 </div>
          </div>
            </div>
        </div>
        
        </>
    )
}
export default Explore