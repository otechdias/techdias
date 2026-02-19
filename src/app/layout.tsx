import type { Metadata } from "next";
import { Sora } from "next/font/google";
import "./globals.scss";

const sora = Sora({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "otimizare",
  description: "gestão de marketing",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-KKQN93XQ');
            `,
          }}
        />
        <meta
          name="facebook-domain-verification"
          content="vz1dttao5o38o50tyg2o4wmfw6tjwe"
        />
      </head>
      <body className={sora.className}>
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-KKQN93XQ"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>
        {children}
      </body>
    </html>
  );
}
