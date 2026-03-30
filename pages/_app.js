// pages/_app.js

import "@/styles/globals.css";
import Layout from "@/components/Layout";
import { Analytics } from "@vercel/analytics/next";

export default function App({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
      <Analytics />
    </Layout>
  );
}
