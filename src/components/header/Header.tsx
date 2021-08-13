import { Component } from 'solid-js';

import Link from '../link/Link';

const Header: Component<{}> = () => {
  return (
    <div className="position-absolute top-0 darken p-2 w-100">
      <Link url="https://www.linkedin.com/in/fernandopm00" text="LinkedIn" />
      &nbsp;&bullet;&nbsp;
      <Link url="https://github.com/fernandopal" text="GitHub" />
    </div>
  );
};

export default Header;
