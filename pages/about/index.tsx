import Router from "next/router";
import {MainLayout} from "../../components/MainLayout";

export default function Index() {
  return (
    <MainLayout  title={"About Page"}>
      <h1>About Page</h1>
      <button onClick={() => Router.push("/")}>Go back to Home</button>
    </MainLayout>
  )
}