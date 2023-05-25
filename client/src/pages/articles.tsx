import { FunctionComponent } from "react";

interface Article {
  id: number;
  title: string;
  creator: string;
}

interface ArticlesProps {}

const Articles: FunctionComponent<ArticlesProps> = () => {
  const articleList: Article[] = [
    { id: 1, title: "Getting Started with React", creator: "John Doe" },
    { id: 2, title: "Introduction to Node.js", creator: "Jane Smith" },
    { id: 3, title: "Deep Dive into CSS Grid", creator: "Adam Johnson" },
  ];

  const convertTimestamp = (timestamp: Date) => {
    let date = new Intl.DateTimeFormat("en-US", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
    }).format(timestamp); // 01/11/2021
    return date;
  };

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
              <p className="text-gray-500">By {article.creator}</p>
              <span className="text-xs text-indigo-700">
                {convertTimestamp(new Date())}
              </span>
            </div>
            <button className="bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded">
              Read More
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Articles;
