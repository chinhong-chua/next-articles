import { useRouter } from "next/router";
import { FunctionComponent } from "react";

interface BlogProps {
  slug: string;
}

const BlogPage: FunctionComponent<BlogProps> = ({ slug }) => {
  // Use the slug to fetch and render the specific blog post
  return <div>Blog Post: {slug}</div>;
};

export default BlogPage;

export async function getServerSideProps({ params }:any) {
  const { slug } = params;

  // Perform necessary data fetching for the specific blog post using the slug

  return {
    props: {
      slug,
    },
  };
}
