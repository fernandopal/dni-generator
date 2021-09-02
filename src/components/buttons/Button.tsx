import { Component, Show } from 'solid-js';

const InputButton: Component<{ btnText?: string; css?: string; onclick?; ref? }> = props => {
  return (
    <button className={`btn btn-secondary ${props.css}`} type="button" ref={props.ref} onclick={props.onclick}>
      <Show when={!props.btnText} fallback={props.btnText}>
        <i class="far fa-copy m-1"></i>
      </Show>
    </button>
  );
};

export default InputButton;
