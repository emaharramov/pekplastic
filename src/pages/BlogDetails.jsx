import React from "react";
import { useParams, Link } from "react-router-dom";
import FetchData from "../components/FetchData";
import Loader from "../components/Loader";

const BlogDetails = () => {
  const { id } = useParams(); 
  const { data: blog, loading } = FetchData(`posts/${id}`);

  if (loading) return <Loader />;

  const extractContent = (htmlString, tag) => {
    const parser = new DOMParser();
    const doc = parser.parseFromString(htmlString, 'text/html');
    const element = doc.querySelector(tag);
    return element ? (tag === 'img' ? element.src : element.textContent) : '';
  };

  return (
    <div className="container mx-auto px-3 lg:px-0 py-12">
      {/* See All Posts Button */}
      <div className="flex justify-start mb-6">
        <Link
          to="/blog"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition duration-300"
        >
          See All Posts
        </Link>
      </div>

      {/* Blog Post Layout */}
      <div className="flex flex-col lg:flex-row bg-white shadow-lg rounded-lg">
        {/* Left Side: Image */}
        <div className="w-full lg:w-1/2">
          <img
            src={blog.image}
            alt={blog.title}
            className="w-full h-[50vh] object-cover rounded-l-lg"
          />
        </div>

        {/* Right Side: Title and Description */}
        <div className="w-full lg:w-1/2 py-8 lg:py-0 lg:px-8 px-2 flex flex-col">
          {/* Post Title */}
          <h1 className="text-3xl font-bold text-gray-800 mb-2 text-center">
            {blog.title}
          </h1>

          {/* Post Details */}
          <p className="text-gray-700 text-lg text-justify">
            {extractContent(blog.content, "p")}
          </p>
        </div>
      </div>
    </div>
  );
};

export default BlogDetails;
