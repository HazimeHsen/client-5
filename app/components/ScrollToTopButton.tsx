"use client";
import { BsWhatsapp } from "react-icons/bs";

export default function ScrollToTopButton() {
  return (
    <div className="fixed bottom-[20px] right-[20px]">
      <a
        target="_blank"
        href="https://api.whatsapp.com/send?phone=96178905718"
        className=" ">
        <div className={`bg-whatsappgreen text-white z-50  p-3 rounded-full`}>
          <BsWhatsapp size={25} />
        </div>
      </a>
    </div>
  );
}
