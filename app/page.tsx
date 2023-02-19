"use client";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import { Post, Posts } from "@/app/types/Post";
import { PostsType } from "./types/Posts";
// import AddPost from "./components/AddPost";


// Fetch all posts
const getPosts = async () =>{
  const response = await axios.get("/api/posts/getPosts");
  return response.data;
}

export default function Home() {

const { data, error, isLoading } = useQuery<PostsType[]>({
  queryFn: getPosts,
  queryKey: ["posts"],
});
if (error) return error;
if (isLoading) return "Loading...";

  return (
    <section>
      <h1>Recettes</h1>
      {data?.map((post) => (
        <div
          className="card w-96 bg-base-100 shadow-xl p-5 my-3 mx-5"
          key={post.id}
        >
          <h1 className="card-title">{post.title}</h1>
          <p>{post.content}</p>
        </div>
      ))}
      {/* <AddPost/> */}
    </section>
  );
}
