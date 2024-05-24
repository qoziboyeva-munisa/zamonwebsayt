
// }


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
    const selectedLanguage = event.target.value;
    i18next.changeLanguage(selectedLanguage)
  
  }
  const toggleDrawer =  ()  =>{
    setOpen(true);
  };
  const onCloseD = () =>{
    setOpen(false)
  }
 const {t} = useTranslation()

  const DrawerList = (
    <Box sx={{ width: 250 }}  >
      <div className="modal">
        <div className=" container modal__container">
      <ul className="modal__list">
           < li className="modal__item" >
                  <a onClick={onCloseD} href="#navbar" className="modal__link">{t("navbar.home")}</a>
                </li>
                <li className="modal__item">
                <a onClick={onCloseD} href="#explore" className="modal__link">{t("navbar.about")} </a>
                </li>
                <li className="modal__item">
                <a onClick={onCloseD} href="#map" className="modal__link">{t("navbar.tours")}</a>
                </li>
                <li className="modal__item">
                <a onClick={onCloseD} href="#make" className="modal__link">{t("navbar.contact")}</a>
                </li>
                
                
                </ul>

                   <select className='modal__select' onChange={ChangeLanguage} value={i18next.language}>
                  <option  className="modal__option" value="en">En</option>
                  <option className="modal__option"  value="uz">Uz</option>
                  <option className="modal__option"  value="ru">Ru</option>
                </select>

                </div>
                </div>
    </Box>
  );

  return (
    <div className="modali">
      <Button  onClick={toggleDrawer}>
      
      <i className="fa-solid fa-bars fa-2xl" style={{color:"white",}}></i>
    
      </Button>
      <Drawer open={open} onClose={onCloseD} >
        {DrawerList}
      </Drawer>
    </div>
  );
}


