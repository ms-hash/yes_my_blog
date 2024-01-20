import { useCallback, useState } from "react";
import { useRecoilState } from "recoil";

import { client } from "../utils/axios";
import { useBlogState } from "../store/blogAtom";

export const useAllBlogs = () => {
  const [loading, setLoading] = useState(false);
  const [blogs, setBlogs] = useRecoilState(useBlogState);
  const getBlogs = useCallback(async() => {
    try {
      setLoading(true);
      const fetchBlogs = await client.get('blogs')
      setBlogs(fetchBlogs.data.contents);
    } finally {
      setLoading(false);
    }
  }, [])
  return {
    loading,
    blogs,
    getBlogs
  }
}