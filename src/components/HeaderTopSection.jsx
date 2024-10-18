import React from "react";
import { FaRegEnvelopeOpen, FaWhatsapp } from "react-icons/fa";
import { IoCallOutline } from "react-icons/io5";
import { FaFacebookF } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import SelectLang from "./SelectLang";

const HeaderTopSection = (props) => {
  const { i18n, t, handlerLang, selectLang } = props;

  return (
    <div className="bg-[#f3f4f6] py-1 px-2 lg:px-0 hidden md:block">
      <div className="container mx-auto text-black flex items-center justify-between">
        <div className="flex items-center gap-x-4" data-aos="fade-down"
          data-aos-delay={250}
          data-aos-duration="700">
          <a
            href="mailto:info@pek.com.tr"
            className="flex items-center gap-x-2 hover:text-blue-500 transition duration-300"
          >
            <FaRegEnvelopeOpen size={18} />
            <p>info@pek.com.tr</p>
          </a>
          <a
            href="tel:+905525555555"
            className="flex items-center gap-x-2 hover:text-blue-500 transition duration-300"
          >
            <IoCallOutline size={18} />
            <p>+90 552 555 55 55</p>
          </a>
        </div>
        <div className="flex items-center gap-x-4">
        <div className="flex items-center gap-x-2" data-aos="fade-down"
            data-aos-delay={250}
            data-aos-duration="700">
          <a href="https://wa.me/994502070180" target="_blank" rel="noopener noreferrer">
            <FaWhatsapp color="#075E54" size={18} />
          </a>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <FaFacebookF color="#1877F2" size={18} />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <FaInstagram color="#fa7e1e" size={18} />
          </a>
        </div>
          <SelectLang i18n={i18n} t={t} handlerLang={handlerLang} selectLang={selectLang} />
        </div>
      </div>
    </div>
  );
};

export default HeaderTopSection;
