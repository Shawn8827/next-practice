import Layout from "@/components/Layout";
import Link from "next/link";

export default function Home() {
  return (
    <Layout>
      <div>
        <h1>This is HOME page </h1>
        <Link className="" href="./newPage">
          前往 new page
        </Link>
        <br />
        <Link className="" href="./posts">
          前往 post
        </Link>
      </div>
    </Layout>
  );
}
