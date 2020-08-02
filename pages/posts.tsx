import {MainLayout} from "../components/MainLayout";
import Link from "next/link";
import {useState, useEffect} from "react"
import {MyPost} from "../interfaces/post";
import {NextPageContext} from "next";

interface PostsPageProps {
    posts: MyPost[]
}

export default function Posts({posts:serverPost}: PostsPageProps) {
  const [posts, setPosts] = useState(serverPost);

  useEffect(()=> {
    const load = async () => {
        const response = await fetch("http://localhost:4200/posts");
        const json = await response.json();
        setPosts(json);
    };

    if (!serverPost) {
      load()
    }
  }, []);

  if(!posts) {
    return <MainLayout>Loading...</MainLayout>
  }

  return (
    <MainLayout title={"Posts Page"}>
      <h1>Post Page</h1>
      <ul>
        {
          posts.map((post)=> {
            return (
              <li key={post.id}>
                <Link href={`/post/[id]`} as={`/post/${post.id}`}><a>{post.title}</a></Link>
              </li>
            )
          })
        }
      </ul>
    </MainLayout>
  )
}

Posts.getInitialProps = async (ctx: NextPageContext) => {

  if(!ctx.req) {
    return { posts: null }
  }

  const response = await fetch("http://localhost:4200/posts");
  const json: MyPost[] = await response.json();
  return { posts: json }
};