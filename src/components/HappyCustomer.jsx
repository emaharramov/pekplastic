import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { useInView } from 'react-intersection-observer';
import { FaSmile, FaProjectDiagram, FaGlobe } from 'react-icons/fa'; 
import { t } from 'i18next';
import { useTranslation } from 'react-i18next';

const HappyCustomer = () => {
  const customerRef = useRef(null);
  const projectsRef = useRef(null);
  const exportRef = useRef(null);

  const { t } = useTranslation(); 
  const { ref: sectionRef, inView } = useInView({
    triggerOnce: true,
    threshold: 0,
  });

  useEffect(() => {
    if (inView) {
      // GSAP ile sayıları animasyonlu olarak artırıyoruz
      gsap.to(customerRef.current, {
        innerText: 645, 
        duration: 5, 
        ease: "power1.out",
        snap: { innerText: 1 },
        onUpdate: function () {
          customerRef.current.innerHTML = Math.ceil(this.targets()[0].innerText); 
        }
      });

      gsap.to(projectsRef.current, {
        innerText: 164,
        duration: 5, 
        ease: "power1.out",
        snap: { innerText: 1 },
        onUpdate: function () {
          projectsRef.current.innerHTML = Math.ceil(this.targets()[0].innerText);
        }
      });

      gsap.to(exportRef.current, {
        innerText: 99,
        duration: 2, 
        ease: "power1.out",
        snap: { innerText: 1 },
        onUpdate: function () {
          exportRef.current.innerHTML = Math.ceil(this.targets()[0].innerText);
        }
      });
    }
  }, [inView]);

  return (
    <div ref={sectionRef} className="grid grid-cols-1 md:grid-cols-3 gap-6 py-10">
      <div className="bg-white border rounded-lg shadow-md p-6 text-center" 
        data-aos="fade-up"
        data-aos-delay={100}
        data-aos-duration="700"
      >
        <FaSmile className="text-[36px] text-orange-500 mx-auto mb-4" /> {/* Müşteri ikonu */}
        <div ref={customerRef} className="text-[48px] font-semibold text-[#666] mb-2">0 <span className='text-[##4A5568] text-[30px]'>+</span></div>
        <p className="text-gray-700">{t('happy_customers')}</p>
      </div>

      <div className="bg-white border rounded-lg shadow-md p-6 text-center"
        data-aos="fade-up"
        data-aos-delay={200}
        data-aos-duration="700"
      >
        <FaProjectDiagram className="text-[36px] text-green-500 mx-auto mb-4" /> {/* Projeler ikonu */}
        <div ref={projectsRef} className="text-[48px] font-semibold text-[#666] mb-2">0 <span className='text-[##4A5568] text-[30px]'>+</span></div>
        <p className="text-gray-700">{t('completed_projects')}</p>
      </div>

      <div className="bg-white border rounded-lg shadow-md p-6 text-center"
        data-aos="fade-up"
        data-aos-delay={400}
        data-aos-duration="700"
      >
        <FaGlobe className="text-[36px] text-blue-500 mx-auto mb-4" /> {/* İhracat ikonu */}
        <div ref={exportRef} className="text-[48px] font-semibold text-[#666] mb-2">0 <span className='text-[##4A5568] text-[30px]'>+</span></div>
        <p className="text-gray-700">{t('global_export')}</p>
      </div>
    </div>
  );
};

export default HappyCustomer;
