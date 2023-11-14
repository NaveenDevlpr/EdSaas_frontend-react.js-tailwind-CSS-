
import {motion} from 'framer-motion'
import fadeIn from '../variants'
const Banner = ({banner,heading,subHeading,btn1,btn2}) => {
  return (
    <div className='gradient rounded-xl rounded-br-[80px] md:p-9 px-4 '>
    <div className='flex flex-col md:flex-row-reverse justify-between items-center gap-10 pb-3'>
         <motion.div
         variants={fadeIn("down",0.7)}
         initial="hidden"
         whileInView={"show"}
         viewport={{once:false,amount:0.7}}
         >
            <img src={banner} alt="" className='lg:h-[386px]'></img>
        </motion.div>
        <motion.div
        
        variants={fadeIn("up",0.7)}
        initial="hidden"
        whileInView={"show"}
        viewport={{once:false,amount:0.7}}
        
        className='md:w-3/5'>

            <h2 className='md:text-7xl text-4xl font-bold text-white mb-6 leading-relaxed'>{heading}</h2>
            <p className='text-xl text-[#EBEBEB] mb-8'>
                {subHeading}
            </p>
            <div className='space-y-3 space-x-3'>
                <button className='py-2 px-8 bg-secondary font-semibold text-white rounded-md hover:bg-primary transition-all duration-300'>{btn1}</button>
                <button className={`${btn2===''?'hidden':'py-2 px-8 bg-secondary font-semibold text-white rounded-md  hover:bg-primary transition-all duration-300'}`}>{btn2}</button>
            </div>
        </motion.div>
        
    </div>
</div>
  )
}

export default Banner