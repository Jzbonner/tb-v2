import Head from "next/head"
import Navigation from "../components/navigation"
import Header from "../components/header"
import Overview from "../components/overview"

export default function Home() {
  return (
    <div>
      <Head>
        <title>Think.Broadly.</title>
        <meta name="description" content="a blog about things" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="container">
        <Navigation />
        <Header />
        <Overview />
      </div>
    </div>
  )
}
