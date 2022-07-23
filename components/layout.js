import Head from "next/head";

import styles from "./layout.module.css";

export const name = "Dimitri Prosper";
export const siteTitle = "maisonprosper.com";

export default function Layout({ children, home }) {

  return (
    <div className={styles.container}>
      <Head>
        {/* Global site tag (gtag.js) - Google Analytics */}
        {process.env.NODE_ENV == "production" &&
          <script
            async
            src="https://www.googletagmanager.com/gtag/js?id=G-B0JK3P280H"
          ></script>
        }
        {process.env.NODE_ENV == "production" &&
          <script
            dangerouslySetInnerHTML={{
              __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-B0JK3P280H', {
               page_path: window.location.pathname,
             });
         `,
            }}
          />
        }        
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="My journey through technology"
        />
        <meta property="og:site_name" content={siteTitle} />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="@dprosper" />
        <meta name="twitter:creator" content="@dprosper" />

        {home && (
          <>
            <meta property="og:title" content={siteTitle} key="ogtitle" />
            <meta property="og:type" content="website" />
            <meta property="og:url" content="https://maisonprosper.com" />
            <meta property="og:image:width" content="279" />
            <meta property="og:image:height" content="279" />
            <meta property="og:image" content="https://maisonprosper.com/images/profile.jpg" key="ogimage" />
            <meta property="og:description" content="My journey through technology" key="ogdesc" />
          </>
        )}
      </Head>
      <main>{children}</main>
    </div>
  );
}
