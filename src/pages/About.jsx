import React from 'react';
import { useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import FetchData from '../components/FetchData';

const About = () => {
  const { t } = useTranslation(); 
  const path = useLocation();

  const { data, loading } = FetchData('aboutimg');
  
  if (loading || !data || !data.length) {
    return <div>Loading...</div>; 
  }

  return (
    <div className={`${(path.pathname !== '/') ? 'bg-[#f3f4f6]' : ''}`}>
      <div className='container mx-auto px-3 lg:px-0 py-12'>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-y-8 lg:gap-y-0 lg:gap-x-4'>
          
          <div data-aos="fade-up" data-aos-delay={100} data-aos-duration="700">
            <div className='text-[#3C4048] text-[36px] font-semibold'>
              {t('about_us.title')}
            </div>
            <div className='mt-2 text-[#718096] text-justify' data-aos="fade-up" data-aos-delay={200} data-aos-duration="700">
              {t('about_us.content')}
            </div>
          </div>
          
          <div className='h-[50vh] lg:h-full' data-aos="fade-up" data-aos-delay={300} data-aos-duration="700">
            <img src={data[0].image} alt="About us" className="w-full h-full object-cover" />
          </div>

        </div>
      </div>
    </div>
  );
}

export default About;
