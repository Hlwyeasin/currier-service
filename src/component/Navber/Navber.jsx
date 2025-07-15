import React from 'react';
import logoimg from "../../assets/logoServicceCurier.png";
import suchimg from "../../assets/Search.png";
import  sucimg from "../../assets/Secondary CTA.png";



const Navber = () => {
  return (
    <div >
    <div className='flex justify-between bg-gray-300 py-10 m-8 '>

       
        
        <div>
            <img src={logoimg} alt="#logo" />
        </div>

         <div>
            <ul className='flex gap-x-25'>
                <li>
                    <a href="#Home">Home</a>
                </li>
                <li>
                    <a href="#Home">Our services</a>
                </li>
                <li>
                    <a href="#Home">About Us</a>
                </li>
                <li>
                    <a href="#Home">What’s new?</a>
                </li>
               
               
            </ul>
        </div>

        <div className='flex gap-x-5'>
                 <img src={suchimg} alt="" />

                 <img src={sucimg} alt="" />
           
                

        </div>
        
    </div>
    </div>
    

  )
}

export default Navber
