/* Imports */
import React from 'react';

const Footer = props => {
  return (
    <footer className="copyright">
      

      <a onClick={props.showInfo}>About this app</a>
      <p className="has-text-grey is-size-7">Pedro Lima © 2018</p>

      <div className="columns is-mobile is-centered">
        <a className="is-link is-size-7 column is-narrow" href="https://bulma.io/" title="Bulma CSS Framework">Bulma</a>
        <a className="is-link is-size-7 column is-narrow" href="https://reactjs.org/" title="React JS">React</a>
      </div>

    </footer>
  );
};

export default Footer;