import ErrorModal from "@/components/ErrorModal";
import OverlayModal from "@/components/OverlayModal";
import { time, timeStamp } from "console";
import Link from "next/link";
import { FunctionComponent, useEffect, useState } from "react";

interface Article {
  id: string;
  title: string;
  content: string;
  creator?: string;
  createdDate?: string;
  modifiedDate?: string;
  isPublished?: boolean;
}

interface ArticlesProps {}

const Articles: FunctionComponent<ArticlesProps> = () => {
  // const articleList: Article[] = [
  //   {
  //     id: "1",
  //     title: "Getting Started with React",
  //     creator: "John Doe",
  //     createdDate: "2023-06-01T10:00:00",
  //     modifiedDate: "2023-06-02T12:30:00",
  //     isPublished: true,
  //   },
  //   {
  //     id: "2",
  //     title: "Introduction to Node.js",
  //     creator: "Jane Smith",
  //     createdDate: "2023-06-02T09:15:00",
  //     modifiedDate: "2023-06-03T11:45:00",
  //     isPublished: false,
  //   },
  //   {
  //     id: "3",
  //     title: "Deep Dive into CSS Grid",
  //     creator: "Adam Johnson",
  //     createdDate: "2023-06-03T14:20:00",
  //     modifiedDate: "2023-06-03T16:45:00",
  //     isPublished: true,
  //   },
  // ];

  const [articleList, setArticleList] = useState<Article[]>([]);
  const articleUrl: string = process.env.NEXT_PUBLIC_API_ARTICLE!;

  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");

  useEffect(() => {
    setLoading(true);
    const wait = ()=> new Promise((resolve)=> setTimeout(resolve,3000));

    const fetchArticles = async ()=> {
      await wait();
      fetch(articleUrl)
      .then((res) => res.json())
      .then((articles) => {
        setArticleList(articles);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
    }
    fetchArticles()
  }, []);

  // if (error) {
  //   return <ErrorModal message={error} />;
  // }
  // if(error.length){
  //   return(
  //     <ErrorModal message={error} />
  //   )
  // }

  // const convertTimestamp = (timestamp: string) => {
  //   console.log(timestamp)
  //   const date = new Date(timestamp).toLocaleDateString("en-US", {
  //     year: "numeric",
  //     month: "2-digit",
  //     day: "2-digit",
  //   }); // 01/11/2021
  //   return date;
  // };
  const convertTimeArr = (timeStamp: string)=>{
    const date =`${timeStamp[2]}/${timeStamp[1]}/${timeStamp[0]}`
    return date;
  }

  const [showOverlay, setShowOverlay] = useState<boolean>(true);

  const handleCloseOverlay = () => {
    setShowOverlay(false);
    clearError()
  };

  const clearError = () => {
    setError("");
  };

  // useEffect(() => {
  //   const handleBeforeUnload = () => {
  //     clearError();
  //   };

  //   window.addEventListener("beforeunload", handleBeforeUnload);

  //   return () => {
  //     window.removeEventListener("beforeunload", handleBeforeUnload);
  //   };
  // }, []);


  return (
    <div className="container mx-auto py-10">
      <h2 className="text-4xl font-bold mb-6">Article List</h2>
      <ul className="space-y-4">
        {articleList.map((article) => (
          <li
            key={article.id}
            className="bg-white shadow-md p-4 rounded-md flex justify-between items-center"
          >
            <div>
              <h3 className="text-lg font-bold">{article.title}</h3>
              {article.creator && (
                <p className="text-gray-500">By {article.creator}</p>
              )}
              {article.createdDate && (
                <span className="text-xs text-indigo-700">
                  {convertTimeArr(article.createdDate)}
                </span>
              )}
            </div>
            <Link
              href={"/articles/" + article.id}
              className="bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded"
            >
              Read More
            </Link>
          </li>
        ))}
      </ul>
      {/* {(showOverlay) && ( */}
      {(error || loading) && (
        <OverlayModal loading={loading} error={error} onClose={handleCloseOverlay} />
      )}
    </div>
  );
};

export default Articles;
