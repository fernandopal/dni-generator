import { Component } from 'solid-js';
import Button from './Button';

const InputButton: Component<{ btnText?: string; inputVal: string; onclick?; ref? }> = props => {
  const handleClickCopy = () => {
    //Temporal imput to copy the value
    let tmp = document.createElement('input');
    tmp.value = props.inputVal;
    document.body.appendChild(tmp);

    //Copy the input value
    tmp.setSelectionRange(0, 99999);
    tmp.select();
    document.execCommand('copy');

    //Remove the temporal input
    document.body.removeChild(tmp);

    //Execute the onclick function if there is any
    props.onclick?.();
  };

  return (
    <div className="input-group mb-2">
      <input className="form-control form-control-lg text-center border-0 rounded-1" type="text" value={props.inputVal} readonly />
      <Button btnText={props.btnText} onclick={handleClickCopy} ref={props.ref} css="btn-sm fs-5" />
    </div>
  );
};

export default InputButton;
