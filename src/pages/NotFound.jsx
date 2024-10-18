import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { FaHome } from 'react-icons/fa';
import gsap from 'gsap';

const NotFound = () => {
  const headingRef = useRef(null);
  const textRef = useRef(null);
  const buttonRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline();

    // 404 başlığını büyüyerek getirme efekti
    tl.fromTo(
      headingRef.current,
      { scale: 0.5, opacity: 0 },
      { scale: 1, opacity: 1, duration: 1, ease: 'bounce.out' }
    )
    // Açıklama metni fade in efekti
    .fromTo(
      textRef.current,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 1, ease: 'power3.out' },
      '-=0.5'
    )
    // Butonun sol sağ hareketi ve fade in efekti
    .fromTo(
      buttonRef.current,
      { x: -100, opacity: 0 },
      { x: 0, opacity: 1, duration: 1, ease: 'power3.out' },
      '-=0.5'
    );
  }, []);

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-100">
      <div className="text-center">
        {/* 404 Başlığı */}
        <h1 ref={headingRef} className="text-9xl font-bold text-gray-800 mb-4">
          404
        </h1>
        <h2 ref={textRef} className="text-2xl md:text-3xl font-semibold text-gray-600 mb-8">
          Oops! Page not found
        </h2>
        <p className="text-gray-500 mb-12">
          The page you're looking for doesn't exist. It might have been moved or deleted.
        </p>

        {/* Anasayfa Butonu */}
        <Link
          ref={buttonRef}
          to="/"
          className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md text-lg inline-flex items-center transition duration-300"
        >
          <FaHome className="mr-2" />
          Back to Home
        </Link>
      </div>

      {/* Animasyonlu 404 Elemanları */}
      <div className="absolute top-0 left-0 right-0 bottom-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[20%] left-[10%] w-24 h-24 bg-blue-500 rounded-full blur-xl opacity-30 animate-bounce-slow"></div>
        <div className="absolute top-[50%] right-[15%] w-32 h-32 bg-pink-500 rounded-full blur-xl opacity-30 animate-bounce-slow"></div>
        <div className="absolute bottom-[20%] left-[20%] w-16 h-16 bg-yellow-500 rounded-full blur-xl opacity-30 animate-bounce-slow"></div>
      </div>
    </div>
  );
};

export default NotFound;
