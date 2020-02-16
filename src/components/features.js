import React from 'react';

const Features = () => (
  <section className="feature">
    <h2 class="heading--secondary center-text margin-bottom-big">Skills</h2>
    <div className="row">
      <div className="col-1-of-2">
        <div className="feature__box">       
          <i className="feature__box--icon icon-basic-floppydisk"></i>
          <h3 className="margin-bottom-small heading-tertiary">Technology</h3>
          <p className="feature__box--text">
            I help businesses grow faster with the right strategy and development technology.
          </p>
        </div>
      </div>

      <div className="col-1-of-2">
        <div className="feature__box">        
          <i className="feature__box--icon icon-basic-pencil-ruler"></i>
          <h3 className="margin-bottom-small heading-tertiary">Creative</h3>
          <p className="feature__box--text">
            I show companies how to increase their revenue with critical insights that makes their brand stand out.
          </p>
        </div>
      </div>
    </div>
  </section>
);

export default Features;