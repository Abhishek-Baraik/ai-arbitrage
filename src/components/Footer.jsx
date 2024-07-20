import React from 'react'

const Footer = () => {
  return (
    <footer className='bg-primaryColor p-4 sm:px-[15rem] flex flex-col gap-5'>
        <div className='flex flex-col justify-center items-center text-center gap-4'>
            <img src="logo.webp" alt="" className='w-[250px] mt-8' />
            <p className='text-[16px] sm:text-[17px] text-white'>Empowering Your Financial Future with Intelligent Investments</p>
        </div>
        <div>
            <p className='text-[18px] font-bold text-white text-center mt-7'>Disclaimer</p>
            <p className='text-[17px] font-normal mt-5 text-white text-center'>This website is not a news agency, information website, or blog. It is a webpage aimed at promotional publications that use the technique of storytelling to illustrate the scope of the services and products offered. Therefore, the story told on this page is an infomercial or advertisement for informational and functional purposes, for an understanding of the potential of what is proposed general, risk warning. Investing activities involve a high level of risk and may result in the total loss of the amount invested. For this reason, these activities may not be suitable for every type of investor. You should not invest money that you cannot afford to lose.</p>
        </div>
        <div className='flex flex-col sm:flex-row sm:justify-between mt-5 mb-5'>
            <p className='text-[16px] font-normal text-white text-center'><a href="#privacy">Privacy Policy</a> | <a href="#conditions">Conditions</a></p>
            <p className='text-[16px] font-normal text-white text-center'><a href="#report">Report Abuse/Spam</a> | Copyright@2024</p>
        </div>
    </footer>
  )
}

export default Footer