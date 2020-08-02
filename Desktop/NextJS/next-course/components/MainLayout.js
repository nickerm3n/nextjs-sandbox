import Link from "next/link";
import Head from "next/head";

export function MainLayout({children, title = "Next App"}) {

  return (
    <>
      <Head>
        <title>{title}</title>
        <link href="https://fonts.googleapis.com/css2?family=Roboto&family=ZCOOL+KuaiLe&display=swap" rel="stylesheet" />
      </Head>
      <nav>
        <Link href={"/"}><a>Home</a></Link>
        <Link href={"/about"}><a>About</a></Link>
        <Link href={"/posts"}><a>Posts</a></Link>
      </nav>
      <main>
        {children}
      </main>
      <style jsx>{`
        nav {
          position: fixed;
          top: 0;
          left:0;
          width: 100%;
          height: 60px;
          display: flex;
          justify-content: space-around;
          align-items: center;
          background: darkblue;
          color: #fff;
        }
        
        nav a {
          color: #fff;
          text-decoration: none;
        }

        main {
          margin-top: 60px
        }
      `}

      </style>
    </>
  )
}