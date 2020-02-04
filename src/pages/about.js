import React from 'react';

import Book from "../components/book"
import Yari from '../images/new.png';

import Layout from "../components/layout"
import SEO from "../components/seo";

const about = () => 
 (
  <Layout>
  <SEO title="About" />  
    <section className="about-page">
      <div className="center-text margin-bottom-big">
        <h2 className="heading--secondary">Hi...</h2>
      </div>

      <div className="row">
      <div className="story">
        <figure className="story__shape">
          <img src={Yari} alt="Yari" className="story__img"/>
          <figcaption className="story__caption">
            Yari A
          </figcaption>
        </figure>
        <div className="story__text">
          <h3 className="margin-bottom-small heading-tertiary">Yari Andres - Software Engineer</h3>
          <p className="paragraph">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut beatae nulla ad dolore minus vel, distinctio obcaecati dolorum sit error autem similique commodi inventore id.  Consectetur adipisicing eli distinctio obcaecati dolorum sit error autem similique commodi inventore
          </p>
        </div>
      </div>
    </div>
    </section>
    
    <Book/>
  </Layout>

  );


export default about;
