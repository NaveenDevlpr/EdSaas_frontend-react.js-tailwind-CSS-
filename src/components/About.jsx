import about from '../assets/About.png'
import aboutTwo from '../assets/AboutTwo.png'
import { motion } from 'framer-motion'
import fadeIn from '../variants'
const About = () => {
  return (
    <div className='md:px-14 px-4 max-w-s space-y-5' id='about'>
        <div className='flex flex-col md:flex-row items-center justify-between gap-8' >
            <motion.div
             variants={fadeIn("right",0.7)}
             initial="hidden"
             whileInView={"show"}
             viewport={{once:false,amount:0.7}}
            
            className='md:w-1/2'>
                <img src={about} alt=''></img>
            </motion.div>
            <motion.div
            
            variants={fadeIn("left",0.7)}
            initial="hidden"
            whileInView={"show"}
            viewport={{once:false,amount:0.7}}
            
            className='w-2/5'>
                <h2 className='md:text-5xl text-3xl font-bold text-primary mb-5 leading-normal'>We have been improving our product<span className='text-secondary'> for many years</span></h2>
                <p className='text-tertiary text-lg mb-7'> It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                <button className='py-2 px-8 bg-secondary font-semibold text-white rounded-md hover:bg-primary transition-all duration-300'>Get started</button>
            </motion.div>
        </div>


        <div className='flex flex-col md:flex-row-reverse items-center justify-between gap-8' >
            <motion.div
            
            variants={fadeIn("up",0.7)}
            initial="hidden"
            whileInView={"show"}
            viewport={{once:false,amount:0.7}}
            className='md:w-1/2'>
                <img src={aboutTwo} alt=''></img>
            </motion.div>
            <motion.div
             variants={fadeIn("right",0.7)}
             initial="hidden"
             whileInView={"show"}
             viewport={{once:false,amount:0.7}}
            className='w-2/5'>
                <h2 className='md:text-5xl text-3xl font-bold text-primary mb-5 leading-normal'>You can practice at any <span className='text-secondary'> time convinient for you</span></h2>
                <p className='text-tertiary text-lg mb-7'> It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                <button className='py-2 px-8 bg-secondary font-semibold text-white rounded-md hover:bg-primary transition-all duration-300'>Get started</button>
            </motion.div>
        </div>
    </div>
  )
}

export default About