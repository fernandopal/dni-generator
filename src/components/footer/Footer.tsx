import { Component } from 'solid-js';

import Link from '../link/Link';

const Footer: Component<{}> = () => {
  return (
    <div className="position-absolute bottom-0 darken p-2 w-100">
      <p className="text-secondary fs-5 h-100 m-0">
        Made by <Link url="https://www.fernandopal.es" text="Fernando Palomo Moreno" /> using <Link url="https://www.solidjs.com/" text="Solid.js" />
      </p>
    </div>
  );
};

export default Footer;
