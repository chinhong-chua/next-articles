import { FunctionComponent, useRef, useState } from "react";
import "./Blogs.css";
import smoothScrollTo from '@/customHooks/useScrollTo.js'
import { Container } from "react-dom";

const featuredBlogs = [
  {
    id: 1,
    image: "https://via.placeholder.com/600",
    title: "Featured Blog 1",
    description: "Description for featured blog 1...",
  },
  {
    id: 2,
    image: "https://via.placeholder.com/600",
    title: "Featured Blog 2",
    description: "Description for featured blog 2...",
  },
  {
    id: 3,
    image: "https://via.placeholder.com/600",
    title: "Featured Blog 3",
    description: "Description for featured blog 3...",
  },
  {
    id: 4,
    image: "https://via.placeholder.com/600",
    title: "Featured Blog 4",
    description: "Description for featured blog 4...",
  },
  {
    id: 5,
    image: "https://via.placeholder.com/600",
    title: "Featured Blog 5",
    description: "Description for featured blog 5...",
  },
  {
    id: 7,
    image: "https://via.placeholder.com/600",
    title: "Featured Blog 7",
    description: "Description for featured blog 7...",
  },
  {
    id: 8,
    image: "https://via.placeholder.com/600",
    title: "Featured Blog 8",
    description: "Description for featured blog 8...",
  },
];

const FeaturedBlogs: FunctionComponent = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    // setScrollPosition(Math.max(scrollPosition - 3, 0));
    const container  = containerRef.current!;
    console.log(container)
    smoothScrollTo(container, container.scrollLeft - container.offsetWidth, 500);

    // container.scrollTo({
    //   left: container.scrollLeft - container.offsetWidth,
    //   behavior: "smooth",
    // });
    setScrollPosition(Math.max(scrollPosition - 3, 0));
  };

  const scrollRight = () => {
    // setScrollPosition(Math.min(scrollPosition + 3, featuredBlogs.length - 3));
    const container = containerRef.current!;
    smoothScrollTo(container, container.scrollLeft + container.offsetWidth, 500);
    // container.scrollTo({
    //   left: container.scrollLeft + container.offsetWidth,
    //   behavior: "smooth",
    // });
    setScrollPosition(Math.min(scrollPosition + 3, featuredBlogs.length - 3));
  };
  return (
    <div className="relative mt-3">
      <button
        className="absolute top-20 left-0 mt-10 ml-1 mr-3 bg-gray-200 p-2 rounded-full focus:outline-none"
        onClick={scrollLeft}
      >
        &lt;&lt;
      </button>
      <button
        className="absolute top-20 right-0 mt-10 ml-1 mr-3 bg-gray-200 p-2 rounded-full focus:outline-none"
        onClick={scrollRight}
      >
        &gt;&gt;
      </button>
      <div ref={containerRef} className="flex space-x-4 mx-4">
        {featuredBlogs
          .slice(scrollPosition, scrollPosition + 3)
          .map((blog, idx) => (
            <div key={idx} className="flex-1 min-w-1/3 p-2">
              <div className="border-2 border-gray-200 p-5 rounded-md">
                <img
                  className="w-full h-64 rounded-md"
                  src={blog.image}
                  alt={`Blog ${idx + 1}`}
                />
                <h2 className="mt-4 text-xl font-semibold">{blog.title}</h2>
                <p className="mt-2">{blog.description}</p>
              </div>
            </div>
          ))}
      </div>
    </div>
    // <div className="flex overflow-x-auto scrollbar-width-none mt-10 space-x-4">
    //   {featuredBlogs.map((blog, idx) => (
    //     <div key={idx} className="flex-none min-w-1/3 p-2">
    //       <div className="border-2 border-gray-200 p-5 rounded-md">
    //         <img
    //           draggable="true"
    //           className="w-full h-64 rounded-md"
    //           src={blog.image}
    //           alt={`Blog ${idx + 1}`}
    //         />
    //         <h2 className="mt-4 text-xl font-semibold">{blog.title}</h2>
    //         <p className="mt-2">{blog.description}</p>
    //       </div>
    //     </div>
    //   ))}
    // </div>

    // <div className="flex flex-col sm:flex-row sm:justify-around items-center mt-10">
    //   {/* Featured blog 1 */}
    //   <div className="w-full sm:w-1/3 p-2">
    //     <div className="border-2 border-gray-200 p-5 rounded-md">
    //       <img
    //         className="w-full h-64 rounded-md"
    //         src="https://via.placeholder.com/600"
    //         alt="blog"
    //       />
    //       <h2 className="mt-4 text-xl font-semibold">Featured Blog 1</h2>
    //       <p className="mt-2">Description for featured blog 1...</p>
    //     </div>
    //   </div>

    //   {/* Featured blog 2 */}
    //   <div className="w-full sm:w-1/3 p-2">
    //     <div className="border-2 border-gray-200 p-5 rounded-md">
    //       <img
    //         className="w-full h-64 rounded-md"
    //         src="https://via.placeholder.com/600"
    //         alt="blog"
    //       />
    //       <h2 className="mt-4 text-xl font-semibold">Featured Blog 2</h2>
    //       <p className="mt-2">Description for featured blog 2...</p>
    //     </div>
    //   </div>

    //   {/* Featured blog 3 */}
    //   <div className="w-full sm:w-1/3 p-2">
    //     <div className="border-2 border-gray-200 p-5 rounded-md">
    //       <img
    //         className="w-full h-64 rounded-md"
    //         src="https://via.placeholder.com/600"
    //         alt="blog"
    //       />
    //       <h2 className="mt-4 text-xl font-semibold">Featured Blog 3</h2>
    //       <p className="mt-2">Description for featured blog 3...</p>
    //     </div>
    //   </div>
    // </div>
  );
};
export default FeaturedBlogs;

//   Another Design
{
  //   <div className="px-4 py-5 sm:p-6">
  //   <h2 className="text-3xl leading-6 font-medium text-gray-900">Featured Blogs</h2>
  //   <div className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-3">
  //     {Array(3)
  //       .fill(null)
  //       .map((_, idx) => (
  //         <div
  //           key={idx}
  //           className="flex flex-col rounded-lg shadow-lg overflow-hidden"
  //         >
  //           <div className="flex-shrink-0">
  //             <img className="h-48 w-full object-cover" src="https://via.placeholder.com/300" alt="" />
  //           </div>
  //           <div className="flex-1 bg-white p-6 flex flex-col justify-between">
  //             <div className="flex-1">
  //               <p className="text-sm font-medium text-indigo-600">
  //                 <a href="#" className="hover:underline">
  //                   Blog
  //                 </a>
  //               </p>
  //               <a href="#" className="block mt-2">
  //                 <p className="text-xl font-semibold text-gray-900">
  //                   Feature Blog {idx + 1}
  //                 </p>
  //                 <p className="mt-3 text-base text-gray-500">
  //                   Description for featured blog {idx + 1}...
  //                 </p>
  //               </a>
  //             </div>
  //           </div>
  //         </div>
  //       ))}
  //   </div>
  // </div>
}
