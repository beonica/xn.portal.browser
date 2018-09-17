import { h } from "hyperapp"; // eslint-disable-line

import { Jumbotron } from "./jumbotron.mjs";

import "./main.css";

export const Main = () => (state, actions) => (
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
                  state.clientData !== null && state.clientData !== undefined
                    ? " is-valid"
                    : ""
                }${state.clientData === null ? " is-invalid" : ""}
                `}
                id="client"
                oninput={({ target: { value } }) =>
                  actions.inputClient({ value })
                }
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
          <p>Veja e crie grupos de produtos, como categorias, coleções etc.</p>
          <p>
            <a
              class="btn btn-outline-dark"
              href={`https://beon-app-context-browser-static-dev.mybluemix.net/?client=${
                state.client
              }`}
              role="button"
            >
              Controle seus contextos &raquo;
            </a>
          </p>
        </div>
        <div class="col-md-6">
          <h2>Catálogo</h2>
          <p>Veja e crie regiões com conteúdo personalizado em suas páginas.</p>
          <p>
            <a
              class="btn btn-outline-dark"
              href={`https://beon-app-catalog-browser-static-dev.mybluemix.net/?client=${
                state.client
              }`}
              role="button"
            >
              Controle seu catálogo &raquo;
            </a>
          </p>
        </div>
      </div>
      <hr />
    </div>
  </main>
);
