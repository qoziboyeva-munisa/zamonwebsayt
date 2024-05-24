
import './Navbar.css'
import zamon from "../../assets/img/zamon.svg"
import { useTranslation } from 'react-i18next'
import TemporaryDrawer from '../../Modal/Modal';
import { colors } from '@mui/material';
import { blue } from '@mui/material/colors';


function Navbar() {
  const {t,i18n} = useTranslation();
  const laungages = localStorage.getItem('i18nextLng')
  const handleChange = (event) =>{
    const selectedLaungage = event.target.value;
    i18n.changeLanguage(selectedLaungage);
  }
 


  return (
    <>
     <div className="navbar" id='navbar'>
        <div className="container navbar__container">
            <img className='navbar__img' src={zamon} alt="" />
            <ul className="navbar__list">
              <li className="navbar__item">
                <a href="#" className="navbar__link">{t("navbar.home")}</a>
              </li>
              <li className="navbar__item">
                <a href="#" className="navbar__link">{t("navbar.about")}</a>
              </li>
              <li className="navbar__item">
                <a href="#" className="navbar__link">{t("navbar.tours")}</a>
              </li>
              <li className="navbar__item">
                <a href="#" className="navbar__link">{t("navbar.contact")}</a>
              </li>
            </ul>
          
          <TemporaryDrawer/>
            <div className="navbar__box">
            <select className="select" id="lng" onChange={handleChange} value={laungages}>
      <option value="uz">Uz</option>
      <option value="en">En</option>
      <option value="ru">Ru</option>
     </select>
              <a href="https://t.me/zamonbiznestour" className="navbar__linkicon">
              <i class="fa-brands fa-telegram" style={{color: "white"}}></i>
              </a>
              <a href="https://www.instagram.com/zamontour" className="navbar__linkicon">
              <i className="fa-brands fa-instagram" style={{color:"white"}}></i>
              </a>
              
            </div>
           
        </div>
     </div>
    </>
  )
}

export default Navbar