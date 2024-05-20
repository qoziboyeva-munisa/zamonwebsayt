
import Explore from '../../Components/Explore/Explore'
import Header from '../../Components/Header/Header'
import Main from '../../Components/Main/Main'
import Navbar from '../../Components/Navbar/Navbar'
import Support from '../../Components/Support/Support'
import Location from '../../Components/Location/Location'
import './Home.css'
import Make from '../../Components/Make/Make'
import Map from '../../Components/Map/Map'
import Ending from '../../Components/Ending/Ending'
import Footer from '../../Components/Footer/Footer'

function Home() {

  return (
    <>
    <Navbar/>
   <Header/>
   <Main/>
   <Support/>
   <Explore/>
  <Location/>
  <Make/>
  <Map/>
  <Ending/>
  <Footer/>
    </>
  )
}

export default Home