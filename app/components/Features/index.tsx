"use client";
import Image from "next/image";
import Link from "next/link";
import BlogCard from "./BlogCard";
import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
const blogData = [
  {
    date: "Dec 22, 2023",
    title: "Mastering the Perfect Freestyle Stroke",
    imageSrc:
      "https://cdn.tailgrids.com/1.0/assets/images/blogs/blog-01/image-01.jpg",
    content:
      "Learn the key techniques to perfect your freestyle swimming stroke.",
  },
  {
    date: "Mar 15, 2023",
    title: "Staying Safe: Tips for Open Water Swimming",
    imageSrc:
      "https://cdn.tailgrids.com/1.0/assets/images/blogs/blog-01/image-02.jpg",
    content:
      "Explore safety guidelines and best practices for open water swimming.",
  },
  {
    date: "Jan 05, 2023",
    title: "Benefits of Water Aerobics for Fitness",
    imageSrc:
      "https://cdn.tailgrids.com/1.0/assets/images/blogs/blog-01/image-03.jpg",
    content: "Discover how water aerobics can enhance your fitness routine.",
  },
];

const Blogs = () => {
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
    <motion.section
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={{
        visible: { opacity: 1, y: 0 },
        hidden: { opacity: 0, y: 50 },
      }}
      transition={{ duration: 0.5 }}
      id="blog"
      className="pt-10 pb-10">
      <div className="container">
        <div className="flex flex-wrap justify-center">
          <div className="w-full px-4">
            <div className="text-center mx-auto mb-[60px] lg:mb-20 max-w-[510px]">
              <span className="font-semibold text-lg text-primary mb-2 block text-blue">
                Swim Blogs
              </span>
              <h2 className="mb-4 text-3xl font-bold text-dark sm:text-4xl md:text-[40px]">
                Dive into Our Latest Articles
              </h2>
              <p className="text-base text-body-color text-lightgrey">
                Discover insightful articles about swimming and water activities
                from our expert team.
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-wrap">
          {blogData.map((blog, index) => (
            <BlogCard blog={blog} key={index} />
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Blogs;
