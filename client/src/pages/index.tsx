import RootLayout from "@/app/layout";
import CarouselBanner from "@/components/CarouselBanner";
import FeaturedBlogs from "@/components/FeaturedBlogs";
import Navbar from "@/components/common/Navbar";
import { FunctionComponent } from "react";

interface DashboardProps {}

const Dashboard: FunctionComponent<DashboardProps> = () => {
  return (
    <>

    {/* Carousel Section */}
    <CarouselBanner/>
    <FeaturedBlogs />
      {/* Hero Section */}
      <section className="text-gray-600 body-font">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
            <img
              className="object-cover object-center rounded"
              alt="hero"
              src="https://picsum.photos/seed/picsum/500/300"
            />
          </div>
          <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
              Welcome to MyBlog
            </h1>
            <p className="mb-8 leading-relaxed">
              Explore the latest articles and blogs curated just for you.
            </p>
            <div className="flex justify-center">
              <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                Explore
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Articles Section */}
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap -m-4">
            {/* Map through your articles and display them here */}
            {/* The following is a placeholder for a single article */}
            <div className="lg:w-1/3 sm:w-1/2 p-4">
              <div className="flex relative">
                <img
                  alt="gallery"
                  className="absolute inset-0 w-full h-full object-cover object-center"
                  src="https://dummyimage.com/600x360"
                />
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-800 bg-gray-900 opacity-0 hover:opacity-100">
                  <h2 className="tracking-widest text-sm title-font font-medium text-green-400 mb-1">
                    CATEGORY
                  </h2>
                  <h1 className="title-font text-lg font-medium text-white mb-3">
                    Article Title
                  </h1>
                  <p className="leading-relaxed">Short description...</p>
                </div>
              </div>
            </div>
            {/* End of placeholder */}
          </div>
        </div>
      </section>
         {/* Blogs Section */}
         <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap -m-4">
            {/* Map through your blogs and display them here */}
            {/* The following is a placeholder for a single blog */}
            <div className="lg:w-1/3 sm:w-1/2 p-4">
              <div className="flex relative">
                <img alt="gallery" className="absolute inset-0 w-full h-full object-cover object-center" src="https://dummyimage.com/600x360" />
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-800 bg-gray-900 opacity-0 hover:opacity-100">
                  <h2 className="tracking-widest text-sm title-font font-medium text-red-400 mb-1">CATEGORY</h2>
                  <h1 className="title-font text-lg font-medium text-white mb-3">Blog Title</h1>
                  <p className="leading-relaxed">Short description...</p>
                </div>
              </div>
            </div>
            {/* End of placeholder */}
          </div>
        </div>
      </section>
    </>
  );
};

export default Dashboard;
