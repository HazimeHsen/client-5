import Image from "next/image";

const SwimBanner = () => {
  return (
    <div className="bg-header">
      <div className="mx-auto max-w-7xl sm:pb-24 h-screen flex items-center justify-center px-6">
        <div className="lg:flex items-center justify-between">
          <div className="col-span-7 flex flex-col just relative lg:max-w-[60%]">
            <Image
              src="/assets/banner/star.svg"
              alt="star-image"
              width={95}
              height={97}
              className="absolute top-[-74px] right-[51px]"
            />
            <Image
              src="/assets/banner/lineone.svg"
              alt="line-image"
              width={190}
              height={148}
              className="absolute top-[-74px] right-[51px]"
            />
            <h1 className="text-midnightblue text-4xl md:text-85xl text-center lg:text-start font-semibold lh-133 pt-5">
              Discover the joy of swimming.
            </h1>
            <h3 className="text-black opacity-75 text-lg font-normal text-center lg:text-start pt-8">
              Experience the freedom of gliding through crystal-clear water and
              embrace the world of swimming with our expert trainers.
            </h3>
            <div className="pt-8 mx-auto lg:mx-0">
              <button className="text-white text-xl font-medium py-6 px-12 rounded-full transition duration-150 ease-in-out bg-electricblue hover:text-white hover:bg-blue">
                Get started
              </button>
            </div>
          </div>
          <div className="lg:block hidden">
            <Image
              src="/assets/banner/banner.jpeg"
              alt="nothing"
              width={400}
              height={805}
              className="rounded-lg object-contain max-w-[400px]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SwimBanner;
