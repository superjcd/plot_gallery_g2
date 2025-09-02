import Layout from "renderer/components/layout";

function Home() {
  return <div>Hi, I'm the Home screen!</div>;
}

export default function Screen() {
  return (
    <Layout>
      <Home />
    </Layout>
  );
}
