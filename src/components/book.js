import React from 'react';

const Book = () => (
<section className="section-book">
  <div className="row">
    <div className="book">
      <div className="book__form">

        <h3 className="center-text margin-bottom-small heading--secondary">
          Lets chat!
        </h3>

          <form action="#" className="form">
            <div className="form__group">
              <input type="text" className="form__input" id="name" placeholder="Full Name" required/>
              <label for="name" className="form__label">Full name</label>
            </div>

            <div className="form__group margin-bottom-meduim">
              <input type="email" className="form__input" id="email" placeholder="Email" required/>
              <label for="email" className="form__label">Email</label>
            </div>


            <div className="form__group">
              <button className="btn">Send &rarr;</button>
            </div>
          </form>
      </div>
    </div>
  </div>

</section>
);

export default Book;