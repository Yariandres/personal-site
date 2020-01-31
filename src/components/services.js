import React from 'react';


const Services = () => (

  <section className="services">
    
    <div className="row">
      <div className="col-2-of-4">
      <h1 className="heading--secondary services__text--left center-text">What I do</h1>
      </div>
      <div className="col-1-of-4">
        <h3 className="margin-bottom-small heading-tertiary">Wed-Design Brand
        Building</h3>
        <p className="feature__box--text paragraph">
          Everything that makes you different.
          Positioning, messaging, naming, branding, visual storytelling, and
          on-going communications.
          </p>
      </div>

      <div className="col-1-of-4">
        <h3 className="margin-bottom-small heading-tertiary">Developement &
        Monetization</h3>
        <p className="feature__box--text paragraph">
          Everything that makes you money.
          Premium content creation, campaign management, growth hacking, and demand generation.
          </p>
      </div>
    </div>
  </section>
);

export default Services;