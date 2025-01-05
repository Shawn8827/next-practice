import Layout from "@/components/Layout";
import Link from "next/link";

export default function Posts() {
  return (
    <Layout>
      <div>
        <h1>This is Post 首頁 </h1>
        <Link href="./posts/edit-post">前往 Edit Post </Link>
      </div>
    </Layout>
  );
}
