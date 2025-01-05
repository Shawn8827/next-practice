import Head from "next/head";
import Link from "next/link";
import styles from "./layout.module.css";

const name = "shawnlll";
const webTitle = "next.js practice";

export default function Layout({ children, returnBack }) {
  return (
    <div>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="author" content="Shawn" />
      </Head>
      <header>
        <h1>Welcome to {name} web </h1>
        <h2>This is the web for {webTitle}</h2>
        <hr />
      </header>
      <main>{children}</main>
      {returnBack && (
        <Link styles="" href="/">
          <h2>回首頁！</h2>
        </Link>
      )}
    </div>
  );
}
