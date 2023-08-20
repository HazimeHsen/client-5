import React from "react";
import { FiRefreshCw } from "react-icons/fi";
import { CgScreen } from "react-icons/cg";
import { FaSwimmer } from "react-icons/fa";
import { IconType } from "react-icons/lib/esm/iconBase";

const People = () => {
  return (
    <section id="services" className="pt-10 pb-10 ">
      <div className="flex flex-wrap">
        <div className="w-full px-4">
          <div className="mx-auto mb-12 max-w-[510px] text-center lg:mb-20">
            <span className="block mb-2 text-lg font-semibold text-blue">
              Our Services
            </span>
            <h2 className="mb-4 text-3xl font-bold text-dark sm:text-4xl md:text-[40px]">
              What We Offer
            </h2>
            <p className="text-base text-body-color text-lightgrey">
              Dive into a range of exceptional services that cater to your
              swimming needs.
            </p>
          </div>
        </div>
      </div>{" "}
      <div className="flex justify-center w-full">
        <div className="grid gap-2 grid-cols-2 md:grid-cols-3 lg:grid-cols-4 place-items-center px-2">
          <ServiceCard
            title="Refreshing Training"
            details="Experience refreshing swim training with our dedicated instructors."
            icon={<FiRefreshCw size={32} />}
          />
          <ServiceCard
            title="Tailored Coaching"
            details="Get personalized swim coaching based on your needs and goals."
            icon={<FaSwimmer size={32} />}
          />
          <ServiceCard
            title="Diverse Programs"
            details="Choose from a variety of swim programs designed for all skill levels."
            icon={<CgScreen size={32} />}
          />
          <ServiceCard
            title="Performance Boost"
            details="Boost your swimming performance with our specialized techniques."
            icon={<CgScreen size={32} />}
          />
          <ServiceCard
            title="Customized Plans"
            details="Get swim plans tailored to your progress and objectives."
            icon={<CgScreen size={32} />}
          />
        </div>
      </div>
    </section>
  );
};

export default People;

interface ServiceCardProps {
  title: string;
  details: string;
  icon: React.ReactNode;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, details, icon }) => {
  return (
    <>
      <div className="w-full h-full flex-grow flex-1 ">
        <div className="rounded-[20px] bg-white h-full p-2 py-4 shadow-lg hover:shadow-xl md:px-7 xl:px-10">
          <div
            className={`mb-5 flex h-[70px] w-full p-3 items-center justify-center rounded-2xl bg-primary`}>
            <div className="p-4 rounded-full bg-blue text-white">{icon}</div>
          </div>
          <div className="text-center">
            <h4 className="mb-3 text-base md:text-xl font-semibold text-dark">
              {title}
            </h4>
            <p className="text-body-color text-xs md:text-base text-lightgrey">
              {details}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
