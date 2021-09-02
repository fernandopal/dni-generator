import { Component, For } from 'solid-js';
import InputButton from '../buttons/InputButton';

import './NifHistory.scss';

const NifHistory: Component<{ nifHistory: string[] }> = props => {
  return (
    <div className="position-absolute top-50 end-0 translate-middle-y darken p-3 h-75 header rounded nif-history-container" style="overflow-y: scroll; overflow-x: hidden; margin-right: .5em;">
      <h4 className="text-light">Nif generation history</h4>
      <div className="d-flex flex-column">
        <For each={props.nifHistory}>{nif => <InputButton inputVal={nif} />}</For>
      </div>
    </div>
  );
};

export default NifHistory;
