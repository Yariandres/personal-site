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
          My objective is to empower businesses with their online strategies through powerful, custom websites or software solutions. I aim to strive for 100% satisfaction because we see all my business relationships as long-term win-win partnerships.
          </p>
        </div>
      </div>
    </div>
    </section>
    
    <Book/>
  </Layout>

  );


export default about;
