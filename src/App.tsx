import { Component } from 'solid-js';
import { AnalyticsInstance } from 'analytics';
import * as bootstrap from 'bootstrap';

import Header from './components/header/Header';
import Footer from './components/footer/Footer';

const App: Component<{ analytics: AnalyticsInstance }> = props => {
  props.analytics.page();

  return (
    <>
      <div className="bg-dark text-light text-center position-relative h-100">
        <Header />

        <div className="container h-100">
          <div className="row justify-content-md-center h-100">
            <div className="col-sm-12 col-md-10 col-lg-6 col-xl-5">
              <div className="content d-flex justify-content-center align-items-center align-self-center">
                <div>
                  <h1 className="text-light">Random DNI/NIF Generator</h1>
                  <div className="form-group">
                    <div className="input-group mb-3">
                      <input id="dni" className="form-control form-control-lg text-center border-0 rounded-1" type="text" value="" aria-label="Dni output field" aria-describedby="copy" readonly />
                      <button className="btn btn-primary btn-sm btn-secondary fs-5" type="button" id="copy">
                        Gen & Copy
                      </button>
                    </div>
                  </div>

                  <div className="container-fluid p-0 mt-2">
                    <div className="row">
                      <div className="col-md-3 pe-md-1 pb-2">
                        <select className="form-select bg-secondary border-secondary" aria-label="Select a country to generate the DNI number" name="country" id="country">
                          <option value="ES" selected>
                            Spain
                          </option>
                          <option value="PT">Portugal</option>
                        </select>
                      </div>
                      <div className="col-md-9 ps-md-1">
                        <button id="generate" className="btn btn-secondary text-center form-control">
                          Generate
                        </button>
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
    </>
  );
};

export default App;
