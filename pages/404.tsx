import Link from "next/link";
import classes from "../styles/error.module.scss"

export default function ErrorPage() {

  return (
    <>
      <h1 className={classes.error}>Oops Error 404</h1>
      <Link href={"/"}><a>Go back safety</a></Link>
    </>
  )
}