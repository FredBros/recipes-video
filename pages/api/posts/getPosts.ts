// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import prisma from "@/prisma/client";



export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if(req.method==='GET'){
    try{
const result = await prisma.post.findMany({
  include: {
    user: true,
    comments: true,
  },
  orderBy: {
    createdAt: "desc",
  },
});
 return res.status(200).json(result);
    }
    catch(error){
return res.status(500).json({ message: "Error fetching posts." });
  }
}
}
