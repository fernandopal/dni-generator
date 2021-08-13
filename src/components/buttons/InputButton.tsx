import { Component } from 'solid-js';
import Button from './Button';

const InputButton: Component<{ btnText: string, inputVal: string, onclick }> = (props) => {
  return (
    <div className="input-group mb-2">
      <input className="form-control form-control-lg text-center border-0 rounded-1" type="text" value={props.inputVal} id={props.id} aria-describedby="copy" readonly />
      <Button btnText={props.btnText} onclick={props.onclick} css="btn-sm fs-5" />
    </div>
  );
};

export default InputButton;
