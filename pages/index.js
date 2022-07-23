import Head from "next/head";
import Link from "next/link";

import Layout, { name, siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingMd}>{name}</h2>
        <hr />
        <ul className={utilStyles.list}>
          <li className={utilStyles.listItem} key="blog">
            <Link href={`https://blog.maisonprosper.com`}>
              <a className={utilStyles.linkStyle}>Blog</a>
            </Link>
          </li>
          <li className={utilStyles.listItem}>
            Projects
            <ul>
              <li className={utilStyles.listItem} key="calculator">
                <Link href={`https://calculator.maisonprosper.com`}>
                  <a className={utilStyles.linkStyle}>CIDR Calculator for IBM Cloud</a>
                </Link>
              </li>
            </ul>
          </li>
        </ul>
      </section>
    </Layout>
  );
}
