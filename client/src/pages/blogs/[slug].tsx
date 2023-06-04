import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import ReactMarkdown from "react-markdown";
// import gfm from "remark-gfm";

interface BlogDetailsProps {}

const BlogDetailsPage: React.FC<BlogDetailsProps> = () => {
  const [blog, setBlog] = useState<any>(null);
  const router = useRouter();
  const { slug } = router.query;

  const [error, setError] = useState<string>("")

  console.log(slug);
  useEffect(() => {
    const fetchBlogPost = async () => {
      try {
        const response = await fetch(`http://localhost:8011/api/blogs/${slug}`);
        const data = await response.json();

        if (!response.ok) {
            setError(data?.error)
          throw new Error("Failed to fetch blog post");
        }
        setBlog(data);
      } catch (error) {
        console.log(error);
        // router.push("/error");
      }
    };

    fetchBlogPost();
  }, [slug]);

  //   useEffect(() => {
  //     // Fetch the specific blog post using the slug from the router query
  //     const fetchBlogPost = async () => {
  //       try {
  //         // Make the necessary API request to fetch the blog post based on the slug
  //         // Example: const response = await fetch(`/api/blogs/${slug}`);
  //         // const data = await response.json();
  //         // Set the blog data to the state
  //         // setBlog(data);
  //         // For now, let's set a sample blog data
  //         setBlog({
  //           title: "Sample Blog Title",
  //           content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  //           author: "John Doe",
  //         });
  //       } catch (error) {
  //         // Handle any error that occurs during the data fetching process
  //         console.log(error);
  //         // Redirect to an error page or show a fallback UI
  //         router.push("/error");
  //       }
  //     };

  //     // Call the fetchBlogPost function when the component mounts
  //     fetchBlogPost();
  //   }, [slug, router]);

  //   useEffect(() => {
  //     const fetchBlogPost = async () => {
  //       try {
  //         const response = await fetch(`/api/blogs/${slug}`);
  //         if (!response.ok) {
  //           throw new Error("Failed to fetch blog post");
  //         }
  //         const data = await response.json();
  //         setBlog(data);
  //       } catch (error) {
  //         console.log(error);
  //         router.push("/error");
  //       }
  //     };

  //     fetchBlogPost();
  //   }, [slug, router]);

  if (!blog && !error) {
    // Show a loading state while fetching the blog post
    return <div>Loading...</div>;
  }
  else if(!blog &&error){
    return <div>{error}</div>
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">{blog.title}</h1>
      <div className="prose">
        {/* <ReactMarkdown plugins={[gfm]} children={blog.content} /> */}
        <ReactMarkdown >
        {blog.content}
        </ReactMarkdown>

      </div>
      <p className="mt-4">Author: {blog.author}</p>
    </div>
  );
};

export default BlogDetailsPage;
