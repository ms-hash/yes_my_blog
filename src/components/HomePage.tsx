import { FC, useEffect } from "react";

import { useAllBlogs } from "../hooks/useAllBlogs";

export const HomePage: FC = () => {
  const { blogs, getBlogs } = useAllBlogs();
  useEffect(() => {
    getBlogs();
  }, [])

  console.log(blogs);
  return (
    <>
      <p>HomePage</p>
    </>
  );
}