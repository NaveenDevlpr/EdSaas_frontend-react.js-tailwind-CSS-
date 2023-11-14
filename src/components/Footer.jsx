import fb from '../assets/fb.png'
import insta from '../assets/Insta.png/'
import linkedin from '../assets/linkedin.png'
import twitter from '../assets/twitter.png'
import logo from '../assets/logo.png'
const Footer = () => {
  return (
    <div className='bg-[#010851] md:px-14 p-4 max-w-screen-2xl mx-auto text-white'>
        <div className="my-10 flex flex-col md:flex-row">
            <div className='md:w-1/2 space-y-10 py-5'>
                <a href="/" className='text-2xl font-semibold felx items-center space-x-3 text-primary'>
                    <img src={logo} alt="" className='w-20 inline-block items-center'/><span className="text-white ">SkillUp</span>
                </a>
                <p className='md:w-1/2 text-gray-300'>
                It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
                </p>
                <div>
                    <input type='email' name='email' id="email" placeholder="Your email"
                    className='bg-[#9a7af159] py-2 px-4 rounded-md focus:outline-none'
                    ></input>

                    <input type="submit" value={'subscribe'} className='px-4 py-2 bg-secondary rounded-md -ml-2 cursor-pointer hover:bg-white text-primary transition-all duration-300'></input>
                </div>
            </div>

            <div className='md:w-1/2 flex flex-col md:flex-row flex-wrap justify-between gap-8 items-start'>
                <div className="space-y-6 mt-5">
                    <h4 className=" text-xl">Platform</h4>
                    <ul className='space-y-2'>
                        <a href="/" className='block text-gray-300'>Overview</a>
                        <a href="/" className='block text-gray-300'>Features</a>
                        <a href="/" className='block text-gray-300'>About</a>
                        <a href="/" className='block text-gray-300'>Pricing</a>
                    </ul>
                </div>

                <div className="space-y-6 mt-5">
                    <h4 className=' text-xl'>Help</h4>
                    <ul className='space-y-2'>
                        <a href="/" className='block text-gray-300'>How does it work</a>
                        <a href="/" className='block text-gray-300'>Where to ask questions</a>
                        <a href="/" className='block text-gray-300'>How to pay</a>
                        <a href="/" className='block text-gray-300'>What is needed for this</a>
                    </ul>
                </div>

                <div className="space-y-6 mt-5">
                    <h4 className=" text-xl">Contacts</h4>
                    <ul className='space-y-2'>
                        <p  className='block text-gray-300'>(012) 12345-67890</p>
                        <p  className='block text-gray-300'>Naveen Kumar</p>
                        <p  className='block text-gray-300'>naveenmk@gmail.com</p>
                        <p  className='block text-gray-300'>Pricing</p>
                    </ul>
                </div>
            </div>
            
        </div>
        <hr className='bg-gray-200'></hr>

        <div className='flex flex-col sm:flex-row gap-8 sm:items-center justify-between my-8'>
            <p className='text-gray-300'>@Name 2023 --- 2025. All rights reserved.</p>
            <div className='flex items-center space-x-6'>
                <img src={fb} className='w-8 cursor-pointer hover:-translate-y-4 transition-all duration-500 ' alt=''></img>
                <img src={insta} className='w-8 cursor-pointer hover:-translate-y-4 transition-all duration-500 ' alt=''></img>
                <img src={twitter} className='w-8 cursor-pointer hover:-translate-y-4 transition-all duration-500 ' alt=''></img>
                <img src={linkedin} className='w-8 cursor-pointer hover:-translate-y-4 transition-all duration-500 ' alt=''></img>
            </div>
        </div>
    </div>
  )
}

export default Footer