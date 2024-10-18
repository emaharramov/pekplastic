import React from 'react';
import FetchData from './FetchData';

const Products = () => {
  const { data, loading, error } = FetchData('product');

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div className='text-center py-10'>
      <div className='text-[#3C4048] font-bold text-[36px] mb-10'>Products</div>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
        {data.map((item, index) => (
          <div key={index} className='bg-white border rounded-lg shadow-md overflow-hidden' 
          data-aos="fade-up"
          data-aos-delay={100 * index}
          data-aos-duration="700"
          >
            <img src={item.image} alt={item.title} className='w-full h-[250px] object-cover' />
            <div className='p-4'>
              <h3 className='text-[#0D2758] font-bold text-xl'>{item.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
