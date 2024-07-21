import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { RxCross2 } from "react-icons/rx";
import "./Faqs.css";

const Faqs = () => {
  const faqs = [
    {
      question: "1. How to get started?",
      answer:
        "To get started, simply sign up in the form below. Within a few minutes, you'll receive a call from your dedicated account manager who will guide you through setting up the AI system in less than 5 minutes so you can relax and watch your investments grow effortlessly. Be sure to have your phone nearby and be available within the first 15 minutes after registration to ensure you don't miss the call. ",
    },
    {
      question: "2. Is Arbitrage Legal?",
      answer:
        "Yes, arbitrage is legal in Canada, Europe, and the U.S. Many investors favor this type of trading because it provides liquidity and encourages market efficiency by identifying price discrepancies and fostering price convergence. ",
    },
    {
      question: "3. Do I need trading experience",
      answer:
        "Not at all! AI Arbitrage is designed to be an easy and simple process, even for beginners. Our support agents are available to help you with the setup within minutes. All you have to do is set up the simple AI system with your account manager, and you can start capitalizing on arbitrage opportunities without any prior trading experience.",
    },
    {
      question: "4. Can You Lose Money in Arbitrage?",
      answer:
        "While AI Arbitrage is considered no-risk and the price differences are typically very small, traders have experienced small losses of 0.2% to 0.5% on their investment due to human error. However, these losses are minimal compared to traditional day and swing trading, where traders can lose up to 100% of their investment.",
    },
    {
      question: "5. What makes Arbitrage Low-Risk?",
      answer:
        'Pure, "textbook" arbitrage is considered low- (or no-) risk because it involves buying in one market and selling in another without needing additional capital. The price differences are usually minimal, reducing the risk involved. However, it often involves large-volume trades, leveraged capital, timing variations, and other factors. We highly recommend starting with a minimum $250 initial investment to gain experience and minimize risk as a beginner. The Bottom LineIf all markets were perfectly efficient, there would no longer be any arbitrage opportunities. However, markets are rarely perfect, providing arbitrage traders with numerous opportunities to capitalize on pricing discrepancies. ',
    },
  ];

  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="lg:px-[15rem] accordion flex flex-col  gap-4 sm:gap-6 mb-10 mt-10 paddings">
      <div>
        <h2 className="text-[26px] sm:text-[48px] font-bold text-center">FREQUENTLY ASKED QUESTIONS</h2>
      </div>
      {faqs.map((faq, index) => (
        <div
          className="accordion-item bg-white border-[1px] border-zinc-300 px-4 py-1 sm:px-6 sm:py-2 shadow-md rounded-xl cursor-pointer"
          key={index}
          onClick={() => toggleAccordion(index)}
        >
          <div
            className="accordion-title flex justify-between items-center"
            onClick={() => toggleAccordion(index)}
          >
            <h3 className="text-[16px] sm:text-[20px] font-medium">{faq.question}</h3>
            <span
              className={`arrow text-[#FFFFFF] ${
                activeIndex === index ? "active" : ""
              }`}
            >
              <RxCross2 className="text-primaryColor scale-125 rotate-45" />
            </span>
          </div>
          <AnimatePresence>
            {activeIndex === index && (
              <motion.div
                className="accordion-content mt-4"
                initial={{ height: 0 }}
                animate={{ height: "auto" }}
                exit={{ height: 0 }}
              >
                <p className="text-[16px] font-normal opacity-70 pl-5">{faq.answer}</p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </section>
  );
};

export default Faqs;
