import React, { useState } from "react";
import { useLocation } from 'react-router-dom';
import Loader from "../components/Loader";
import PostCard from "../components/PostCard";
import FetchData from "../components/FetchData";

const Blog = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const location = useLocation(); 
  const isHomePage = location.pathname === '/'; 
  const postsPerPage = isHomePage ? 1 : 3;

  const { data: posts, loading } = FetchData('posts'); 
  
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);
  const totalPages = Math.ceil(posts.length / postsPerPage);

  if (loading) return <Loader />;

  return (
    <div className={`${isHomePage ? 'bg-[#f3f4f6]' : ''}`}>
      <div className="container mx-auto px-2 md:px-0 py-12">
        {/* Blog Yazıları */}
        <div className={`gap-y-6 ${isHomePage ? 'flex flex-col justify-center items-center' : 'grid grid-cols-1 gap-x-6 md:grid-cols-2 lg:grid-cols-3'}`}>
          {currentPosts.map((post, index) => (
            <PostCard key={index} post={post} isHomePage={isHomePage} index={index} />
          ))}
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex justify-center mt-8">
            {Array.from({ length: totalPages }, (_, index) => (
              <button
                key={index}
                onClick={() => setCurrentPage(index + 1)}
                className={`px-4 py-2 mx-1 rounded ${currentPage === index + 1 ? 'bg-[#3C4048] text-white' : 'bg-gray-200 text-gray-800'}`}
              >
                {index + 1}
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Blog;
