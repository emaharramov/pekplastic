import React from "react";
import { Link } from "react-router-dom";

const PostCard = ({ post, isHomePage, index }) => {

  const extractContent = (htmlString, tag) => {
    const parser = new DOMParser();
    const doc = parser.parseFromString(htmlString, 'text/html');
    const element = doc.querySelector(tag);
    return element ? (tag === 'img' ? element.src : element.textContent) : '';
  };


  return (
    <Link to={`/blog/${post.id}`}
      data-aos="fade-up"
      data-aos-delay={100 * index}
      data-aos-duration="700"
      className={`bg-white p-4 shadow-md transition-all duration-300 hover:shadow-lg rounded-lg flex ${isHomePage ? 'flex-col md:flex-row w-full md:w-3/4 lg:w-3/4' : 'flex-col'}`
      }
    >
      {/* Image section */}
      <div className={`relative flex-none ${isHomePage ? 'w-full md:w-1/3' : 'w-full'} mb-4`}>
        <img
          src={post.image}
          alt={post.title}
          className={`w-full ${isHomePage ? 'md:h-full h-auto' : 'h-52'} object-cover rounded-lg md:rounded-l-lg md:rounded-none`}
        />
      </div>

      {/* Content section */}
      <div className="flex-1 p-4 flex flex-col justify-between">
        <div>
        <h3 className={`text-[24px] ${isHomePage ? '' : 'h-[78px]'}  md:text-[26px] font-bold text-[#3C4048] mb-2`}>
          {post.title}
        </h3>
        <p className="text-[#718096] mb-4 line-clamp-3 text-justify">
        {extractContent(post.content, "p")}
        </p>
        </div>
        <div className="flex items-center justify-between text-sm text-[#3C4048]">
          <span>1 Dk. Okuma Süresi</span>
        </div>
      </div>
    </Link>
  );
};

export default PostCard;
