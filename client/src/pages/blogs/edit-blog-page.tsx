import { useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";

const EditBlogPage = () => {
  const router = useRouter();
  const { id } = router.query;

  // Fetch blog data by id and set initial values
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  // Handle form submission
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Perform blog update logic here
  };

  return (
    <div className="container mx-auto py-6">
      <form onSubmit={handleSubmit} className="max-w-xl mx-auto">
      <h1 className="text-3xl font-bold py-3 my-3 text-center">Edit Blog</h1>

        <div className="mb-4">
          <label className="block mb-1 font-medium">Title:</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="border border-gray-300 rounded-md px-3 py-2 w-full"
          />
        </div>
        <div className="mb-4">
          <label className="block mb-1 font-medium">Content:</label>
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className="border border-gray-300 rounded-md px-3 py-2 w-full h-40"
            rows={4}
          ></textarea>
        </div>
        <button
          type="submit"
          className="bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded"
        >
          Update Blog
        </button>
      </form>
      <div className="mt-4">
        <Link href={`/blogs/${id}`} passHref className="text-indigo-500 hover:text-indigo-700">
         View Blog
        </Link>
      </div>
    </div>
  );
};

export default EditBlogPage;
