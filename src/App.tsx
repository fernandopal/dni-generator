import { Component, createSignal } from 'solid-js';
import { AnalyticsInstance } from 'analytics';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Button from './components/buttons/Button';
import InputButton from './components/buttons/InputButton';
import { generate } from './NIF';

const App: Component<{ /**analytics: AnalyticsInstance*/ }> = props => {
  /**const { analytics } = props;

  analytics.page();*/

  const [nif, setNif] = createSignal(generate(/**props.analytics*/));

  //Generate NIF
  const handleClickGenerate = () => {
    setNif(generate(/**props.analytics*/));
  };

  //Generate a new NIF & copy it to clipboard
  const handleClickCopy = () => {
    //Call the function to generate a new NIF
    handleClickGenerate();

    //Temporal imput to copy the nif
    let tmp = document.createElement('input');
    tmp.value = nif();
    document.body.appendChild(tmp);
    
    //Copy the nif
    tmp.setSelectionRange(0, 99999);
    tmp.select();
    document.execCommand('copy');

    //Remove the temporal input
    document.body.removeChild(tmp);
  };

  return (
    <div className="bg-dark text-light text-center position-relative h-100">
      <Header />

      <div className="container h-100">
        <div className="row justify-content-md-center h-100">
          <div className="col-sm-12 col-md-10 col-lg-6 col-xl-5">
            <div className="content d-flex justify-content-center align-items-center align-self-center">
              <div>
                <h1 className="text-light">Random DNI/NIF Generator</h1>
                <div className="form-group">
                  <InputButton btnText="Gen & Copy" inputVal={nif()} onclick={handleClickCopy} />
                </div>

                <div className="container-fluid p-0 mt-2">
                  <div className="row">
                    <div className="col-md-3 pe-md-1 pb-2">
                      <select className="form-select bg-secondary border-secondary" name="country" id="country" onchange={handleClickGenerate}>
                        <option value="ES" selected>
                          Spain
                        </option>
                        <option value="PT">Portugal</option>
                      </select>
                    </div>
                    <div className="col-md-9 ps-md-1">
                      <Button btnText="Generate" onclick={handleClickGenerate} css="form-control" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default App;
