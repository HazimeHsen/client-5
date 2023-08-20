"use client";
import Link from "next/link";
import Image from "next/image";
import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
interface links {
  link: string;
}

interface socialLinks {
  imgSrc: string;
  link: string;
  width: number;
}

const socialLinks: socialLinks[] = [
  {
    imgSrc: "/assets/footer/facebook.svg",
    link: "www.facebook.com",
    width: 10,
  },
  {
    imgSrc: "/assets/footer/instagram.svg",
    link: "www.instagram.com",
    width: 14,
  },
  {
    imgSrc: "/assets/footer/twitter.svg",
    link: "www.twitter.com",
    width: 14,
  },
];

const links: links[] = [
  {
    link: "Product",
  },
  {
    link: "Pricing",
  },
  {
    link: "Features",
  },
];

const Footer = () => {
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
      className=" bg-midnightblue">
      <div className="mx-auto max-w-2xl pt-4 px-4 sm:px-6 lg:max-w-7xl lg:px-8">
        <div className="flex gap-4 justify-center my-5">
          {socialLinks.map((items, i) => (
            <Link href={items.link} key={i}>
              <div className="socialBg h-12 w-12 shadow-xl text-base rounded-full flex items-center justify-center footer-icons hover:bg-white">
                <Image
                  src={items.imgSrc}
                  alt={items.imgSrc}
                  width={items.width}
                  height={2}
                  className="sepiaa"
                />
              </div>
            </Link>
          ))}
        </div>

        {/* All Rights Reserved */}

        <div className="pt-12 pb-10 lg:flex items-center justify-between border-t border-t-white border-opacity-30">
          <h4 className="text-lg text-center md:text-start font-normal text-white opacity-60">
            @2023 All rights reserved
          </h4>
        </div>
      </div>
    </motion.div>
  );
};

export default Footer;
