import Layout from "../../components/layout";
import { getAllPostIds, getPostData } from "../../lib/posts";
import Head from "next/head";
import Date from "../../components/date";
import utilStyles from "../../styles/utils.module.css";
import { GetStaticProps, GetStaticPaths } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

export default function Post({
  locale,
  postData,
}: {
  locale:string,
  postData: {
    title: string;
    date: string;
    contentHtml: string;
  };
}) {
  return (
    <Layout>
      <Head>
        <title>{postData.title}</title>
      </Head>
      <article>
        <h1 className={utilStyles.headingXl}>{postData.title}</h1>
        <div className={utilStyles.lightText}>
          <Date dateString={postData.date} locale={locale}/>
        </div>
        <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
      </article>
    </Layout>
  );
}

export const getStaticPaths: GetStaticPaths = async ({ locales }) => {
  const paths = getAllPostIds(locales);
  // const paths = [
  // { params: { id: 'pre-rendering' }, locale: 'en' },
  // { params: { id: 'ssg-ssr' }, locale: 'en' },
  // { params: { id: 'pre-rendering' }, locale: 'de' },
  // { params: { id: 'ssg-ssr' }, locale: 'de' }
  // ];
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params, locale }) => {
  const postData = await getPostData(params.id as string, locale as string);
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
      locale,
      postData,
    },
  };
};
