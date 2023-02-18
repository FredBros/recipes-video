import type { NextApiRequest, NextApiResponse } from "next";
import prisma from "@/prisma/client";
import { Post, Posts } from "@/app/types/Post";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const post: Post = JSON.parse(req.body);
    if (req.method === "POST") {
        console.log(post.title);
        if(!post.title.length){
            return res.status(500). json({message:"Please do not leave this empty."})
        }
      try {
        const data: Post = await prisma.post.create({
          data: {
            title: post.title,
            content: post.content,
          },
        });
        return res.status(200).json(data);
      } catch {
        return res.status(500).json({ message: "Error creating post." });
      }
    }
  } catch (error) {
    return res.status(500).json(error);
  }
}
