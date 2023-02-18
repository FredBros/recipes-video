// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import prisma from "@/prisma/client";
import { Post, Posts } from "@/app/types/Post";



export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if(req.method==='GET'){
    try{
const data: Posts=  await prisma.post.findMany()
return res.status(200).json(data)
    }
    catch(error){
return res.status(500).json(error)
  }
}
}
