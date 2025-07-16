
import './App.css'
import Banner from './component/Banner/Banner'
import Containner from './component/Containner/Containner'
import Contract from './component/Contract/Contract'
import Delivery from './component/Delivery/Delivery'
import FindUs from './component/FindUs/FindUs'
import Footer from './component/Footer/Footer'
import Navber from './component/Navber/Navber'
import Ratings from './component/Ratings/Ratings'
import Service from './component/Service/Service'
import SubscribeSection from './component/SubscribeSection/SubscribeSection'
import Testimonial from './component/Testimonial/Testimonial'

function App() {
  

  return (
   <>
  
   <Navber></Navber>
 <Containner>
  <Banner/>
  <Service/>
  <Ratings/>
  <Delivery/>
  <Testimonial/>
  <Contract/>
  <FindUs/>
  <SubscribeSection/>
  <Footer/>

 </Containner>
   </>
  )
}

export default App
