import { Component, createSignal } from 'solid-js';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Button from './components/buttons/Button';
import InputButton from './components/buttons/InputButton';
import NifHistory from './components/nif-history/NifHistory';
import { generateNIF } from './NIF';

const App: Component<{}> = () => {
  const [getCountry, setCountry] = createSignal('ES'); //By default the country is set to Spain
  const [isNewNifOnCopyChecked, setNewNifOnCopy] = createSignal(true);
  const [getNif, setNif] = createSignal(generateNIF(getCountry()));
  const [getNifHistory, setNifHistory] = createSignal([]);

  //Generate NIF
  const handleClickGenerate = () => setNif(generateNIF(getCountry())) && saveNif();

  //Generate new nif on country change
  const handleSelectionChange = e => setCountry(e.target.value) && handleClickGenerate();

  //Toggle on/off auto generation on nif copy
  const handleToggleAutoNif = () => setNewNifOnCopy(!isNewNifOnCopyChecked());

  //Save NIF to history
  const saveNif = () => setNifHistory([getNif(), ...getNifHistory()]);

  //Generate a new NIF & copy it to clipboard
  const handleClickCopy = () => isNewNifOnCopyChecked() && handleClickGenerate();

  return (
    <div className="bg-dark text-light text-center position-relative h-100">
      <Header />

      <div className="container h-100">
        <div className="row justify-content-md-center h-100">
          <div className="col-sm-12 col-md-10 col-lg-6 col-xl-5">
            <div className="content d-flex justify-content-center align-items-center align-self-center">
              <div className="container-fluid p-0 mt-2">
                <h1 className="text-light">Random DNI/NIF Generator</h1>

                <div className="row">
                  <div className="col">
                    <div className="form-group">
                      <InputButton inputVal={getNif()} onclick={handleClickCopy} />
                    </div>
                  </div>
                </div>

                <div className="row">
                  <div className="col-md-3 pe-md-1 pb-2">
                    <select className="form-select bg-secondary border-secondary" name="country" onchange={handleSelectionChange}>
                      <option value="ES">Spain</option>
                      <option value="PT">Portugal</option>
                    </select>
                  </div>
                  <div className="col-md-9 ps-md-1">
                    <Button btnText="Generate" onclick={handleClickGenerate} css="form-control" />
                  </div>
                </div>

                <div className="row">
                  <div className="col">
                    <div class="form-switch p-2">
                      <input class="form-check-input" type="checkbox" checked onchange={handleToggleAutoNif} />
                      <label class="form-check-label ms-2">Generate new NIF on copy</label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <NifHistory nifHistory={getNifHistory() as string[]} />

      <Footer />
    </div>
  );
};

export default App;
