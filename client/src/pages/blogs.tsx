import { FunctionComponent, useState } from "react";

interface Blog {
  id: number;
  title: string;
  author: string;
  date: string;
  image: string;
  excerpt: string;
  minutesRead: number;
}

interface BlogsProps {}

const Blogs: FunctionComponent<BlogsProps> = () => {
  const initialBlogList: Blog[] = [
    // Initial three blogs
    {
      id: 1,
      title: "The Power of Content Marketing",
      author: "John Doe",
      date: "May 15, 2023",
      image: "https://picsum.photos/seed/picsum/500",
      excerpt:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sed leo quis velit rutrum commodo.",
      minutesRead: 8,
    },
    {
      id: 2,
      title: "Mastering the Art of Productivity",
      author: "Jane Smith",
      date: "May 18, 2023",
      image: "https://picsum.photos/seed/picsum/500",
      excerpt:
        "Etiam auctor mauris a dui consectetur, a semper ligula consectetur. Phasellus dignissim mauris ac nisl tristique, in condimentum lectus interdum.",
      minutesRead: 10,
    },
    {
      id: 3,
      title: "Title 3",
      author: "Author 3",
      date: "Date 3",
      image: "https://picsum.photos/seed/picsum/500",
      excerpt: "Excerpt 3",
      minutesRead: 5,
    },
    // Add more blogs as needed
    {
      id: 4,
      title: "Title 3",
      author: "Author 3",
      date: "Date 3",
      image: "https://picsum.photos/seed/picsum/500",
      excerpt: "Excerpt 3",
      minutesRead: 5,
    },
    {
      id: 5,
      title: "Title 3",
      author: "Author 3",
      date: "Date 3",
      image: "https://picsum.photos/seed/picsum/500",
      excerpt: "Excerpt 3",
      minutesRead: 5,
    },
    {
      id: 6,
      title: "Title 3",
      author: "Author 3",
      date: "Date 3",
      image: "https://picsum.photos/seed/picsum/500",
      excerpt: "Excerpt 3",
      minutesRead: 5,
    },
    {
      id: 7,
      title: "Title 3",
      author: "Author 3",
      date: "Date 3",
      image: "https://picsum.photos/seed/picsum/500",
      excerpt: "Excerpt 3",
      minutesRead: 5,
    },
  ];

  const [blogList, setBlogList] = useState<Blog[]>(initialBlogList);
  const [visibleBlogs, setVisibleBlogs] = useState<number>(3);

  const loadMoreBlogs = () => {
    setVisibleBlogs((prevVisibleBlogs) => prevVisibleBlogs + 3);
  };

  const itemsPerPage = 3; // Number of blogs to show per page

  const [currentPage, setCurrentPage] = useState(1);

  const totalBlogs = blogList.length;
  const totalPages = Math.ceil(totalBlogs / itemsPerPage);

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  const paginatedBlogs = blogList.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <div className="container mx-auto py-10">
      <h2 className="text-4xl font-bold mb-6">Blogs</h2>
      <div className="grid gap-8 lg:grid-cols-3 md:grid-cols-2">
        {paginatedBlogs.map((blog) => (
          // Render the blogs
          <div
            key={blog.id}
            className="relative bg-gray-900 rounded-md overflow-hidden"
          >
            <img
              src={blog.image}
              alt={blog.title}
              className="w-full h-full object-cover blur-sm"
            />
            <div className="absolute inset-0 bg-gray-900 bg-opacity-50">
              <div className="p-6">
                <h3 className="text-2xl font-bold text-white mb-4">
                  {blog.title}
                </h3>
                <div className="flex items-center text-gray-300 text-sm mb-2">
                  <span>{blog.author}</span>
                  <span className="mx-2">&bull;</span>
                  <span>{blog.date}</span>
                  <span className="mx-2">&bull;</span>
                  <span>{blog.minutesRead} min read</span>
                </div>
                <p className="text-gray-300 mb-4">{blog.excerpt}</p>
                <button className="bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded">
                  Read More
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-center mt-8">
        <nav className="flex-row w-full">
          <ul className="pagination flex">
            {Array.from({ length: totalPages }).map((_, index) => (
              <li
              onClick={() => handlePageChange(index + 1)}
                key={index}
                className={`pagination-item mx-3 border-2 p-2 border-slate-400 cursor-pointer ${
                  currentPage === index + 1 ? "bg-indigo-200" : ""
                }`}
              >
                {/* <button
                  onClick={() => handlePageChange(index + 1)}
                  className="pagination-link"
                > */}
                  {index + 1}
                {/* </button> */}
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>

    // <div className="container mx-auto py-10">
    //   <h2 className="text-4xl font-bold mb-6">Blogs</h2>
    //   <div className="grid gap-8 lg:grid-cols-3 md:grid-cols-2">
    //     {blogList.slice(0, visibleBlogs).map((blog) => (
    //       <div
    //         key={blog.id}
    //         className="relative bg-gray-900 rounded-md overflow-hidden"
    //       >
    //         <img
    //           src={blog.image}
    //           alt={blog.title}
    //           className="w-full h-full object-cover blur-sm"
    //         />
    //         <div className="absolute inset-0 bg-gray-900 bg-opacity-50">
    //           <div className="p-6">
    //             <h3 className="text-2xl font-bold text-white mb-4">
    //               {blog.title}
    //             </h3>
    //             <div className="flex items-center text-gray-300 text-sm mb-2">
    //               <span>{blog.author}</span>
    //               <span className="mx-2">&bull;</span>
    //               <span>{blog.date}</span>
    //               <span className="mx-2">&bull;</span>
    //               <span>{blog.minutesRead} min read</span>
    //             </div>
    //             <p className="text-gray-300 mb-4">{blog.excerpt}</p>
    //             <button className="bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded">
    //               Read More
    //             </button>
    //           </div>
    //         </div>
    //       </div>
    //     ))}
    //   </div>
    //   {visibleBlogs < blogList.length && (
    //     <div className="flex justify-center mt-8">
    //       <button
    //         className="bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded"
    //         onClick={loadMoreBlogs}
    //       >
    //         Load More
    //       </button>
    //     </div>
    //   )}
    // </div>
  );
};

export default Blogs;
