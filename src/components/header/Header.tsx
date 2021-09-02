import { Component } from 'solid-js';

import Link from '../link/Link';
import './Header.scss';

const Header: Component<{}> = () => {
  return (
    <div className="position-absolute top-0 darken p-2 w-100 header">
      <Link url="mailto:mail@fernandopal.es" text="[ Contact ]" />
      <Link url="https://www.linkedin.com/in/fernandopm00" text="[ LinkedIn ]" />
      <Link url="https://github.com/fernandopal" text="[ GitHub ]" />
      <Link url="https://www.fernandopal.es" text="[ My Website ]" />
    </div>
  );
};

export default Header;
