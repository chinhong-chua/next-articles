import { FC, useEffect, useState } from "react";
// import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import dynamic from "next/dynamic";
import { json } from "stream/consumers";
const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

interface Blog {
  title: string;
  content: string;
  author: string;
  slug: string;
  date: Date;
  imagePath: string;
  minutesRead: Number;
}

const CreateBlog: FC<Blog> = () => {
  const [title, setTitle] = useState("");
  const [date, setDate] = useState(new Date());
  const [description, setDescription] = useState("");
  const [image, setImage] = useState<FileList | null>(null);
  const [content, setContent] = useState("");
  const initBlog = {
    title: "",
    content: "",
    author: "cruz react",
    slug: "",
    date: new Date(),
    imagePath: "",
    minutesRead: 0,
  };
  const [blog, setBlog] = useState<Blog>(initBlog);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const newBlog: Blog = {
      ...blog,
    };
    // Perform the submit logic, such as sending the data to the server
    console.log("handleSubmit:", newBlog);
    // console.log("Date:", date);
    // console.log("Description:", description);
    // console.log("Content:", content);

    // call nodejs api

    fetch(`${process.env.NEXT_PUBLIC_API_BLOG}`, {
      body: JSON.stringify(newBlog),
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
    }).then(async (result) => {
      const res = await result.json();
      if(res.slug){
        setBlog(initBlog)
      }
      alert('Blog has been created successfully!')
      console.log("res ", res);
    });
  };

  useEffect(() => {
    console.log(image);
  }, [image]);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Create Blog</h1>
      <form onSubmit={handleSubmit} className="max-w-4xll mx-auto">
        <div className="mb-4">
          <label className="block mb-1 font-medium">Page Slug:</label>
          <input
            type="text"
            value={blog.slug}
            onChange={(e) => setBlog({ ...blog, slug: e.target.value })}
            className="w-1/6 px-4 py-2 border rounded"
          />
        </div>
        <div className="mb-4">
          <label className="block mb-1 font-medium">Title:</label>
          <input
            type="text"
            value={blog.title}
            onChange={(e) => setBlog({ ...blog, title: e.target.value })}
            className="w-full px-4 py-2 border rounded"
          />
        </div>
        <div className="mb-4">
          <label className="block mb-1 font-medium">Date:</label>
          <DatePicker
            selected={blog.date}
            onChange={(d: Date) => setBlog({ ...blog, date: d })}
            dateFormat="dd/MM/yyyy"
            className="w-full px-4 py-2 border rounded"
          />
        </div>
        <div className="mb-4">
          <label className="block mb-1 font-medium">Description:</label>
          <input
            type="text"
            value={blog.content}
            onChange={(e) => setBlog({ ...blog, content: e.target.value })}
            className="w-full px-4 py-2 border rounded"
          />
        </div>
        <div className="mb-4">
          <label className="block mb-1 font-medium">Image:</label>
          <input
            type="file"
            name="myImage"
            onChange={(e) =>
              setBlog({
                ...blog,
                imagePath: e.target.value.slice(
                  e.target.value.lastIndexOf("\\") + 1
                ),
              })
            }
            className="w-full px-4 py-2 border rounded"
          />
        </div>
        <div>
          <label htmlFor="myImage">Preview:</label>
          {/* <img src={image?.[0]} alt="myImage" /> */}
          <p>{image?.[0]?.name || ""}</p>
        </div>
        <div className="mb-4  max-h-full">
          <label className="block mb-1 font-medium">Content:</label>
          <div
            className="bg-slate-50 h-full overflow-y-auto w-full"
            style={{ minHeight: "200px" }}
          >
            <ReactQuill
              value={content}
              onChange={setContent}
              className=" min-h-full border-blue-300"
            />
          </div>
        </div>
        <div className="my-3">
          <button
            type="submit"
            className="bg-indigo-500 text-white font-bold py-2 px-4 rounded"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateBlog;
