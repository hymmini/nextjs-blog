import Layout from "../../components/layout";
import { NextSeo } from 'next-seo';

export default function blog() {
  return <Layout>
    <>
      <NextSeo
        title="Simple Usage Example"
        description="A short description goes here."
      />
    </>
    This is a Blog page
  </Layout>;
}
