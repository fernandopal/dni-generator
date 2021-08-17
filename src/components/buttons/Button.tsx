import { Component } from 'solid-js';

const InputButton: Component<{ btnText: string; css: string; onclick?; ref?; }> = props => {
  return (
    <button className={`btn btn-secondary ${props.css}`} type="button" ref={props.ref} onclick={props.onclick}>
      {props.btnText}
    </button>
  );
};

export default InputButton;
