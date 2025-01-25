import banner from '../../public/Banner.jpeg'
const Banner = () => {
  return (
    <div className='h-[80vh] overflow-hidden relative flex items-center justify-center'>
    <img src={banner} className='object-cover h-full w-full' alt="" />
    {/* Glass effect overlay */}
    <div className='absolute inset-0 bg- bg-opacity-20 backdrop-blur-md flex items-center justify-center'>
        <p className='text-white text-center text-5xl leading-tight font-semibold'>Top Deals for Top Wheels – <br/>Only at WheelSpot!</p>
    </div>
</div>
  )
}

export default Banner