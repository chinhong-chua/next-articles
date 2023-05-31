import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { HiMenu, HiX } from "react-icons/hi";
import BlogLogo from "/blog-logo.png";

interface NavbarProps {}

const Navbar: React.FC<NavbarProps> = () => {
  const { asPath } = useRouter();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [manageBlogOpen, setManageBlogOpen] = useState(false);
  const pathName = `/${asPath.split("/")[1]}`;

  const leftNavigations = [
    {
      name: "Home",
      route: "/",
    },
    {
      name: "About Us",
      route: "/about",
    },
    {
      name: "Articles",
      route: "/articles",
    },
    {
      name: "Blogs",
      route: "/blogs",
    },
  ];

  const toggleMobileMenu = () => {
    setMobileMenuOpen((prevOpen) => !prevOpen);
  };

  const handleManageBlogHover = () => {
    setManageBlogOpen(true);
  };

  const handleManageBlogLeave = () => {
    setManageBlogOpen(false);
  };

  const toggleMenu = () => {
    setManageBlogOpen((prevShowMenu) => !prevShowMenu);
  };

  return (
    <header className="text-gray-600 body-font">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center justify-between">
        <div className="flex title-font font-small items-center text-gray-900 mb-4 md:mb-0">
          <Link href="/" className="md:ml-3 my-0 p-0">
            <img
              src="/images/logo-no-background.png"
              alt="welcome"
              className="max-w-sm max-h-16"
            />
          </Link>
        </div>
        <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
          <div className="md:hidden">
            <button
              className="text-gray-700 hover:text-gray-900 focus:outline-none"
              onClick={toggleMobileMenu}
            >
              {mobileMenuOpen ? (
                <HiX className="h-6 w-6" />
              ) : (
                <HiMenu className="h-6 w-6" />
              )}
            </button>
          </div>
          <div
            className={`${
              mobileMenuOpen ? "block" : "hidden"
            } md:hidden mt-4 md:mt-0`}
          >
            <div className="bg-white rounded-md shadow-md">
              {leftNavigations.map((item) => (
                <Link
                  key={item.name}
                  className={`block px-4 py-2 text-base leading-6 text-gray-700 hover:bg-indigo-200 ${
                    pathName === item.route && "bg-indigo-100"
                  }`}
                  href={item.route}
                >
                  {item.name}
                </Link>
              ))}
              <div
                className="relative group inline-block"
                onMouseEnter={toggleMenu}
                onMouseLeave={toggleMenu}
              >
                <button className="inline-block items-center px-3 py-2 border border-transparent text-base leading-6 font-medium rounded-md text-gray-700 hover:bg-indigo-200 focus:outline-none focus:border-indigo-300 focus:shadow-outline-indigo active:bg-indigo-300 transition ease-in-out duration-150">
                  Manage Blog <span className="ml-1 text-xs">{">"}</span>
                </button>
                {manageBlogOpen && (
                  <div
                    className="absolute left-20 ml-10 min-w-full mt-0 origin-bottom-right rounded-md shadow-lg opacity-0 group-hover:opacity-100 transition ease-in-out duration-150 z-50"
                  >
                    <div className="rounded-md bg-white shadow-xs divide-y divide-gray-100 focus:outline-none">
                      <div className="py-1">
                        <Link
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                          href="/blogs/create-blog-page"
                        >
                          Create
                        </Link>
                        <Link
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                          href="/blogs/edit-blog-page"
                        >
                          Edit
                        </Link>
                        <Link
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                          href="/blogs/create-blog-page"
                        >
                          My Blog
                        </Link>
                        <Link
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                          href="/login/profile-page"
                        >
                          User Profile
                        </Link>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
          <div className="hidden md:block">
            {leftNavigations.map((item) => (
              <Link
                key={item.name}
                className={`mr-5 hover:text-gray-900 px-3 py-2 border border-transparent text-base leading-6 font-medium rounded-md text-gray-700 hover:bg-indigo-200 ${
                  pathName === item.route && "bg-indigo-100"
                }`}
                href={item.route}
              >
                {item.name}
              </Link>
            ))}
            <div
              className="relative group inline-block"
              onMouseEnter={handleManageBlogHover}
            >
              <button className="inline-flex items-center px-3 py-2 border border-transparent text-base leading-6 font-medium rounded-md text-gray-700 hover:bg-indigo-200 focus:outline-none focus:border-indigo-300 focus:shadow-outline-indigo active:bg-indigo-300 transition ease-in-out duration-150">
                Manage Blog <span className="ml-1 text-xs">{">"}</span>
              </button>
              {manageBlogOpen && (
                <div
                  onMouseLeave={handleManageBlogLeave}
                  className="absolute left-0 w-56 mt-2 origin-top-right rounded-md shadow-lg opacity-0 group-hover:opacity-100 transition ease-in-out duration-150 z-50"
                >
                  <div className="rounded-md bg-white shadow-xs divide-y divide-gray-100 focus:outline-none">
                    <div className="py-1">
                      <Link
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        href="/blogs/create-blog-page"
                      >
                        Create
                      </Link>
                      <Link
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        href="/blogs/edit-blog-page"
                      >
                        Edit
                      </Link>
                      <Link
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        href="/blogs/create-blog-page"
                      >
                        My Blog
                      </Link>
                      <Link
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        href="/login/profile-page"
                      >
                        User Profile
                      </Link>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </nav>

        <div className="md:ml-auto flex flex-wrap items-center text-base justify-center">
          <button className="bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded mr-2">
            <Link href="/login">Login</Link>
          </button>
          <button className="bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded">
            <Link href="/login/register-page">Sign Up</Link>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
