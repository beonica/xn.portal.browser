import { h } from "hyperapp"; // eslint-disable-line

import config from "../config.mjs";

import { Jumbotron } from "./jumbotron.mjs";

import "./main.css";

export const Main = () => (state, actions) => {
  if (state.clientName) {
    return (
      <main>
        <Jumbotron />

        <div class="container" hidden={state.clientData != null}>
          <div class="row justify-content-md-center">
            <div class="col col-lg-6">
              <div class="spinner" hidden={state.loadingClientData === false} />
              <form
                hidden={state.loadingClientData === true}
                style="height: 240px; padding-top: calc(120px - 24px);"
              >
                <div class="form-group">
                  <input
                    autofocus
                    class={`form-control form-control-lg${
                      state.clientData !== null &&
                      state.clientData !== undefined
                        ? " is-valid"
                        : ""
                    }${state.clientData === null ? " is-invalid" : ""}
                `}
                    id="client"
                    maxlength="36"
                    oninput={({ target }) => actions.inputClient({ target })}
                    placeholder="Por favor, insira aqui seu código de cliente"
                    style="text-align: center;"
                    type="text"
                    value={state.client}
                  />
                </div>
              </form>
            </div>
          </div>
          <hr />
        </div>

        <div class="container" hidden={state.clientData == null}>
          <div class="d-flex justify-content-center">
            <div style="width: 15rem;">
              <br />
              {state.clientData &&
                state.clientData.map(({ check, label }) => (
                  <p>
                    {check ? "\u2714 " : "\u231b "} {label}
                  </p>
                ))}
              <br />
            </div>
          </div>
          <hr />
          <div class="row">
            <div class="col-md-6">
              <h2>Contextos</h2>
              <p>
                Veja e crie grupos de produtos, como categorias, coleções etc.
              </p>
              <p>
                <a
                  class="btn btn-outline-dark"
                  href={`${config.context}?key=${state.client}`}
                  role="button"
                  target="_blank"
                >
                  Controle seus contextos &raquo;
                </a>
              </p>
            </div>
            <div class="col-md-6">
              <h2>Catálogo</h2>
              <p>
                Veja e crie regiões com conteúdo personalizado em suas páginas.
              </p>
              <p>
                <a
                  class="btn btn-outline-dark"
                  href={`${config.catalog}?key=${state.client}`}
                  role="button"
                  target="_blank"
                >
                  Controle seu catálogo &raquo;
                </a>
              </p>
            </div>
          </div>
        </div>
      </main>
    );
  }

  if (state.notFoundKey === null) {
    return (
      <main>
        <div class="container">
          <div class="mb-5 mt-5">
            <div class="alert alert-warning" role="alert">
              Chave de cliente não informada.
            </div>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main>
      <div class="container">
        <div class="mb-5 mt-5">
          <div class="alert alert-warning" role="alert">
            Chave de cliente não encontrada: <b>{state.notFoundKey}</b>.
          </div>
        </div>
      </div>
    </main>
  );
};
