import { useRouter } from "next/router";
import Link from "next/link";

const BlogDetailsPage = () => {
  const router = useRouter();
  const { id } = router.query;

  // Fetch blog details based on the ID and store it in a variable

  // Example blog details
  const blog = {
    id: id,
    title: "Example Blog Title",
    content: "This is the content of the blog.",
  };

  return (
    <div className="container mx-auto py-6">
      <h1 className="text-3xl font-bold mb-4">{blog.title}</h1>
      <div className="bg-white rounded-lg shadow-md p-4">
        <p>{blog.content}</p>
      </div>
      <div className="mt-4">
        <Link
          href="/blogs"
          passHref
          className="text-indigo-500 hover:text-indigo-700"
        >
          Back to Blogs
        </Link>
      </div>
    </div>
  );
};

export default BlogDetailsPage;
