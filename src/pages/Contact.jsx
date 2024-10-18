import React, { useState } from "react";
import emailjs from "emailjs-com";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { useTranslation } from "react-i18next";
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import { useLocation } from "react-router-dom";

const Contact = () => {
  const path = useLocation()
  const { t, i18n } = useTranslation()

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    phone: ""
  });

  const [loading, setLoading] = useState(false);

  const getPhoneInputCountry = () => {
    switch (i18n.language) {
      case 'tr':
        return 'tr';
      case 'ru':
        return 'ru';
      case 'en':
      default:
        return 'us';
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handlePhoneChange = (value) => {
    setFormData({
      ...formData,
      phone: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setLoading(true);
    toast.info(t('buttonLabelSending'));

    emailjs
      .send(
        "service_vmkj39a",
        "template_7lj08ke",
        formData,
        "lx9SugzHL6k6SkE4o"
      )
      .then(
        (response) => {
          toast.success(t('sendMessage'));
          setLoading(false);
        },
        (err) => {
          toast.error(t('messageLabel'));
          setLoading(false);
        }

      )
      ;

    setFormData({
      name: "",
      email: "",
      message: "",
      phone: ""
    });
  };

  return (
    <div className={`${path.pathname === '/' ? '' : path.pathname === '/contact' ? 'bg-[#f3f4f6]' : ''} py-12`}>
      <div className="container mx-auto">
        <ToastContainer autoClose={1500} />

        <div className="flex flex-col lg:flex-row gap-8">

          <div className="w-full lg:w-1/2 bg-white p-6 shadow-lg rounded-lg" data-aos="fade-up"
            data-aos-delay={100}
            data-aos-duration="700">
            <h2 className="text-3xl font-bold text-[#3C4048] mb-4">{t('contactHeader')}</h2>
            <p className="text-gray-600 mb-4">{t('contactDescription')}</p>
            <ul className="text-gray-600 mb-6">
              <li className="mb-2 flex items-center">
                <span className="mr-2 text-blue-600">
                  <i className="fas fa-phone"></i>
                </span>
                +90 552 555 55 55
              </li>
              <li className="mb-2 flex items-center">
                <span className="mr-2 text-blue-600">
                  <i className="fas fa-envelope"></i>
                </span>
                info@pek.com.tr
              </li>
            </ul>

            {/* Google Maps Embed */}
            <iframe
              title="map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3155.2180420904446!2d28.80892781568614!3d41.02474222452969!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14caa4441c579e89%3A0x2ef896b9f5de2ec0!2sDelta%20Plastik%20%C4%B0n%C5%9F.San.Tic.Ltd.%C5%9Eti.!5e0!3m2!1str!2str!4v1646329352321!5m2!1str!2str"
              className="w-full h-64 border-0"
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>

          {/* Right Column: Contact Form */}
          <div className="w-full lg:w-1/2 bg-white p-6 shadow-lg rounded-lg" data-aos="fade-up"
            data-aos-delay={100}
            data-aos-duration="700">
            <h2 className="text-3xl font-bold text-[#3C4048] mb-4">{t('sendMessage')}</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div >
                <label htmlFor="name" className="block text-gray-600">{t('nameLabel')}</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full p-3 border border-gray-300 rounded"
                  placeholder={t('nameLabel')}
                  value={formData.name}
                  onChange={handleInputChange}
                  disabled={loading}
                  required
                />
              </div>
              <div >
                <label htmlFor="email" className="block text-gray-600">{t('emailLabel')}</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full p-3 border border-gray-300 rounded"
                  placeholder={t('emailLabel')}
                  value={formData.email}
                  onChange={handleInputChange}
                  disabled={loading}
                  required
                />
              </div>
              <div
              >
                <label htmlFor="phone" className="block text-gray-600">{t('phoneLabel')}</label>
                <PhoneInput
                  country={getPhoneInputCountry()}
                  value={formData.phone}
                  onChange={handlePhoneChange}
                  inputProps={{
                    name: 'phone',
                    required: true,
                    autoFocus: true,
                  }}
                  disabled={loading}
                  className="w-full"
                />
              </div>
              <div
              >
                <label htmlFor="message" className="block text-gray-600">{t('messageLabel')}</label>
                <textarea
                  id="message"
                  name="message"
                  className="w-full p-3 border border-gray-300 rounded"
                  placeholder={t('messageLabel')}
                  rows="4"
                  value={formData.message}
                  onChange={handleInputChange}
                  disabled={loading}
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-gray-600 text-white py-3 rounded hover:bg-green-700 transition duration-300"
                disabled={loading}
              >
                {loading ? t('buttonLabelSending') : t('buttonLabelSend')}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
