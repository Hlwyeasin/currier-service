import React from 'react'
import serviceimg from "../../assets/service1.svg";
import sevice02img from "../../assets/service2.svg";
import service03img from "../../assets/service3.svg";
import Containner from '../Containner/Containner';



const Services = () => {

   const data = [
        {
            img: serviceimg,
            title:"Business Services" ,
            text: "We give you complete reliable delivery for your company.  We will take full responsibility of the deliveries.",
            ul:[
                 "Corporate goods",
                 "Shipment",
                 "Accesories"
            ],
            button: "Learn more"
        },
        {
            img: sevice02img,
            title:"Statewide Services" ,
            text: "Offering home delivery around the city, where your products will be at your doorstep within 48-72 hours.",
            ul:[
                 "Personal items",
                 "Percels",
                 "Documents"
            ],
            button: "Learn more"
        },
        {
            img: service03img,
            title:"Personal Services" ,
            text: "You can trust us to safely deliver your most sensitive documents to the specific area in a short time.",
            ul:[
                 "Gifts",
                 "Package",
                 "Documents"
            ],
            button: "Learn more"
        },
    ]
  return (
    <>

    <div className='bg-section pb-[172px]'>
        <Containner>

            <div className='text-center'>
                <h1 className='font-secondery font-bold text-[31px] leading-[100%] text-primary'>SERVICES</h1>
                <h2 className='font-primary font-extrabold text-[49px] leading-[100%] pt-[11px] pb-[86px]'>Our services for you</h2>
            </div>


            <div className='flex justify-between'>
                {
                    data.map((item,i)=>(

                        <div key={i} className=' group w-[424px] bg-white rounded-[16px] pb-[49px] pt-[67px] px-[60px] hover:shadow-lg'>

                            <img src={item.img} alt="" className='mx-auto' />
                            <h2 className='font-primary font-extrabold text-[25px] leading-[100%] pt-[29px] pb-8 text-center'>{item.title}</h2>
                            <p className='font-primary text-base leading-[145%] text-[#7B7A8B] pb-[25px]'>{item.text}</p>
                            
                            {
                                item.ul.map((index,idx)=>(
                                    <div key={idx} className='flex items-center gap-x-[10px] '>
                                        <div className='w-[7px] h-[7px] rounded-full bg-primary'></div>
                                        <div className='font-primary text-base leading-[120%] text-[#7B7A8B] py-2'>{index}</div>
                                    </div>
                                ))
                            }
                            <div className='font-secondery font-bold text-[20px] leading-[100%] text-black border border-[#F95C19] py-[12px] px-[96px] rounded-[5px] mt-[60px] group-hover:bg-[#F95C19] group-hover:text-blue-600'>
                                <a href="" >{item.button}</a>
                            </div>
                        </div>

                    ))
                }
            </div>



        </Containner>
    </div>
      
    </>
  )
}

export default Services;







