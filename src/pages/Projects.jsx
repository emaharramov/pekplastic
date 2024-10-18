import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Modal from 'react-modal';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import SyncLoader from "react-spinners/SyncLoader";

const Projects = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [loading, setLoading] = useState(true);  // Initialize loading as true
  const [media, setMedia] = useState([]);

  const openModal = (index) => {
    setSelectedIndex(index);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await axios.get("https://pekplastic.emilmaharramov.com/wp-json/wp/v2/portfolio");
        const formattedProducts = res.data.map(slide => {
          const content = slide.content.rendered;

          // Parse the HTML content to extract image
          const parser = new DOMParser();
          const doc = parser.parseFromString(content, 'text/html');
          const imgElement = doc.querySelector('img'); // Get the first img tag

          return {
            image: imgElement ? imgElement.src : null, // Store image src
          };
        });

        setMedia(formattedProducts);
        setLoading(false); // Set loading to false after data is fetched
      } catch (err) {
        console.error("Error fetching portfolio data", err);
        setLoading(false); // Set loading to false even if error occurs
      }
    }
    fetchData();
  }, []);

  const arr = ['En', 'iyisi', 'bizde']
  return (
    <div className='bg-[#f3f4f6]'>
      <div className='container mx-auto px-3 lg:px-0 py-12'>
        {loading ? (
          <div className="flex justify-center">
            <SyncLoader color="#3C4048" size={15} />
          </div>
        ) : (
          <div className="grid md:grid-cols-2 place-content-center lg:grid-cols-3 gap-6">
            {media.map((item, index) => (
              item.image && ( // Ensure the image exists before rendering
                <div
                key={index}
                data-aos="fade-up"
                data-aos-delay={100 * index}
                data-aos-duration="700"
                className='relative transition-all duration-300 shadow-sm hover:shadow-lg'
              >
                <img
                  src={item.image}
                  alt={`Portfolio ${index + 1}`}
                  className="cursor-pointer img transition-all duration-300 w-[410px] h-[306px] object-cover"
                  onClick={() => openModal(index)} // Open modal on click
                />
                {/* <div className='absolute bottom-0 left-0 transform translate-y-[0%] img-hover:translate-y-[0%] border-t-[2px] w-full opacity-0 group-hover:opacity-100 transition-all duration-300 ease-in-out p-6 backdrop-blur-md bg-white/30'>
                  {arr[index]}
                </div> */}
              </div>
              
              )
            ))}
          </div>
        )}

        {/* Modal for Image Carousel */}
        <Modal
          isOpen={isOpen}
          onRequestClose={closeModal}
          contentLabel="Project Images"
          className="Modal"
          overlayClassName="Overlay"
        >
          <button onClick={closeModal} className="text-red-500 mb-4">Close</button>
          <Carousel
            selectedItem={selectedIndex}
            showThumbs={false}
            showStatus={false}
            infiniteLoop={true}
            useKeyboardArrows={true}
            emulateTouch={true}
          >
            {media.map((item, index) => (
              <div key={index}>
                <img src={item.image} alt={`Project ${index + 1}`} />
              </div>
            ))}
          </Carousel>
        </Modal>
      </div>
    </div>
  );
};

export default Projects;
