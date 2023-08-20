"use client";
import React, { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";

interface BlogCardProps {
  date: string;
  title: string;
  imageSrc: string;
  content: string;
}
interface blog {
  blog: BlogCardProps;
}
const BlogCard: React.FC<blog> = ({ blog }) => {
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
      className="w-full md:w-1/2 lg:w-1/3 px-4">
      <div className="max-w-[370px] mx-auto mb-10">
        <div className="rounded overflow-hidden mb-8">
          <img src={blog.imageSrc} alt="image" className="w-full" />
        </div>
        <div>
          <span
            className="
             bg-blue
             rounded
             inline-block
             text-center
             py-1
             px-4
             text-xs
             leading-loose
             font-semibold
             text-white
             mb-5
             ">
            {blog.date}
          </span>
          <h3>{blog.title}</h3>
          <p className="text-base text-body-color">{blog.content}</p>
        </div>
      </div>
    </motion.div>
  );
};

export default BlogCard;
