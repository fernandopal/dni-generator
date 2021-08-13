import { Component } from 'solid-js';

const InputButton: Component<{ btnText: string; onclick; css: string }> = props => {
  return (
    <button className={`btn btn-secondary ${props.css}`} type="button" id="copy" onclick={props.onclick}>
      {props.btnText}
    </button>
  );
};

export default InputButton;
