export type Post = {
  title: string;
  url: string;
  userId?: string;
  id: string;
  createdAt: string;
  updatedAt?: string;
  content?: string;
  user: {
    name: string;
    image: string;
    email: string;
    id: string;
  };
  comments?: {
    createdAt: string;
    id: string;
    postId: string;
    userId: string;
    message: string;
    user: {
      name: string;
      image: string;
      email: string;
      id: string;
    };
  }[];
};

export type Posts = Post[]