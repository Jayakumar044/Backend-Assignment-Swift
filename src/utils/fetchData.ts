import axios from "axios";
import client from "../config/db"; 
import { User, Post, Comment } from "../models/types";

export const loadData = async () => {
  const [usersRes, postsRes, commentsRes] = await Promise.all([
    axios.get<User[]>("https://jsonplaceholder.typicode.com/users"),
    axios.get<Post[]>("https://jsonplaceholder.typicode.com/posts"),
    axios.get<Comment[]>("https://jsonplaceholder.typicode.com/comments"),
  ]);

  const postsMap = postsRes.data.reduce((acc, post) => {
    acc[post.id] = { ...post, comments: [] };
    return acc;
  }, {} as { [key: number]: Post });

  commentsRes.data.forEach(comment => {
    if (postsMap[comment.id]) {
      postsMap[comment.id].comments.push(comment);
    }
  });

  const users = usersRes.data.map(user => {
    const userPosts = postsRes.data.filter(post => post.userId === user.id);
    const postsWithComments = userPosts.map(post => ({
      ...post,
      comments: commentsRes.data.filter(c => c.postId === post.id),
    }));
    return { ...user, posts: postsWithComments };
  });

  await client.db().collection("users").insertMany(users); 
  await client.db().collection("posts").insertMany(postsRes.data); 
  await client.db().collection("comments").insertMany(commentsRes.data); 
};
