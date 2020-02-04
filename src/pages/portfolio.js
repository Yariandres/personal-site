import React from 'react';

import Layout from "../components/layout";
import SEO from "../components/seo";
import Gallery from "../components/gallery";

const Portfolio = () => 
  (
    <Layout>
    
      <SEO title="Portfolio" />
      <Gallery />     
    </Layout>  
  );

export default Portfolio;
