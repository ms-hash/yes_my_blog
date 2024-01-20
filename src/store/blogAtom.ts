import { atom } from "recoil";
import { Blog } from "../types/blog";

export const useBlogState = atom<Array<Blog>>({
  key: "useBlogState",
  default: []
});