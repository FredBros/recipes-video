import {Post, Posts} from "@/app/types/Post"
import AddPost from "./components/AddPost";

async function getPosts(){
  const res = await fetch(`${process.env.BASE_URL}/api/getPosts`);
  if(!res.ok){
  }
  return res.json()
}

export default async function Home() {
  const data: Posts = await getPosts()
  return (
    <main>
      {data.map((post) => (
        <div className="card w-96 bg-base-100 shadow-xl p-5 my-3 mx-5" key={post.id}>
          <h1 className="card-title">
            {post.title}
          </h1>
          <p>{post.content}</p>
        </div>
      ))}
      <AddPost/>
    </main>
  );
}
