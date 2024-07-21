import React from "react";
import Counter from "./Counter";

const Form = () => {
  const points = [
    "Pay off their mortgage",
    "Purchase modern cars",
    "To finance their children's education",
    "Quit a demanding job",
    "Provide financial support to their family and friends",
  ];
  return (
    <section id="contact" className="lg:px-[15rem] mt-10 lg:flex gap-5 mb-10">
      <div className="sm:w-1/2">
        <div className="text-[20px] sm:text-[40px] font-bold mb-4">
          Thanks to AI Arbitrage, more than 100,000 Canadians have already been
          able to afford:
        </div>
        <div className="flex flex-col gap-2">
          {points.map((item, index) => (
            <div className="flex gap-2">
              <img src="tick.svg" alt="tick" />
              <p className="text-[16px] sm:text-[20px] sm:font-semibold font-normal opacity-80">{item}</p>
            </div>
          ))}
        </div>
        <div className="flex flex-wrap gap-5 sm:mt-10 items-center justify-center p-10 sm:p-2">
          <img src="investing.webp" alt="" />
          <img src="goggle.webp" alt="" />
          <img src="forbes.webp" alt="" />
        </div>
      </div>
      <div className="sm:w-1/2">
        <div className="bg-primaryColor rounded-t-xl p-4 text-[16px] sm:text-[20px] font-bold text-white">
          Let AI Secure Profits with Prime Arbitrage Opportunities for You!
        </div>
        <form
          action="https://api.web3forms.com/submit" method="POST"
          className="p-4 bg-secondaryColor border-l-[1px] border-r-[1px] border-zinc-300 flex flex-col gap-5"
        >
          <div className="sm:flex gap-3 w-full">
          <div className="flex flex-col gap-2 sm:w-1/2">
          <input type="hidden" name="access_key" value="823402fd-6c42-4c2a-bc71-a6fc442c99a7"/>
            <label htmlFor="first name">First Name</label>
            <input 
            required
            name="First Name"
              type="text"
              className="p-2 border-[1px] border-zinc-300 rounded-full"
            />
          </div>
          <div className="flex flex-col sm:w-1/2 gap-2">
            <label htmlFor="last name">Last Name</label>
            <input
            required
            name="Last Name"
              type="text"
              className="p-2 border-[1px] border-zinc-300 rounded-full"
            />
          </div>
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="first name">Email</label>
            <input
            required
            name="Email"
              type="email"
              className="p-2 border-[1px] border-zinc-300 rounded-full"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="first name">Phone Number</label>
            <input
            required
            name="Phone Number"
              type="number"
              className="p-2 border-[1px] border-zinc-300 rounded-full"
            />
          </div>   
          <div className="flex justify-center">
          <button type="submit" className='bg-primaryColor text-secondaryColor px-5 sm:px-4 sm:py-2  py-2 rounded-full text-[16px] sm:text-[20px] font-bold hover:bg-secondaryColor hover:text-primaryColor border-[1px] border-primaryColor mx-auto w-[100%] hover:duration-300'>Sign Up</button>
          </div>
        </form>
        <div className="text-[18px] opacity-80 font-bold p-4 border-l-[1px] border-r-[1px] border-b-[1px] rounded-b-xl border-zinc-300 text-center">3 Spots Left</div>
      <div className="lg:w-1/2 mx-auto">
        <Counter seconds={1000}/>
      </div>
      </div>

    </section>
  );
};

export default Form;
