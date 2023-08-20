import Image from "next/image";
import Link from "next/link";

const Blogs = () => {
  return (
    <section id="blog" className="pt-10 pb-10">
      <div className="container">
        <div className="flex flex-wrap justify-center">
          <div className="w-full px-4">
            <div className="text-center mx-auto mb-[60px] lg:mb-20 max-w-[510px]">
              <span className="font-semibold text-lg text-primary mb-2 block text-blue">
                Swim Blogs
              </span>
              <h2
                className="
                  font-bold
                  text-3xl
                  sm:text-4xl
                  md:text-[40px]
                  text-dark
                  mb-4
                  ">
                Dive into Our Latest Articles
              </h2>
              <p className="text-base text-body-color text-lightgrey">
                Discover insightful articles about swimming and water activities
                from our expert team.
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-wrap ">
          <div className="w-full md:w-1/2 lg:w-1/3 px-4">
            <div className="max-w-[370px] mx-auto mb-10">
              <div className="rounded overflow-hidden mb-8">
                <img
                  src="https://cdn.tailgrids.com/1.0/assets/images/blogs/blog-01/image-01.jpg"
                  alt="image"
                  className="w-full"
                />
              </div>
              <div>
                <span
                  className="
                     bg-blue                     rounded
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
                  Dec 22, 2023
                </span>
                <h3>Mastering the Perfect Freestyle Stroke</h3>
                <p className="text-base text-body-color">
                  Learn the key techniques to perfect your freestyle swimming
                  stroke.
                </p>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/3 px-4">
            <div className="max-w-[370px] mx-auto mb-10">
              <div className="rounded overflow-hidden mb-8">
                <img
                  src="https://cdn.tailgrids.com/1.0/assets/images/blogs/blog-01/image-02.jpg"
                  alt="image"
                  className="w-full"
                />
              </div>
              <div>
                <span
                  className="
                     bg-blue                     rounded
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
                  Mar 15, 2023
                </span>
                <h3>Staying Safe: Tips for Open Water Swimming</h3>
                <p className="text-base text-body-color">
                  Explore safety guidelines and best practices for open water
                  swimming.
                </p>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/3 px-4">
            <div className="max-w-[370px] mx-auto mb-10">
              <div className="rounded overflow-hidden mb-8">
                <img
                  src="https://cdn.tailgrids.com/1.0/assets/images/blogs/blog-01/image-03.jpg"
                  alt="image"
                  className="w-full"
                />
              </div>
              <div>
                <span
                  className="
                     bg-blue                     rounded
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
                  Jan 05, 2023
                </span>
                <h3>Benefits of Water Aerobics for Fitness</h3>
                <p className="text-base text-body-color">
                  Discover how water aerobics can enhance your fitness routine.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blogs;
