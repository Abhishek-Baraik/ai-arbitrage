import React from "react";
import ImageSlider from "./ImageSlider";
const Slider = () => {
  const images = [
    {
      src: "jenifer.webp",
      name: "Jennifer Wilson",
      Invested: "2000 CAD",
      Profit: "1368.23 CAD",
      Review:
        " AI Arbitrage has been a game changer for me. The profits are incredible!",
    },
    {
      src: "elixabeth.webp",
      name: "Elizabeth Brown",
      Invested: "350 CAD",
      Profit: "5236 CAD",
      Review:
        " AI Arbitrage made trading so simple and profitable. My account manager was always ready to help and provide valuable insights. Highly recommend it!",
    },
    {
      src: "brian.webp",
      name: "Brian Scott",
      Invested: "350 CAD",
      Profit: "9278 CAD",
      Review:
        " AI Arbitrage is simply the best. It’s helped me achieve fantastic returns on my investments.",
    },
    {
      src: "devon-lane-profile.webp",
      name: "David Clark",
      Invested: "5000 CAD",
      Profit: "3274.5 CAD",
      Review:
        " The AI Arbitrage method is incredible! It helped me make significant profits quickly and effortlessly. My account manager was always there to support me every step of the wayThe AI Arbitrage method... ",
    },
    {
      src: "christopher.webp",
      name: "Christopher Harris",
      Invested: "374 CAD",
      Profit: "5273 CAD",
      Review:
        " I’ve never seen such quick and easy profits. AI Arbitrage is a must-try for any trader.",
    },
    {
      src: "andrew.webp",
      name: "Andrew Young",
      Invested: "10,000 CAD",
      Profit: "7562.5 CAD",
      Review:
        " Absolutely love AI Arbitrage! It’s efficient, effective, and highly profitable.",
    },
    {
      src: "nancy.webp",
      name: "Nancy Walker",
      Invested: "4,200 CAD",
      Profit: "2940 CAD",
      Review:
        " Amazing! The AI Arbitrage method is the easiest way to earn substantial profits. The assistance from my account manager made a big difference.",
    },
    {
      src: "esther-profile.webp",
      name: "Stephen White",
      Invested: "70,000 CAD",
      Profit: "25,327 CAD",
      Review:
        " Profits have been rolling in thanks to AI Arbitrage. The help from my account manager was crucial in making the most out of my trades. It’s a brilliant method.",
    },
    {
      src: "rabecca.webp",
      name: "Robert Thompson",
      Invested: "350 CAD",
      Profit: "3274 CAD",
      Review:
        " The AI Arbitrage system is fantastic. It’s helped me achieve impressive profits effortlessly.",
    },
    {
      src: "robert.webp",
      name: "Rabecca Hall",
      Invested: "350 CAD",
      Profit: "1,589 CAD",
      Review:
        " This method is so efficient and profitable. My account manager was instrumental in my success. I’m very pleased with the results",
    },
  ];

  return (
    <section className="bg-primaryColor flex flex-col gap-10 mt-20 pb-10 pt-10">
      <div className="flex justify-center items-center flex-col">
        <h2 className="sm:text-[48px] text-[26px] sm:w-1/2 text-white text-center font-bold">
          Become a profitable AI Arbitrage Winner!
        </h2>
        <p className="text-[16px] sm:text-[20px] sm:w-1/2 font-medium text-white text-center">
          People with different professions, were able to boost their income in
          the first day using the AI Arbitrage Method
        </p>
      </div>
      <div>
        <ImageSlider images={images} />
      </div>
      <div className="flex flex-wrap gap-10 justify-center">
        <img src="market-go.svg" width={160} alt="market-go" />
        <img src="cg-wise.webp" width={100} alt="cg-wise" />
        <img src="fargo.svg" alt="fargo" width={160} />
        <img src="stanford.svg" width={130} alt="stanford" />
        <img src="reserve.svg" alt="reserve" width={160} />
      </div>
      <div className="flex justify-center">
        <button className="bg-white text-primaryColor px-5 sm:px-8 sm:py-4  py-2 rounded-full text-[16px] sm:text-[20px] hover:duration-300 font-bold hover:bg-primaryColor hover:text-white border-[1px] border-white">
          <a href="#contact">Join Now!</a>
        </button>
      </div>
    </section>
  );
};

export default Slider;
