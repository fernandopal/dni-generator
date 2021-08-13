import { Component } from 'solid-js';

import './Link.scss';

const Link: Component<{ url: string; text: string }> = props => {
  return (
    <a href={props.url} className="text-decoration-none text-danger" rel="noopener" target="_blank">
      {props.text}
    </a>
  );
};

export default Link;
