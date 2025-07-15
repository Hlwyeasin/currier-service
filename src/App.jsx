
import './App.css'
import Banner from './component/Banner/Banner'
import Containner from './component/Containner/Containner'
import Navber from './component/Navber/Navber'
import Service from './component/Service/Service'

function App() {
  

  return (
   <>
  
   <Navber></Navber>
 <Containner>
  <Banner/>
  <Service/>
 </Containner>
   </>
  )
}

export default App
