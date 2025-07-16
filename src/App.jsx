
import './App.css'
import Banner from './component/Banner/Banner'
import Contract from './component/Contract/Contract'
import Delivery from './component/Delivery/Delivery'
import FindUs from './component/FindUs/FindUs'
import Footer from './component/Footer/Footer'
import Navber from './component/Navber/Navber'
import Ratings from './component/Ratings/Ratings'
import Services from './component/Services/Services'
import SubscribeSection from './component/SubscribeSection/SubscribeSection'
import Testimonial from './component/Testimonial/Testimonial'

function App() {
  

  return (
   <>
  
   <Navber/>
  <Banner/>
  <Services/>
  <Ratings/>
  <Delivery/>
  <Testimonial/>
  <Contract/>
  <FindUs/>
  <SubscribeSection/>
  <Footer/>

 
   </>
  )
}

export default App
