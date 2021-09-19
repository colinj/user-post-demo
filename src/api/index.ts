import axios, { AxiosResponse } from "axios";
import { User, Post, Comment } from "@/typings";

type ApiPromise<T> = Promise<AxiosResponse<T>>;

const http = axios.create({
  headers: {
    "Content-Type": "application/json",
  },
  baseURL: "https://jsonplaceholder.typicode.com",
});

const getUser = (userId: number): ApiPromise<User> => {
  const url = `/users/${userId}`;
  return http.get(url);
};

const getPost = (postId: number): ApiPromise<Post> => {
  const url = `/posts/${postId}`;
  return http.get(url);
};

const getPostsByUserId = (userId: number): ApiPromise<Array<Post>> => {
  const url = `/posts?userId=${userId}`;
  return http.get(url);
};

const getCommentsByPostId = (postId: number): ApiPromise<Array<Comment>> => {
  const url = `/comments?postId=${postId}`;
  return http.get(url);
};

export default {
  getUser,
  getPost,
  getPostsByUserId,
  getCommentsByPostId,
};
