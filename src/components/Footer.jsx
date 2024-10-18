import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';

const Footer = () => {
  const { t, i18n } = useTranslation()
  return (
    <footer className="bg-gray-100 text-gray-800 py-10 px-3 lg:px-0 border-t">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* Şirket Hakkında */}
        <div>
          <h2 className="text-xl font-bold mb-4">{t('title')}</h2>
          <p className="text-gray-600 mb-4">
            {t('description')}
          </p>
          <div>
            {/* <img src="" alt={t('title')} className="w-32" /> */}
            <span>{t('title')}</span>
          </div>
        </div>

        {/* Hızlı Bağlantılar */}
        <div className='md:text-center'>
          <h2 className="text-xl font-bold mb-4">{t('quick_links')}</h2>
          <ul className="space-y-2">
            <li><Link to="/" className="text-gray-600 hover:text-gray-900 transition">{t('homepage')}</Link></li>
            <li><Link to="/about" className="text-gray-600 hover:text-gray-900 transition">{t('aboutpage')}</Link></li>
            <li><Link to="/projects" className="text-gray-600 hover:text-gray-900 transition">{t('projectspage')}</Link></li>
            <li><Link to="/blog" className="text-gray-600 hover:text-gray-900 transition">{t('blogpage')}</Link></li>
            <li><Link to="/contact" className="text-gray-600 hover:text-gray-900 transition">{t('contactpage')}</Link></li>
          </ul>
        </div>

        {/* Sosyal Medya */}
        <div>
          <h2 className="text-xl font-bold mb-4">{t('follow_us')}</h2>
          <div className="flex space-x-4">
            <a href="https://facebook.com" className="text-gray-600 hover:text-blue-600 transition">
              <FaFacebookF size={24} />
            </a>
            <a href="https://twitter.com" className="text-gray-600 hover:text-blue-400 transition">
              <FaTwitter size={24} />
            </a>
            <a href="https://linkedin.com" className="text-gray-600 hover:text-blue-700 transition">
              <FaLinkedinIn size={24} />
            </a>
            <a href="https://instagram.com" className="text-gray-600 hover:text-pink-500 transition">
              <FaInstagram size={24} />
            </a>
          </div>
        </div>
      </div>
      
      {/* Copyright Bölümü */}
      <div className="text-center text-gray-500 mt-8">
        <p>&copy; {t('copyright')}</p>
      </div>
    </footer>
  );
};

export default Footer;
