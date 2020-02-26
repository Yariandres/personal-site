import React from 'react';

import Natalia from '../images/ns.jpeg';
import Upstreet from '../images/upstreet.jpg';

const Stories = () => (
  <section className="stories">
    <div className="center-text margin-bottom-big">
      <h2 className="heading--secondary">Happy Stories</h2>
    </div>

    <div className="row">
      <div className="story">
        <figure className="story__shape">
          <img src={ Natalia } alt="Natalia" className="story__img"/>
          <figcaption className="story__caption">
            Natalia S
          </figcaption>
        </figure>
        <div className="story__text">
          <h3 className="margin-bottom-small heading-tertiary">Custom CMS Blog System</h3>
          <p className="paragraph">
          We are an NGO based in Poland for babywearing parents. We reached out to Yari for custom CMS blog. We needed a website to display our content and a back-end system to log-in and manage everything - Yari did an excellent Job! He went beyond our expectation to help and took the time to really understand the exact solution we were looking for. We highly recommend him.  
          </p>
        </div>
      </div>
    </div>

    <div className="row">
    <div className="story">
      <figure className="story__shape">
        <img src={ Upstreet } alt="Yari" className="story__img"/>
        <figcaption className="story__caption">
          Upstreet
        </figcaption>
      </figure>
      <div className="story__text">
        <h3 className="margin-bottom-small heading-tertiary">Custom Development</h3>
        <p className="paragraph">
          Yari is a pleasure to work with, super knowledgeable and genuinely loves to help. His abilities go beyond technical, Yari understand all aspects of a business. He is on the cutting edge of emerging developments. I rely on his expertise and plan to do so going forward into the future. Highly recommended!
        </p>
      </div>
    </div>
  </div>
  </section>

);

export default Stories;