import React from 'react';

const Features = () => (
  <section className="feature">
    <h2 class="heading--secondary center-text margin-bottom-big">Skills</h2>
    <div className="row">
      <div className="col-1-of-2">
        <div className="feature__box">       
          <i className="feature__box--icon icon-basic-floppydisk"></i>
          <h3 className="margin-bottom-small heading-tertiary">Tech</h3>
          <p className="feature__box--text">
            I am a serial technologists. Born and raised in the tech era just like you.
          </p>
        </div>
      </div>

      <div className="col-1-of-2">
        <div className="feature__box">        
          <i className="feature__box--icon icon-basic-pencil-ruler"></i>
          <h3 className="margin-bottom-small heading-tertiary">Creative</h3>
          <p className="feature__box--text">
            Inspired by trend-setting artists. Each a master of their craft - fluent and amazing.
          </p>
        </div>
      </div>
    </div>
  </section>
);

export default Features;