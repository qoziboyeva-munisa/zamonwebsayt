

import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import { useTranslation } from "react-i18next";
import './Modal.css';
import i18next from "i18next";
export default function TemporaryDrawer() {
  const [open, setOpen] = React.useState(false);
 
  const ChangeLanguage=(event)=>{
    e.preventDefault();
    const selectedLanguage = event.target.value;
    i18next.changeLanguage(selectedLanguage)
  
  }
  const toggleDrawer =  (e) => {
    e.preventDefault();
    setOpen(true);
  };
  const onCloseD = (e) =>{
    e.preventDefault();D
    setOpen(false)
  }
 const {t} = useTranslation()

  const DrawerList = (
    <Box sx={{ width: 250 }}  >
      <div className="modal">
      <ul className="modal__list">
        <li className="modal__x">
        <button onClick={onCloseD} className="modal__btn">X</button>
        </li>
           < li className="modal__item" >
                  <a href="#home" className="modal__link">{t("navbar.home")}</a>
                </li>
                <li className="modal__item">
                <a href="#explore" className="modal__link">{t("navbar.about")} </a>
                </li>
                <li className="modal__item">
                <a href="#map" className="modal__link">{t("navbar.tours")}</a>
                </li>
                <li className="modal__item">
                <a href="#make" className="modal__link">{t("navbar.contact")}</a>
                </li>
                
                </ul>

                 <div className="modal__box">
                 <select className='modal__select' onChange={ChangeLanguage} value={i18next.language}>
                  <option  className="modal__option" value="en">En</option>
                  <option className="modal__option"  value="uz">Uz</option>
                  <option className="modal__option"  value="ru">Ru</option>
                </select>
                 </div>

            
                </div>
      {/* <Divider /> */}
    </Box>
  );

  return (
    <div className="modal__icon">
      <Button onClick={toggleDrawer}>
        <i className="fa-solid fa-bars"></i>
      </Button>
      <Drawer open={open} >
        {DrawerList}
      </Drawer>
    </div>
  );
}