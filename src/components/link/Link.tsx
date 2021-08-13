import { Component } from 'solid-js';

const Link: Component<{ url: string; text: string }> = props => {
  return (
    <a href={props.url} className="text-decoration-none" rel="noopener" target="_blank">
      {props.text}
    </a>
  );
};

export default Link;
