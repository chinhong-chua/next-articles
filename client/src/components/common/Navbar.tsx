import { FunctionComponent } from "react";

interface NavbarProps {}

const Navbar: FunctionComponent<NavbarProps> = () => {
  return (
    <header className="text-gray-600 body-font">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center justify-between">
        <div className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
          <span className="ml-3 text-xl">MyBlog</span>
        </div>
        <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
          <a className="mr-5 hover:text-gray-900">Home</a>
          <a className="mr-5 hover:text-gray-900">Articles</a>
          <a className="mr-5 hover:text-gray-900">Blogs</a>
          <div className="relative group inline-block">
            <button className="inline-flex items-center px-3 py-2 border border-transparent text-base leading-6 font-medium rounded-md text-gray-700 bg-indigo-100 hover:bg-indigo-200 focus:outline-none focus:border-indigo-300 focus:shadow-outline-indigo active:bg-indigo-300 transition ease-in-out duration-150">
              Manage Blog <span className="ml-1 text-xs">{">"}</span>
            </button>
            <div className="absolute left-0 w-56 mt-2 origin-top-right rounded-md shadow-lg opacity-0 group-hover:opacity-100 transition ease-in-out duration-150">
              <div className="rounded-md bg-white shadow-xs divide-y divide-gray-100 focus:outline-none">
                <div className="py-1">
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Create
                  </a>
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Edit
                  </a>
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    My Blog
                  </a>
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    User Profile
                  </a>
                </div>
              </div>
            </div>
          </div>
        </nav>

        <div className="md:ml-auto flex flex-wrap items-center text-base justify-center">
          <button className="bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded mr-2">
            Login
          </button>
          <button className="bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded">
            Sign Up
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
