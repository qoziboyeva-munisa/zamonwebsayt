

import { useTranslation } from "react-i18next"
import "./Ending.css"
import axios from "axios";
import { message } from "antd";
function Ending(){
    
const {t, i18n} = useTranslation();
const sendMessege = (event) =>{
    event.preventDefault();
    const token = "6760074363:AAG5oBjXnm9O2E0PGwDihFH5eArxYuyqxk0";
    const chat_id = 5376061460;
    const url = `https://api.telegram.org/bot${token}/sendMessage`;
    const name = document.getElementById("name").value;
    const number = document.getElementById("number").value;
    const guests = document.getElementById("guests").value;
    const textcontent = ` Ismi:${name} \n Nomeri:${number} \n guests:${guests}`;

    axios({
        url:url,
        method:"POST",
        data:{
            "text":textcontent,
            "chat_id":chat_id
        }
    }).then((res)=>{
       message.success("yuborildi")
    
       }).catch((error)=>{
        message.error("xatolik")
        console.log("yuborishda xatolik", error);
       })
}

  
    return(
        <>
        <div className="ending">
            <div className="container ending__container">
                <h1 className="ending__title">
               {t("ending.make")} <span className="span">{t("ending.reservat")}</span> {t("ending.this")} <span className="span">{t("ending.form")}</span>
                </h1>
              <form className="ending__form" onSubmit={sendMessege} >
                <div className="ending__box">
                    <p className="ending__text">{t("ending.name")}</p>
                    <input type="text" id="name" className="ending__input" placeholder="Ex. John Smithee" />
                </div>
                <div className="ending__box">
                    <p className="ending__text">{t("ending.number")}</p>
                    <input type="number" id="number" className="ending__input" placeholder="Ex. +99899 999 99 99" />
                </div>
                <div className="ending__box">
                    <p className="ending__text">{t("ending.guests")}</p>
                    <input type="text" id="guests" className="ending__input" placeholder="ex. 3 or 4 or 5" />
                </div>
                <div className="ending__box">
                    <p className="ending__text">{t("ending.date")}</p>
                    <input type="date" className="ending__input" placeholder="mm/dd/yyyy" />
                </div>
                <div className="ending__box">
                    <p className="ending__text">{t("ending.choose")}</p>
                    <select className="ending__select">
                        <option value="Antalya">{t("ending.antalya")}</option>
                        <option value="Antalya">{t("ending.istanbul")}</option>
                        <option value="Antalya">{t("ending.dubai")}</option>
                        <option value="Antalya">{t("ending.canada")}</option>
                        <option value="Antalya">{t("ending.kual")}</option>
                        <option value="Antalya">{t("ending.sharm")}</option>
                    </select>
                </div>
                <div className="ending__box">
                    <p className="ending__text">{t("ending.choose")}</p>
                    <select className="ending__select">
                        <option value="Antalya">{t("ending.coun")}</option>
                        <option value="Antalya">{t("ending.usa")}</option>
                        <option value="Antalya">{t("ending.europe")}</option>
                        <option value="Antalya">{t("ending.japan")}</option>
                        <option value="Antalya">{t("ending.oman")}</option>
                        <option value="Antalya">{t("ending.india")}</option>
                    </select>
                </div>
                <button type='submit' className="ending__btn">{t("ending.now")}</button>
              </form>
             
            </div>
        </div>
        </>
    )
}

export default Ending