import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import ReactMarkdown from "react-markdown";

interface Article {
  id: string;
  title: string;
  creator?: string;
  content: string;
  createdDate?: string;
  modifiedDate?: string;
  isPublished?: boolean;
}

const ArticleDetailsPage: React.FC<Article> = () => {
  const [article, setArticle] = useState<Article | null>(null);
  const router = useRouter();
  const { id } = router.query;

  const [error, setError] = useState<string>("");

  console.log(id);

  const articleUrl: string = process.env.NEXT_PUBLIC_API_ARTICLE!;

  useEffect(() => {
    const fetchArticlePost = async () => {
      try {
        const response = await fetch(`${articleUrl}/${id}`);
        const data = await response.json();
        if (response?.status === 500 ) {
          router.push("/articles/404");
        }
        if (!response.ok) {
          setError(data?.error);
          throw new Error("Failed to fetch Article post");
        }
  
        setArticle(data);
      } catch (error) {
        // router.push("/articles/404");
        router.push(`/404?message=Article%20Not%20Found`);
        console.log(error);

        // router.push("/error");
      }
    };

    fetchArticlePost();
  }, [id]);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">{article?.title}</h1>
      <div className="prose">
        {/* <ReactMarkdown plugins={[gfm]} children={article.content} /> */}
        <pre>{article?.content}</pre>
      </div>
      <p className="mt-4">Author: {article?.creator}</p>
    </div>
  );
};

export default ArticleDetailsPage;
