import {useRouter} from "next/router";
import {MainLayout} from "../../components/MainLayout";
import useSWR from 'swr'
import Link from "next/link";
import {NextPageContext} from "next";
import {MyPost} from "../../interfaces/post";

const fetcher = async (url) => {
  const res = await fetch(url);
  const data = await res.json();

  if (res.status !== 200) {
    throw new Error(data.message)
  }
  return data
};

interface PostPageProps {
  post: MyPost
}

export default function Post() {
  const { query } = useRouter();
  const { data, error } = useSWR(
    () => query.id && `http://localhost:4200/posts/${query.id}`,
    fetcher
  );

  if (error) return <div>{error.message}</div>
  if (!data) return <MainLayout>Loading...</MainLayout>

  return <MainLayout>
    <h1>{data.title}</h1>
    <hr/>
    <p>{data.body}</p>
    <Link href={"/posts"}><a>Go back to posts</a></Link>
  </MainLayout>
}

interface PostNextPageContext extends NextPageContext {
  query: {
    id: string
  }
}

Post.getInitialProps = async (ctx: NextPageContext) => {
  if (!ctx.req) {
    return { post: null }
  }

  const res = await fetch(`http://localhost:4200/posts/${ctx.query.id}`)
  const json:MyPost = await res.json();
  return { post: json }
};