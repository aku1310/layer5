import React from "react";
import { ThemeProvider } from "styled-components";

import Layout from "../../components/layout";
import SEO from "../../components/seo";

import Navigation from "../../sections/Navigation";
import SMPPage from "../../sections/SMP";
import Footer from "../../sections/Footer";

import { GlobalStyle } from "../../sections/app.style";
import theme from "../../theme/app/themeStyles";

const SMP = () => (
  <ThemeProvider theme={theme}>
    <Layout>
      <GlobalStyle />
      <SEO title="Service Mesh Performance (SMP)" description="Measuring and indexing the performance, overhead, and value of the world's service mesh deployments." />
      <Navigation />
      <SMPPage />
      <Footer/>
    </Layout>
  </ThemeProvider>
);
export default SMP;
