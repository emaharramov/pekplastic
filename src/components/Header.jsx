import React, { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import SelectLang from './SelectLang';
import { useTranslation } from "react-i18next";
import HeaderTopSection from "./HeaderTopSection";
import { useLocation } from 'react-router-dom';
import { FaFacebookF, FaInstagram, FaWhatsapp } from "react-icons/fa";

const Header = () => {

  const { t, i18n } = useTranslation()
  let location = useLocation();
  const [show, setShow] = useState(false);
  const [selectLang, setSelectLang] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [menuFixed, setMenuFixed] = useState(false)
  const path = useLocation()

  function handlerMenu() {
    setShow(!show);
  }

  function closeMenu() {
    setShow(false);
  }

  function windScroll () {
    if (window.scrollY >= 42) {
      setMenuFixed(true)
    }
  }

  function handlerLang() {
    setSelectLang(!selectLang);
  }

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
      if (window.innerWidth > 768) {
        setShow(false);
      }
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <header className={`${(path.pathname === '/') ? 'bg-[#333] text-white' : 'bg-gray-600 text-[#f3f4f6]'}`}>
      {show && (
        <div
          className="fixed top-0 left-0 w-full h-full bg-gray-500 bg-opacity-50 backdrop-blur-sm z-5"
          onClick={closeMenu}
        ></div>
      )}

      <div
        className={`z-[100] mobile bg-slate-500 ${show ? "left-0" : "left-[-70%]"
          } fixed top-0 text-white w-[70%] h-full z-10 transition-all duration-300 ease-in-out`}>
        <div className="flex justify-between items-center px-3 py-6">
          <h2 className="text-lg"></h2>
          <button onClick={closeMenu} className="text-3xl">
            &times;
          </button>
        </div>

        <div className="text-[1.1em] px-1">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "block py-2 pl-4 text-gray-700 border-gray-300"
                : "block py-2 pl-4 text-white hover:bg-gray-700 rounded transition duration-300 ease-in-out"
            }
            onClick={closeMenu}
          >
            {t('homepage')}

          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive
                ? "block py-2 pl-4 text-gray-700 border-gray-300"
                : "block py-2 pl-4 text-white hover:bg-gray-700 rounded transition duration-300 ease-in-out"
            }
            onClick={closeMenu}
          >
            {t('aboutpage')}
          </NavLink>


          <NavLink
            to="/projects"
            className={({ isActive }) =>
              isActive
                ? "block py-2 pl-4 text-gray-700 border-gray-300"
                : "block py-2 pl-4 text-white hover:bg-gray-700 rounded transition duration-300 ease-in-out"
            }
            onClick={closeMenu}
          >
            {t('projectspage')}
          </NavLink>

          <NavLink
            to="/blog"
            className={({ isActive }) =>
              isActive
                ? "block py-2 pl-4 text-gray-700 border-gray-300"
                : "block py-2 pl-4 text-white hover:bg-gray-700 rounded transition duration-300 ease-in-out"
            }
            onClick={closeMenu}
          >
            {t('blogpage')}
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive
                ? "block py-2 pl-4 text-gray-700 border-gray-300"
                : "block py-2 pl-4 text-white hover:bg-gray-700 rounded transition duration-300 ease-in-out"
            }
            onClick={closeMenu}
          >
            {t('contactpage')}
          </NavLink>
          <div className="pl-4 mt-2">
            <div className="flex items-center gap-x-4">
              <Link to={'whatsapp.com'}>
                <FaWhatsapp color="#075E54" size={22} />
              </Link>
              <Link to={'facebook.com'}>
                <FaFacebookF color="#1877F2" size={22} />
              </Link>
              <Link to={'instagram.com'}>
                <FaInstagram color="#fa7e1e" size={22} />
              </Link>
            </div>
          </div>
          <SelectLang handlerLang={handlerLang} selectLang={selectLang} i18n={i18n} t={t} />
        </div>
      </div>

      <HeaderTopSection handlerLang={handlerLang} selectLang={selectLang} i18n={i18n} t={t} />
      <div className={`${(location.pathname == '/') ? 'absolute w-full' : ''} `}>
        <div className={`backdrop-blur-md px-3 lg:px-0 py-6 ${menuFixed ? 'fixed w-full' : 'sticky'} z-10`}>
          <div className="container mx-auto flex justify-between items-center">
            <div className="text-2xl font-bold">
              <NavLink to="/" className="text-white hover:text-gray-300">
                PEK Plastic
              </NavLink>
            </div>

            {/* Desktop Navigation */}
            <nav>
              <ul className="space-x-6 hidden md:flex">
                <li data-aos="fade-right"
                data-aos-delay={50}
                data-aos-duration="700">
                  <NavLink
                    to="/"
                    className={({ isActive }) =>
                      isActive
                        ? "text-gray-300 border-b-2 border-gray-300"
                        : "hover:text-gray-300 transition duration-300"
                    }
                  >
                    {t('homepage')}
                  </NavLink>
                </li>
                <li data-aos="fade-right"
                data-aos-delay={100}
                data-aos-duration="700">
                  <NavLink
                    to="/about"
                    className={({ isActive }) =>
                      isActive
                        ? "text-gray-300 border-b-2 border-gray-300"
                        : "hover:text-gray-300 transition duration-300"
                    }
                  >
                    {t('aboutpage')}
                  </NavLink>
                </li>
                <li data-aos="fade-right"
                data-aos-delay={150}
                data-aos-duration="700">
                  <NavLink
                    to="/projects"
                    className={({ isActive }) =>
                      isActive
                    ? "text-gray-300 border-b-2 border-gray-300"
                        : "hover:text-gray-300 transition duration-300"
                    }
                  >
                    {t('projectspage')}
                  </NavLink>
                </li>
                <li data-aos="fade-right"
                data-aos-delay={200}
                data-aos-duration="700">
                  <NavLink
                    to="/blog"
                    className={({ isActive }) =>
                      isActive
                        ? "text-gray-300 border-b-2 border-gray-300"
                        : "hover:text-gray-300 transition duration-300"
                    }
                  >
                    {t('blogpage')}
                  </NavLink>
                </li>
                <li data-aos="fade-right"
                data-aos-delay={250}
                data-aos-duration="700">
                  <NavLink
                    to="/contact"
                    className={({ isActive }) =>
                      isActive
                        ? "text-gray-300 border-b-2 border-gray-300"
                        : "hover:text-gray-300 transition duration-300"
                    }
                  >
                    {t('contactpage')}
                  </NavLink>
                </li>
              </ul>

              {/* Mobile Menu Button */}
              <p onClick={handlerMenu} className="cursor-pointer md:hidden">
                <svg
                  className="w-6 h-6 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  ></path>
                </svg>
              </p>
            </nav>
          </div>

        </div>
      </div>
    </header>
  );
};

export default Header;
