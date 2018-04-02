/* Imports */
import React from 'react';

const Footer = () => {
  return (
    <footer className="container copyright">
      <p className="is-size-7">Pedro Lima © 2018 | Built with:</p>

      <div className="columns is-mobile is-centered">
        <a className="is-link is-size-7 column is-narrow" href="https://bulma.io/" title="Bulma CSS Framework">Bulma</a>
        <a className="is-link is-size-7 column is-narrow" href="https://reactjs.org/" title="React JS">React</a>
      </div>

    </footer>
  );
};

export default Footer;