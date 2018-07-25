import Layout from "../components/MyLayout";
import Link from "next/link";

const PostLink = props => (
  <li>
    <Link href={`/post?title=${props.title}`}>
      <a>{props.title}</a>
    </Link>
  </li>
);

const Index = () => (
  <Layout>
    <main>
      <h1>Welcome to next.js!</h1>
      <ul>
        <PostLink title="Hello Next.js" />
        <PostLink title="Learn Next.js is awsome" />
        <PostLink title="Deploy apps with Zeit" />
      </ul>
    </main>
  </Layout>
);

export default Index;
