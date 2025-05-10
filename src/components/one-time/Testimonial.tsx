"use client";

import React from "react";
import { motion } from "framer-motion";
import { SlideUp } from "@/animations/animate";
import { InfiniteMovingCards } from "./infinite-moving-cards";

// Testimonial data
const TestimonialData = [
  {
    id: 1,
    name: "Aarav Mehta",
    designation: "President",
    img: "https://i.pravatar.cc/300?img=1",
    text: "Leading the vision with passion and purpose.",
  },
  {
    id: 2,
    name: "Nisha Kapoor",
    designation: "Vice President",
    img: "https://i.pravatar.cc/300?img=2",
    text: "Striving to bring innovation and inclusivity to our community.",
  },
  {
    id: 3,
    name: "Rohan Desai",
    designation: "Vice President",
    img: "https://i.pravatar.cc/300?img=3",
    text: "Committed to empowering the next generation of tech leaders.",
  },
  {
    id: 4,
    name: "Simran Bhatia",
    designation: "Tech Head",
    img: "https://i.pravatar.cc/300?img=4",
    text: "Pushing boundaries with code and creativity.",
  },
  {
    id: 5,
    name: "Aditya Verma",
    designation: "Mass Media Head",
    img: "https://i.pravatar.cc/300?img=5",
    text: "Crafting compelling stories through digital presence.",
  },
  {
    id: 6,
    name: "Meera Iyer",
    designation: "Marketing Lead",
    img: "https://i.pravatar.cc/300?img=6",
    text: "Building bridges between innovation and audience.",
  },
  {
    id: 7,
    name: "Devansh Kulkarni",
    designation: "Creative Director",
    img: "https://i.pravatar.cc/300?img=7",
    text: "Design meets impact when ideas come to life visually.",
  },
  {
    id: 8,
    name: "Priya Nair",
    designation: "Content Strategist",
    img: "https://i.pravatar.cc/300?img=8",
    text: "Words shape perception, and perception drives action.",
  },
  {
    id: 9,
    name: "Karan Joshi",
    designation: "Operations Head",
    img: "https://i.pravatar.cc/300?img=9",
    text: "Execution is where strategy turns into success.",
  },
];

const Testimonial = () => {
  return (
    <section className="py-14" aria-labelledby="testimonial-section">
      {/* heading title */}
      <div className="space-y-4 text-center max-w-[550px] mx-auto mb-8">
        <motion.h1
          variants={SlideUp(0.2)}
          initial="initial"
          whileInView="animate"
          className="text-4xl font-bold font-serif"
          id="testimonial-section"
        >
          Words from our Core Team
        </motion.h1>
        <motion.p
          variants={SlideUp(0.4)}
          initial="initial"
          whileInView="animate"
          className="text-gray-500 text-sm max-w-[350px] mx-auto"
        >
          Get insights and inspiration straight from the leaders driving
          innovation at Hello World Tech.
        </motion.p>
      </div>

      <div className="p-12 rounded-md flex flex-col antialiased bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
        <InfiniteMovingCards
          items={TestimonialData}
          direction="right"
          speed="slow"
        />
      </div>
    </section>
  );
};

export default Testimonial;
