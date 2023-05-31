import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { BiImageAdd } from "react-icons/bi";
const ProfilePage = () => {
  const [name, setName] = useState("John Doe");
  const [email, setEmail] = useState("johndoe@example.com");
  const [bio, setBio] = useState(
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
  );
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const handleUpdateProfile = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle profile update logic here
  };

  useEffect(() => {
    adjustTextareaHeight();
  }, [bio]);

  const adjustTextareaHeight = () => {
    if (textareaRef.current) {
      textareaRef.current.style.height = "auto";
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
    }
  };

  return (
    <div className="min-h-full bg-transparent py-6 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md">
        <div className="md:flex">
          <div className="md:flex-shrink-0 flex flex-col items-center ">
            <img
              className="h-48 w-full object-cover md:w-48"
              src="/images/logo-black.png"
              alt="Profile"
            />
            Upload image
            {/* <input type="file" name="uploadImage" placeholder=""  /> */}
            <BiImageAdd className="h-10 w-8 cursor-pointer"></BiImageAdd>
         
          </div>
          <div className="p-8 max-w-4xl mx-auto flex-grow">
            <div className="text-3xl font-bold mb-4">{name}</div>
            <div className="text-gray-600 mb-4">{email}</div>

            <form onSubmit={handleUpdateProfile}>
              <div className="mb-4">
                <label className="block mb-1 font-medium">Name:</label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="border border-gray-300 rounded-md px-3 py-2 w-full"
                />
              </div>
              <div className="mb-4">
                <label className="block mb-1 font-medium">Email:</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="border border-gray-300 rounded-md px-3 py-2 w-full"
                />
              </div>
              <div className="mb-6">
              <label className="block mb-1 font-medium">Bio:</label>
              <textarea
                ref={textareaRef}
                value={bio}
                onChange={(e) => setBio(e.target.value)}
                className="border border-gray-300 rounded-md px-3 py-2 w-full resize-none"
                rows={1}
              ></textarea>
            </div>
              <button
                type="submit"
                className="bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded"
              >
                Update Profile
              </button>
            </form>
          </div>
        </div>
        <div className="p-4 bg-gray-100 text-right">
          <Link href="/logout" className="text-red-500 hover:text-red-700">
            Log out
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
