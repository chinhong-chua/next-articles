import Layout from "@/components/Layout";
import { AppProps } from "next/app";
import { FunctionComponent } from "react";

const AppLayout: FunctionComponent<AppProps> = ({ Component, pageProps }) => {
  return (
    <Layout>
      <Component {...pageProps}></Component>
    </Layout>
  );
};

export default AppLayout;
