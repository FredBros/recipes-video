"use client";
import React, { useState } from "react";
import { Post, Posts } from "@/app/types/Post";
import { useRouter } from "next/navigation";


const AddPost = () => {
  const [post, setPost] = useState<Post>({
    id: "",
    title: "",
    content: "",
  });
  const router = useRouter()

  //Create a submit post
  const submitPost = async (e: React.FormEvent) => {
    e.preventDefault();
    const data = await fetch("/api/createPost", {
      method: "POST",
      body: JSON.stringify(post),
    });
    const res = await data.json();
    router.refresh()
    if (!res.ok) {
      console.log(res.message);
    }
    setPost({ id: "", title: "", content: "" });
  };

  return (
    <form onSubmit={submitPost}>
      <div className="flex flex-col gap-2">
        <input
          placeholder="Type here"
          className="input input-bordered w-full max-w-xs"
          onChange={(e) =>
            setPost((prevState) => {
              return { ...prevState, title: e.target.value };
            })
          }
          value={post.title}
          type="text"
        />
        <textarea
          placeholder="Type here"
          className="textarea textarea-bordered"
          onChange={(e) =>
            setPost((prevState) => {
              return { ...prevState, content: e.target.value };
            })
          }
          value={post.content!}
        />
        <button type="submit" className="btn">
          Make a post
        </button>
      </div>
    </form>
  );
};

export default AddPost;
