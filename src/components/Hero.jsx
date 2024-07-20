import React from 'react'

const Hero = () => {
  return (
    <section className='sm:px-[15rem] sm:mt-6 flex flex-col gap-6'>
      <div className=''>
        <h1 className='text-[26px] font-bold text-center sm:text-[48px]'>Unlock Effortless Wealth with <span className='text-primaryColor'>Automated AI Arbitrage Method!</span> Elevate Your Financial Success with Cutting-Edge <span className='text-primaryColor'>AI Technology!</span></h1>
      </div>
      <div>
        <p className='text-[16px] sm:text-[24px] font-semibold text-primaryColor text-center'> Watch Your Investment Skyrocket Effortlessly with a Simple AI System
          that Capitalizes on Price Differences! Investors Have Seen
          Remarkable 36.5%+ Gains in Less Than 24 Hours! Watch the Video Below
          to Discover How!</p>
      </div>
      <div className='border-4 sm:border-[6px] rounded-xl sm:rounded-3xl border-zinc-300'>
        <video className='rounded-lg sm:rounded-3xl' autoPlay muted playsInline controls>
            <source src="/src/assets/Ai_Arbitrage_VR.mp4" type="video/mp4"/>
            Your browser does not support the video tag.
          </video>
          </div>
      <div className='flex justify-center'>
        <button className='bg-primaryColor text-secondaryColor px-5 sm:px-8 sm:py-4  py-2 rounded-full text-[16px] sm:text-[20px] font-bold hover:bg-secondaryColor hover:text-primaryColor border-[1px] border-primaryColor'><a href="#contact">Register Now</a></button>
      </div>
    </section>
  )
}

export default Hero