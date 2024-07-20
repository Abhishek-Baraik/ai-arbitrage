import React from "react";

const Success = () => {
  return (
    <section className="sm:px-[15rem] flex flex-col gap-5 sm:gap-10">
      <div className="text-center flex flex-col gap-2">
        <h2 className="text-[26px] sm:text-[48px] font-bold">Real success stories</h2>
        <p className="text-[16px] sm:text-[22px] sm:px-10 font-medium opacity-80">
          These testimonials highlight how AI Automated Arbitrage can lead to
          significant positive changes in the lives of many canadian families.
        </p>
      </div>
      <div className="flex flex-col sm:flex-row gap-5 sm:gap-8">
        <div className="">
          <video
            className="rounded-t-lg sm:rounded-t-xl"
            autoPlay
            muted
            playsInline
            controls
          >
            <source src="melani.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="p-4 flex items-center justify-center rounded-b-lg bg-zinc-300 uppercase font-semibold">
            Melani From Toronto
          </div>
        </div>
        <div className="">
          <video
            className="rounded-t-lg sm:rounded-t-xl"
            autoPlay
            muted
            playsInline
            controls
          >
            <source src="alex.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="p-4 flex items-center justify-center bg-zinc-300 rounded-b-lg uppercase font-semibold">
            alex from hamilton
          </div>
        </div>
        <div className="">
          <video
            className="rounded-t-lg sm:rounded-t-xl"
            autoPlay
            muted
            playsInline
            controls
          >
            <source src="lilly.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="p-4 flex items-center justify-center rounded-b-lg bg-zinc-300 uppercase font-semibold">
           lilly from montreal
          </div>
        </div>
      </div>
    </section>
  );
};

export default Success;
