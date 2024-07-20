import React from 'react'

const Comments = () => {

  return (
    <section className='sm:px-[15rem] mt-10 mb-10 flex flex-col gap-8'>
      <div className='text-[16px] sm:text-[20px] font-bold'>619 Comments</div>
      <div className='flex gap-4 sm:gap-10 w-full'>
        <img src="dummy-user.svg" className='w-[50px] sm:w-[90px]' alt="user" />
        <div className='border-[1px] border-zinc-400 rounded-full w-full justify-between flex items-center px-4 sm:px-8'>
        <input type="text" className='focus:border-0 outline-none ml-4 placeholder:text-black placeholder:text-[16px]' placeholder='Add a comment..' />
          <a href='#contact'>
            <img src="send-message-arrow.webp" className='w-[23px] sm:w-[40px]' alt="" />
          </a>
        </div>
      </div>

      {/* comments */}
      <div className='flex gap-4'>
        <div>
        <img src="kathryn.webp" className='rounded-full w-[2.5rem] sm:w-[5.2rem]' alt="" />
        </div>
        <div className='flex flex-col gap-2'>
          <h3 className='text-primaryColor font-semibold text-[16px] sm:text-[20px]'>Kathryn Murphy</h3>
          <p className='text-[15px] sm:text-[18px] font-normal'>Does this really work? How can I get started?</p>
          <div className='flex gap-2'>
            <a className='text-primaryColor sm:text-[18px] font-semibold text-[16px]' href="#contact">Like</a>
            <a className='text-primaryColor sm:text-[18px] font-semibold text-[16px]' href="#contact">Reply</a>
            <p className='font-semibold opacity-80 text-[16px] sm:text-[17px]'>98k · 23 hrs</p>
          </div>
        </div>
      </div>

      <div className='border-l-[1px] flex flex-col gap-4 border-zinc-300 ml-14 sm:ml-24'>
      <div className='flex ml-2 gap-4'>
        <div>
        <img src="ronald.webp" className='rounded-full w-[7rem] sm:w-[4.5rem]' alt="" />
        </div>
        <div className='flex flex-col gap-2'>
          <h3 className='text-primaryColor font-semibold text-[16px] sm:text-[20px]'>Ronald Richards</h3>
          <p className='text-[15px] sm:text-[18px] font-normal'>Yup, same here. I signed up, and they called me after 7 minutes. Excellent service from Eric, the support guy, and a quick 5-minute setup.</p>
          <div className='flex gap-2'>
            <a className='text-primaryColor sm:text-[18px] font-semibold text-[16px]' href="#contact">Like</a>
            <a className='text-primaryColor sm:text-[18px] font-semibold text-[16px]' href="#contact">Reply</a>
            <p className='font-semibold opacity-80 text-[16px] sm:text-[17px]'>122 · 2 min</p>
          </div>
        </div>
      </div>
      <div className='flex ml-2 gap-4'>
        <div>
        <img src="marvin.webp" className='rounded-full w-[12rem] sm:w-[7rem]' alt="" />
        </div>
        <div className='flex flex-col gap-2'>
          <h3 className='text-primaryColor font-semibold text-[16px] sm:text-[20px]'>Marvin McKinney</h3>
          <p className='text-[15px] sm:text-[18px] font-normal'>Yes, it actually worked for me. Only 2 weeks and I have just withdrawn my earned funds. I left my info in the registration form and after 10 minutes, I received a call from the support team, and they helped me with everything.</p>
          <div className='flex gap-2'>
            <a className='text-primaryColor sm:text-[18px] font-semibold text-[16px]' href="#contact">Like</a>
            <a className='text-primaryColor sm:text-[18px] font-semibold text-[16px]' href="#contact">Reply</a>
            <p className='font-semibold opacity-80 text-[16px] sm:text-[17px]'>252 · 1 min</p>
          </div>
        </div>
      </div>
      </div>

      <div className='flex gap-4'>
        <div>
        <img src="esther.webp" className='rounded-full w-[5rem] sm:w-[5.2rem]' alt="" />
        </div>
        <div className='flex flex-col gap-2'>
          <h3 className='text-primaryColor font-semibold text-[16px] sm:text-[20px]'>Esther Howard</h3>
          <p className='text-[15px] sm:text-[18px] font-normal'>I was finally able to buy a new car. Not life but a dream ... But dreams come true)))</p>
          <div className='flex gap-2'>
            <a className='text-primaryColor sm:text-[18px] font-semibold text-[16px]' href="#contact">Like</a>
            <a className='text-primaryColor sm:text-[18px] font-semibold text-[16px]' href="#contact">Reply</a>
            <p className='font-semibold opacity-80 text-[16px] sm:text-[17px]'>387 · 3 hrs</p>
          </div>
        </div>
      </div>

      <div className='flex gap-4'>
        <div>
        <img src="cameron.webp" className='rounded-full w-[9rem] sm:w-[7rem]' alt="" />
        </div>
        <div className='flex flex-col gap-2'>
          <h3 className='text-primaryColor font-semibold text-[16px] sm:text-[20px]'>Cameron Williamson</h3>
          <p className='text-[15px] sm:text-[18px] font-normal'>Now I have the opportunity to go on holiday this year :) And the buzz itself is that I will rest, and the system will earn day and night. This is just a fairy tale!...<a className='text-primaryColor sm:text-[18px] font-semibold text-[16px]' href="#contact">See More</a>
          </p>
          <div className='flex gap-2'>
            <a className='text-primaryColor sm:text-[18px] font-semibold text-[16px]' href="#contact">Like</a>
            <a className='text-primaryColor sm:text-[18px] font-semibold text-[16px]' href="#contact">Reply</a>
            <p className='font-semibold opacity-80 text-[16px] sm:text-[17px]'>2497 · 2 hrs</p>
          </div>
        </div>
      </div>

      <div className='flex gap-4'>
        <div>
        <img src="savannah.webp" className='rounded-full w-[5rem] sm:w-[5.2rem]' alt="" />
        </div>
        <div className='flex flex-col gap-2'>
          <h3 className='text-primaryColor font-semibold text-[16px] sm:text-[20px]'>Savannah Nguyen</h3>
          <p className='text-[15px] sm:text-[18px] font-normal'>I signed up last week and have already earned CAD $2,800! I recommend to everyone.</p>
          <div className='flex gap-2'>
            <a className='text-primaryColor sm:text-[18px] font-semibold text-[16px]' href="#contact">Like</a>
            <a className='text-primaryColor sm:text-[18px] font-semibold text-[16px]' href="#contact">Reply</a>
            <p className='font-semibold opacity-80 text-[16px] sm:text-[17px]'>430 · 4 hrs</p>
          </div>
        </div>
      </div>

      <div className='border-l-[1px] flex flex-col gap-4 border-zinc-300 ml-14 sm:ml-24'>
      <div className='flex ml-2 gap-4'>
        <div>
        <img src="eleanor.webp" className='rounded-full w-[2.5rem] sm:w-[4rem]' alt="" />
        </div>
        <div className='flex flex-col gap-2'>
          <h3 className='text-primaryColor font-semibold text-[16px] sm:text-[20px]'>Eleanor Pena</h3>
          <p className='text-[15px] sm:text-[18px] font-normal'>Just signed up, people, wish me good luck! ...
          <a className='text-primaryColor sm:text-[18px] font-semibold text-[16px]' href="#contact">See More</a>
          </p>
          <div className='flex gap-2'>
            <a className='text-primaryColor sm:text-[18px] font-semibold text-[16px]' href="#contact">Like</a>
            <a className='text-primaryColor sm:text-[18px] font-semibold text-[16px]' href="#contact">Reply</a>
            <p className='font-semibold opacity-80 text-[16px] sm:text-[17px]'>99 · 27 min</p>
          </div>
        </div>
      </div>
      <div className='flex ml-2 gap-4'>
        <div>
        <img src="tomas.webp" className='rounded-full w-[11rem] sm:w-[7rem]' alt="" />
        </div>
        <div className='flex flex-col gap-2'>
          <h3 className='text-primaryColor font-semibold text-[16px] sm:text-[20px]'>Thomas Walker</h3>
          <p className='text-[15px] sm:text-[18px] font-normal'>I registered two days ago, the balance is already CAD$7,500, so I’m thinking of asking for a withdrawal, or is it too early? In fact, I did nothing, somehow I have earned it automatically ...</p>
          <div className='flex gap-2'>
            <a className='text-primaryColor sm:text-[18px] font-semibold text-[16px]' href="#contact">Like</a>
            <a className='text-primaryColor sm:text-[18px] font-semibold text-[16px]' href="#contact">Reply</a>
            <p className='font-semibold opacity-80 text-[16px] sm:text-[17px]'>252 · 1 min</p>
          </div>
        </div>
      </div>
      <div className='bg-zinc-200 ml-2 p-3 sm:w-1/2 flex justify-center'>
        <a href="#contact">Show 10 more replies in this thread</a>
      </div>
      </div>
      
      <div className='flex gap-4'>
        <div>
        <img src="jenny.webp" className='rounded-full w-[21rem] sm:w-[18rem]' alt="" />
        </div>
        <div className='flex flex-col gap-2'>
          <h3 className='text-primaryColor font-semibold text-[16px] sm:text-[20px]'>Jenny Wilson</h3>
          <p className='text-[15px] sm:text-[18px] font-normal'>I am in shock and my friends too! At first I thought that there was some kind of scam, it was not clear what and how it worked. But then the manager contacted me and explained everything in detail, it turned out to be very simple! I always worked hard and didn’t think that you could make money like that ..) In short, I bought a car. Good luck to everyone, I highly recommend this platform !!</p>
          <div className='flex gap-2'>
            <a className='text-primaryColor sm:text-[18px] font-semibold text-[16px]' href="#contact">Like</a>
            <a className='text-primaryColor sm:text-[18px] font-semibold text-[16px]' href="#contact">Reply</a>
            <p className='font-semibold opacity-80 text-[16px] sm:text-[17px]'>1584 · 5 hrs</p>
          </div>
        </div>
      </div>
      <div className='flex justify-center mt-10'>
      <button className='bg-primaryColor mx-auto sm:w-3/4 text-secondaryColor px-3 py-2 sm:px-0 sm:py-0 rounded-full text-[20px] sm:text-[48px] font-bold hover:bg-secondaryColor hover:text-primaryColor border-[1px] border-primaryColor flex items-center justify-center hover:duration-300'><a href="#contact">Get Started With AI Arbitrage</a></button>
      </div>
    </section>
  )
}

export default Comments