import Link from "next/link";
import { useRouter } from "next/router";

const NotFoundPage = () => {
    const router = useRouter();
    const { message } = router.query;
  
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold">{ message ||"404 - Page Not Found"}</h1>
      <p>Sorry, the page you're looking for does not exist.</p>
      <div className=" h-auto mt-5 my-auto">
      <Link href="/" className="text-slate-100 border-2  p-2 border-emerald-400 bg-indigo-500 ">
        Go back to the homepage
      </Link>
      </div>
  
    </div>
  );
};

export default NotFoundPage;
