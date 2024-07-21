import React, { useState } from "react";
import Counter from "./Counter";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

const Form = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const points = [
    "Pay off their mortgage",
    "Purchase modern cars",
    "To finance their children's education",
    "Quit a demanding job",
    "Provide financial support to their family and friends",
  ];

  const handleSubmit = (event) => {
    event.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(event.target);

    // Extract country code and phone number separately
    const countryCode = phoneNumber.substring(0, phoneNumber.length - 10);
    const localPhoneNumber = phoneNumber.substring(phoneNumber.length - 10);

    // Concatenate them with a space or desired separator
    const formattedPhoneNumber = `${countryCode} ${localPhoneNumber}`;
    formData.append("Phone Number", formattedPhoneNumber);

    fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    })
      .then((response) => response.json())
      .then((data) => {
        setFormSubmitted(true);
        setIsSubmitting(false);
      })
      .catch((error) => {
        console.error("Error:", error);
        setIsSubmitting(false);
      });
  };

  const handleClosePopup = () => {
    setFormSubmitted(false);
  };

  return (
    <section id="contact" className="lg:px-[15rem] mt-10 lg:flex gap-5 mb-10">
      {formSubmitted && (
        <div className="popup z-[10] fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white duration-200 ease-in z-100 relative p-8 rounded-lg text-center">
            <h2 className="text-2xl font-bold mb-4">Form Submitted Successfully</h2>
            <p className="mb-4">We will get to you soon.</p>
            <button
              onClick={handleClosePopup}
              className="bg-primaryColor text-white px-4 py-2 rounded-full"
            >
              Close
            </button>
          </div>
        </div>
      )}
      <div className="sm:w-1/2">
        <div className="text-[20px] sm:text-[40px] font-bold mb-4">
          Thanks to AI Arbitrage, more than 100,000 Canadians have already been able to afford:
        </div>
        <div className="flex flex-col gap-2">
          {points.map((item, index) => (
            <div className="flex gap-2" key={index}>
              <img src="tick.svg" alt="tick" />
              <p className="text-[16px] sm:text-[20px] sm:font-semibold font-normal opacity-80">
                {item}
              </p>
            </div>
          ))}
        </div>
        <div className="flex flex-wrap gap-5 sm:mt-10 items-center justify-center p-10 sm:p-2">
          <img src="investing.webp" alt="Investing" />
          <img src="goggle.webp" alt="Goggle" />
          <img src="forbes.webp" alt="Forbes" />
        </div>
      </div>
      <div className="sm:w-1/2">
        <div className="bg-primaryColor rounded-t-xl p-4 text-[16px] sm:text-[20px] font-bold text-white">
          Let AI Secure Profits with Prime Arbitrage Opportunities for You!
        </div>
        <form
          action="https://api.web3forms.com/submit"
          method="POST"
          className="p-4 bg-secondaryColor border-l-[1px] border-r-[1px] border-zinc-300 flex flex-col gap-5"
          onSubmit={handleSubmit}
        >
          <input
            type="hidden"
            name="access_key"
            value="823402fd-6c42-4c2a-bc71-a6fc442c99a7"
          />
          <div className="sm:flex gap-3 w-full">
            <div className="flex flex-col gap-2 sm:w-1/2">
              <label htmlFor="first_name">First Name</label>
              <input
                required
                name="First Name"
                type="text"
                className="p-2 border-[1px] border-zinc-300 rounded-full"
              />
            </div>
            <div className="flex flex-col sm:w-1/2 gap-2">
              <label htmlFor="last_name">Last Name</label>
              <input
                required
                name="Last Name"
                type="text"
                className="p-2 border-[1px] border-zinc-300 rounded-full"
              />
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="email">Email</label>
            <input
              required
              name="Email"
              type="email"
              className="p-2 border-[1px] border-zinc-300 rounded-full"
            />
          </div>
          <div className="flex flex-col gap-2 w-full">
            <label htmlFor="phone_number">Phone Number</label>
            <PhoneInput
              className="rounded-full"
              country={"ca"}
              value={phoneNumber}
              onChange={(phone) => setPhoneNumber(phone)}
              inputProps={{
                name: "Phone Number",
                required: true,
              }}
            />
          </div>
          <div className="flex justify-center">
            <button
              type="submit"
              className="bg-primaryColor text-secondaryColor px-5 sm:px-4 sm:py-2 py-2 rounded-full text-[16px] sm:text-[20px] font-bold hover:bg-secondaryColor hover:text-primaryColor border-[1px] border-primaryColor mx-auto w-[100%] hover:duration-300"
            >
              {isSubmitting ? "Signing In..." : "Sign Up"}
            </button>
          </div>
        </form>
        <div className="text-[18px] opacity-80 font-bold p-4 border-l-[1px] border-r-[1px] border-b-[1px] rounded-b-xl border-zinc-300 text-center">
          3 Spots Left
        </div>
        <div className="lg:w-1/2 mx-auto">
          <Counter seconds={1000} />
        </div>
      </div>
    </section>
  );
};

export default Form;
