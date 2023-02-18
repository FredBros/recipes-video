export type Post = {
  title: string;
  id: string | number;
  createdAt?: string;
  content: string | null
//   user: {
//     name: string;
//     image: string;
//   };
//   comments?: {
//     createdAt: string;
//     id: string;
//     postId: string;
//     userId: string;
//   };
};

export type Posts = Post[]