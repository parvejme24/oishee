import React from "react";
import image from "../../../assets/images/sabiha 1.png";

const AboutMe = () => {
  return (
    <div id="about" className="border border-dashed border-y-2 border-[#00008870] py-24">
      <div className="container mx-auto px-2 lg:px-0 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-center">
        <div className="flex justify-center items-center">
          <img data-aos="fade" className="rounded-lg" src={image} alt="" />
        </div>
        <div data-aos="fade" className="lg:col-span-2">
          <h2 className="text-5xl font-bold text-[#000088]">About Me</h2>
          <hr className="h-1 bg-[#000088] w-56 mt-2" />
          <p className="mt-8 text-[18px]">
            Sabiha Mehzabin Oishee is a lawyer, teacher and a social activist
            based in Dhaka. She is the founder of Bangladesh forum for Legal and
            Humanitarian Affairs, and through her NGO, that she founded in 2019,
            she has educated more than 10,000 people regarding their legal
            rights and rights of access to justice. She is also the Founder and
            CEO of GoProbono, a free legal application that helps promote access
            to justice in Bangladesh. Sabiha Mehzabin Oishee is the first woman
            in Bangladesh to be awarded the DLA Piper Global Scholarship from
            the noted law firm DLA Piper. Additionally, she is also the
            recipient of honors like, the ‘Lex Falcon Global Awards’ and ‘USAID
            Student Fellowship Award’. She is currently teaching at a notable
            private university in Bangladesh.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
