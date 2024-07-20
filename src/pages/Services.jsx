import React from "react";
import { motion } from "framer-motion";
import Accordion from "./Accordion";
import merchandize from "../assets/icons/merchandize.png";
import electronics from "../assets/images/electronics.png";
import vehicles from "../assets/images/vehicles.png";
import milestones from "../assets/images/milestones.png";
import domains from "../assets/images/domains.png";
import jewels from "../assets/images/jewels.png";
import freelancer from "../assets/images/frelancer.png";
import fashion from "../assets/images/fashion.png";

const Services = () => {
  const accordionItems = [
    {
      title: "General Merchandize",
      content:
        "From computer hardware to luxury goods, you can safely and easily buy and sell merchandise all over the world with the protection of SafeTra",
      imageUrl: merchandize,
    },
    {
      title: "Electronics",
      content:
        "SafeTra handles the buying and selling large scale computer setups, professional sound systems and all manner of electronic equipment both big and small.",
      imageUrl: electronics,
    },
    {
      title: "Milestone Transactions",
      content:
        "Paying for a good or service and want money released only at certain stages? Use Escrow to assure that money is released only when you're happy with each step.",
      imageUrl: milestones,
    },
    {
      title: "Vehicles",
      content:
        "When buying classic cars, a used sailboat or even an aircraft engine Escrow.com ensures money transfer and vehicle delivery with every sale. Our experienced personnel can even help you with shipping documentation, titles, liens and more.",
      imageUrl: vehicles,
    },
    {
      title: "Domain Names",
      content:
        "SafeTra is the recommended payment method for the buying & selling of domain names, with transactions including uber.com, snapchat.com, spacex.com, twitter.com, instagram.com, freelancer.com, gmail.com, slack.com, wechat.com, chrome.com and wordpress.com.",
      imageUrl: domains,
    },
    {
      title: "Jewelry, Watches",
      content:
        "Buying and selling expensive jewelry online can be difficult, as it is extremely difficult to spot a scam. Escrow.com's simple 5-step process ensures money transfer and jewelry delivery with every sale.",
      imageUrl: jewels,
    },
    {
      title: "Freelancing",
      content:
        "Easiest way to get paid for your digital skills without getting scammed is using Safetra for safer transactions",
      imageUrl: freelancer,
    },
    {
      title: "Fashion",
      content:
        "Buy and sell designers with peace of mind. safer transactions can only be guaranteed on Safetra",
      imageUrl: fashion,
    },
  ];

  return (
    <>
      <section className="bg-services-bg bg- flex flex-col items-center justify-center min-h-screen">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-6xl font-bold mb- text-center"
        >
          Explore Our Secure
          <br />
          Escrow Services
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-gray-600 text-xl text-center mb-8 mt-8"
        >
          For Buyers and Sellers: safeTra Keeps Your Transactions Safe
        </motion.p>
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="bg-[#48C5D5;] text-white px-6 py-3 rounded hover:bg-[#07d2ed]"
        >
          Get Started
        </motion.button>
        <div className="container mx-auto px-4 py-10 md:w-[70%] w-full">
          <Accordion items={accordionItems} />
        </div>
      </section>
    </>
  );
};

export default Services;
