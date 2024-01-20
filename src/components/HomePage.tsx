import { FC, useEffect } from "react";

import { useAllBlogs } from "../hooks/useAllBlogs";

export const HomePage: FC= () => {
  const { getBlogs, blogs } = useAllBlogs();
  useEffect(() => {
    getBlogs();
  }, []);
  console.log(blogs);
  console.log(typeof blogs);
  return (
    <>
      {blogs.map((blog) => (
        <h1>{blog.title}</h1>
      ))}
    </>
  );
}