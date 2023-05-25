import React from "react";
import expertise from '../../public/experience.png'
import customerService from '../../public/customer-service.png'
import competitivePricing from '../../public/competitive-pricing.png'

const WhyUs = () => {
  return (
   <div className="mt-20">
    <h1 className="text-center font-bold text-4xl mb-8">Why Choose Us?</h1>
    
     <div className="flex flex-col md:flex-row items-center justify-between gap-4 ">
      <div className="max-w-[350px] h-full shadow-lg p-5 rounded-md">
        <img src={expertise} alt="" />
        <h1 className="font-bold text-xl mb-3">Expertise</h1>
        <p className="text-purple-600">
          Our team has years of experience and training in [relevant
          industry/field], allowing us to provide you with the highest quality
          products/services and personalized solutions.
        </p>
      </div>
      <div className="max-w-[350px] h-full shadow-xl p-5 rounded-md">
        <img src={customerService} alt="" />
        <h1 className="font-bold text-xl mb-3">Customer Service</h1>
        <p className="text-purple-600">
          We believe in building lasting relationships with our clients, which
          is why we go above and beyond to ensure your satisfaction. Our
          friendly and knowledgeable staff are always here to help you with any
          questions or concerns.
        </p>
      </div>
      <div className="max-w-[350px] h-full shadow-lg p-5 rounded-md">
        <img src={competitivePricing} alt="" />
        <h1 className="font-bold text-xl mb-3">Competitive Pricing</h1>
        <p className="text-purple-600">
          We understand that cost is an important factor in your decision-making
          process, which is why we offer competitive pricing that is tailored to
          your specific needs and budget.
        </p>
      </div>
    </div>
   </div>
  );
};

export default WhyUs;
