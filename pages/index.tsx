import Link from "next/link";
import { useRouter } from "next/router";
import Date from "../components/date";
import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";
import { getSortedPostsData } from "../lib/posts";
import { GetStaticProps } from "next";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

export default function Home({
  allPostsData,
}: {
  allPostsData: {
    date: string;
    title: string;
    id: string;
  }[];
}) {
  const router = useRouter();
  const { t } = useTranslation("common");

  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <Link href="/" locale={router.locale === "en" ? "cn" : "en"}>
        <button data-cy='change'>{t("change-locale")}</button>
      </Link>
      <section className={utilStyles.headingMd}>
        <p>
          {t("introduce")} <b>Mini</b>.
          <br />
          {t("greeting")}
        </p>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>
          <Link href={`/blog`}>
            <a>{t("blog")}</a>
          </Link>
        </h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/posts/${id}`}>
                <a>{title}</a>
              </Link>
              <br />
              <small className={utilStyles.lightText}>
                <Date dateString={date} locale={router.locale}/>
              </small>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
}

export async function getStaticProps({ locale }) {
  const allPostsData = getSortedPostsData(locale);
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
      allPostsData,
    },
  };
}
