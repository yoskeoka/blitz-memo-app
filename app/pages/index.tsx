import { Link, BlitzPage } from "blitz"
import Layout from "app/layouts/Layout"

import { Suspense } from "react"
import UserInfo from "app/components/UserInfo"

/*
 * This file is just for a pleasant getting started page for your new app.
 * You can delete everything in here and start from scratch if you like.
 */

const Home: BlitzPage = () => {
  return (
    <div className="container">
      <main>
        <div className="logo">
          <img src="/logo.png" alt="blitz.js" />
        </div>
        <div className="buttons" style={{ marginTop: "1rem", marginBottom: "1rem" }}>
          <Suspense fallback="Loading...">
            <UserInfo />
          </Suspense>
        </div>
        <div>
          <p>
            and go to{" "}
            <Link href="/memos">
              <a>/memos</a>
            </Link>
          </p>
        </div>
      </main>
    </div>
  )
}

Home.getLayout = (page) => <Layout title="Home">{page}</Layout>

export default Home
