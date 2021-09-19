import { createStore } from "vuex";
import { User, Post, Comment } from "@/typings";
import api from "@/api";

export type State = {
  user: User;
  posts: Array<Post>;
  post: Post;
  postComments: Array<Comment>;
};

const state: State = {
  user: {} as User,
  posts: [],
  post: {} as Post,
  postComments: [],
};

export default createStore({
  state,
  mutations: {
    SET_USER(state: State, user: User) {
      state.user = user;
    },
    SET_POSTS(state: State, posts: Array<Post>) {
      state.posts = posts;
    },
    SET_POST(state: State, post: Post) {
      state.post = post;
    },
    SET_COMMENTS(state: State, comments: Array<Comment>) {
      state.postComments = comments;
    },
  },
  actions: {
    async getUser({ commit }, userId: number) {
      try {
        const response = await api.getUser(userId);
        commit("SET_USER", response.data);
      } catch (err) {
        console.error(err);
      }
    },
    async getPost({ commit }, postId: number) {
      try {
        const response = await api.getPost(postId);
        commit("SET_POST", response.data);
      } catch (err) {
        console.error(err);
      }
    },
    async getPosts({ commit }, userId: number) {
      try {
        const response = await api.getPostsByUserId(userId);
        commit("SET_POSTS", response.data);
      } catch (err) {
        console.error(err);
      }
    },
    async getComments({ commit }, postId: number) {
      try {
        const response = await api.getCommentsByPostId(postId);
        commit("SET_COMMENTS", response.data);
      } catch (err) {
        console.error(err);
      }
    },
  },
  modules: {},
});
