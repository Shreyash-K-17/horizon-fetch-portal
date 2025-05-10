"use client";

import React from "react";
import Banner1 from "../../assets/banner2.png";
import { motion } from "framer-motion";
import { SlideUp } from "@/animations/animate";
import Image from "next/image";

const Banner2 = () => {
  return (
    <section className="container py-14">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Text section */}
        <div className="space-y-5 xl:max-w-[500px]">
          <motion.h2
            variants={SlideUp(0.2)}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="text-4xl font-bold font-serif"
          >
            Simple way to make stylish living room
          </motion.h2>
          <motion.p
            variants={SlideUp(0.4)}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="text-gray-500 text-sm leading-7"
          >
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit
            earum accusantium tempore nam aliquid.
          </motion.p>
          <motion.div
            variants={SlideUp(0.6)}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="flex gap-6"
          >
            {[
              { value: "15", label: "Years of Experience" },
              { value: "350", label: "Happy Clients" },
              { value: "34", label: "Award Gained" },
            ].map((stat, idx) => (
              <motion.div
                key={idx}
                className="max-w-[80px] space-y-2"
                variants={SlideUp(0.6 + idx * 0.1)}
              >
                <p className="text-3xl font-bold font-serif">{stat.value}</p>
                <p className="text-gray-500 text-sm">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
          <motion.button
            variants={SlideUp(0.9)}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="primary-btn bg-black text-white shadow-[5px_5px_0px_0px_#6c6c6c]"
          >
            Contact Us
          </motion.button>
        </div>

        {/* Image section */}
        <div className="flex justify-center">
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <Image
              src={Banner1}
              alt="Stylish living room"
              className="w-[95%] md:w-full mx-auto"
              placeholder="blur"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Banner2;
