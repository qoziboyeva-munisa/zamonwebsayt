import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import i18next from "i18next";
import { useTranslation } from 'react-i18next';
  import "./Modal.css"
export default function TemporaryDrawer() {

    const laungages = localStorage.getItem('i18nextLng')
    const handleChange = (event) =>{
      const selectedLaungage = event.target.value;
      i18n.changeLanguage(selectedLaungage);
    }
  const [open, setOpen] = React.useState(false);
  const {t,i18n} = useTranslation()
  const toggleDrawer =()=>()=> {
    setOpen(true);
  };
  const onCloseD = () =>{
    setOpen(false)
  }

  const DrawerList = (
    <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)}>
    
            <div className="modal">
            <div className="container modal__container">
                <ul className="modal__list">
                  <li className="modal__item">
                    <a href="#home" className="modal__link">{t("navbar.home")}</a>
                  </li>
                  <li className="modal__item">
                    <a href="#explore" className="modal__link">{t("navbar.about")}</a>
                  </li>
                  <li className="modal__item">
                    <a href="#map" className="modal__link">{t("navbar.tours")}</a>
                  </li>
                  <li className="modal__item">
                    <a href="#make" className="modal__link">{t("navbar.contact")}</a>
                  </li>
                </ul>
    
                <div className="modal__box">
                
                  <select className="modal__select" id="lng" onChange={handleChange} value={laungages}>
          <option className='modal__option' value="uz">Uz</option>
          <option className='modal__option' value="en">En</option>
          <option className='modal__option' value="ru">Ru</option>
         </select>
                </div>
               
            </div>
         </div>
  
     
    </Box>
  );

  return (
    <div className='modal__icon'>
      <Button className='modal__btn' onClick={toggleDrawer(true)}>
        <i class="fa-solid fa-bars"></i>
        </Button>
      <Drawer open={open} onClose={onCloseD}>
        {DrawerList}
      </Drawer>
    </div>
  );
}