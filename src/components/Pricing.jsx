import { useState } from "react"
import { motion } from "framer-motion"
import fadeIn from "../variants"
const Pricing = () => {
    const [isYearly,setYaerly]=useState(false)

    const packages=[
        {
            name:'Start',
            monthlyPrice:'19',
            yearlyPrice:'199',
            description:'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout',
            green:'src/assets/bulletOne.png'
        },
        {
            name:'Advance',
            monthlyPrice:'39',
            yearlyPrice:'399',
            description:'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout',
            green:'src/assets/bulletOne.png'
        },
        {
            name:'Premium',
            monthlyPrice:'59',
            yearlyPrice:'599',
            description:'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout',
            green:'src/assets/bulletOne.png'
        },
    ]
  return (
    <div className='p-4 md:px-14 max-w-s  mx-auto space-y-8 mt-10' id='pricing'>
        <div className='text-center'>
            <h2 className='md:text-5xl text-3xl text-primary font-bold mb-2'>Get All your Plan</h2>
            <p className='text-tertiary md:w-1/3 mx-auto px-4'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>

            <div className="mt-10 ">
                <label htmlFor="toggle" className="inline-flex items-center cursor-pointer">
                    <span className='text-2xl text-primary mr-8 font-semibold'>Monthly</span>
                    <div className='w-14 h-6 bg-gray-300 rounded-full transition-all duration-200 ease-in-out'>
                        <div className={`w-6 h-6 rounded-full ${isYearly?'bg-primary ml-8':'bg-gray-500'}`}></div>
                    </div>
                    <span className='text-2xl text-primary ml-8 font-semibold' >Yearly</span>
                    <input type="checkbox" id='toggle' className="hidden" checked={isYearly} onChange={()=>{setYaerly(!isYearly)}}></input>
                </label>
            </div>
        </div>

        <motion.div 
        
        variants={fadeIn("up",0.7)}
        initial="hidden"
        whileInView={"show"}
        viewport={{once:false,amount:0.7}}
        className='grid lg:grid-cols-3 sm:grid-cols-2 gap-10 mt-20 md:w-11/12 mx-auto'>
            {
                packages.map((e,i)=>{
                    return(
                        <div key={i} className='border py-10 md:px-6 px-4 rounded-lg shadow-3xl'>
                            <h3 className='text-3xl font-bold text-center text-primary'>{e.name}</h3>
                            <p className='text-tertiary text-center my-5'>{e.description}</p>
                            <p className='text-center mt-6 text-3xl font-bold text-secondary '>
                                {isYearly?`Rs ${e.yearlyPrice}`:`Rs ${e.monthlyPrice}`}
                                <span className='text-tertiary text-sm font-medium'>{isYearly?` / year`:` / month`}</span>
                            </p>
                            <ul className='mt-6 space-y-2 px-4'>
                                <li className='flex gap-2 items-center text-primary font-medium '><img src={e.green} alt='' className='w-4 h-4'/>Videos of lessons</li>
                                <li className='flex gap-2 items-center text-primary font-medium'><img src={e.green} alt='' className='w-4 h-4'/>Homework check</li>
                                <li className='flex gap-2 items-center text-primary font-medium '><img src={e.green} alt='' className='w-4 h-4'/>Additional practice task</li>
                                <li className='flex gap-2 items-center text-primary font-medium'><img src={e.green} alt='' className='w-4 h-4'/>Monthly conferences</li>
                                <li className='flex gap-2 items-center text-primary font-medium'><img src={e.green} alt='' className='w-4 h-4'/>Personal advice from teachers</li>
                            </ul>
                            <div className="w-full mx-auto mt-8 flex items-center justify-center ">
                                <button className='py-2 px-8 bg-secondary font-semibold text-white rounded-md hover:bg-primary transition-all duration-300'>
                                    Get started
                                </button>
                            </div>
                        </div>
                    )
                })
            }
        </motion.div>
    </div>
  )
}

export default Pricing