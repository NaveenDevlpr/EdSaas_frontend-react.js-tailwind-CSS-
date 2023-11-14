 
import banner from '../assets/banner.png'
import Banner from '../shared/Banner'
const Home = () => {
  return (
    <div className='md:px-12 p-4 max-w-screen-2xl mx-auto mt-20 ' id='home'>
       <Banner banner={banner} 
       heading={"Develop your skills without diligence"}
       subHeading={"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English."}
       btn1={"Get started"}
       btn2={"Discount"}
       />
    </div>
  )
}

export default Home