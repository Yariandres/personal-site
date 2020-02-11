import React from 'react';

import Natalia from '../images/ns.jpeg';
import Yari from '../images/new.png';

const Stories = () => (
  <section className="stories">
    <div className="center-text margin-bottom-big">
      <h2 className="heading--secondary">Happy Stories</h2>
    </div>

    <div className="row">
      <div className="story">
        <figure className="story__shape">
          <img src={Natalia} alt="Natalia" className="story__img"/>
          <figcaption className="story__caption">
            Natalia S
          </figcaption>
        </figure>
        <div className="story__text">
          <h3 className="margin-bottom-small heading-tertiary">It was a great decision to hire Yari</h3>
          <p className="paragraph">
          We are an NGO based in Poland for baby wearing mums. We reached out to Yari to create a custom website for us to display information and content regarding what we do for example events, charity work on so on. We needed a front-end to displayed our content and a back-end admin system for us to log-in create, edit, remove content/users/admins and subscribers which Yari did an expended Job! Yari went beyond our expectation to help and really took the time to understand exactly the solution we were looking for. We highly recommend him.  
          </p>
        </div>
      </div>
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
        <h3 className="margin-bottom-small heading-tertiary">It was a great decision to hire Yari</h3>
        <p className="paragraph">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut beatae nulla ad dolore minus vel, distinctio obcaecati dolorum sit error autem similique commodi inventore id.  Consectetur adipisicing eli distinctio obcaecati dolorum sit error autem similique commodi inventore
        </p>
      </div>
    </div>
  </div>
  </section>

);

export default Stories;