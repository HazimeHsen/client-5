"use client";
import React, { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";
const About = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true, // Only trigger the animation once
    threshold: 0.2, // Percentage of the element in view
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);
  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={{
        visible: { opacity: 1, y: 0 },
        hidden: { opacity: 0, y: 50 },
      }}
      transition={{ duration: 0.5 }}
      id="about"
      className="py-10 bg-white">
      <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
        <span className="font-semibold text-lg text-center text-primary mb-2 block text-blue">
          About Us
        </span>{" "}
        <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
          <div className="md:5/12 lg:w-5/12">
            <img
              src="https://tailus.io/sources/blocks/left-image/preview/images/startup.png"
              alt="image"
              loading="lazy"
              width=""
              height=""
            />
          </div>
          <div className="md:7/12 lg:w-6/12">
            <h2 className="text-2xl text-gray-900 font-bold md:text-4xl">
              Dive into Excellence with Our Swim Training
            </h2>
            <p className="mt-6 text-gray-600">
              Whether you are a beginner or an experienced swimmer, our
              passionate trainers are here to guide you through every stroke. We
              offer top-notch swim training that caters to all skill levels.
            </p>
            <p className="mt-4 text-gray-600">
              {" "}
              Our commitment to providing effective coaching ensures that you
              master the art of swimming in no time. Join us and experience the
              joy of gliding through the water with confidence and skill.
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default About;
