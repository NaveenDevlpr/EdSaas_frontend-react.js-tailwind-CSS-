import Banner from "../shared/Banner"
import newsletter from '../assets/newsletter.png'

const NewsLetter = () => {
  return (
    <div className='md:px-14 p-4 max-w-screen-2xl mx-auto my-12'>
        <Banner banner={newsletter} heading={'Each student can share their discount code for friends'}
        subHeading={'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.'}
        btn1={'I have a code'}
        btn2={''}
        />
    </div>
  )
}

export default NewsLetter