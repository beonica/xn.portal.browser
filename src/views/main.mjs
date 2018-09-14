import { h } from "hyperapp"; // eslint-disable-line

import { Jumbotron } from "./jumbotron.mjs";

import "./main.css";
import "./signin.css";

export const Main = () => (state, actions) => (
  <main>
    <Jumbotron />

    <div class="container">
      <div class="row justify-content-md-center">
        <div class="col col-lg-6">
          <form>
            <div class="form-group">
              <input
                class="form-control form-control-lg"
                id="colFormLabelLg"
                oninput={({ target: { value } }) =>
                  actions.inputUUID({ value })
                }
                placeholder="Por favor, insira aqui seu código de cliente"
                type="text"
              />
            </div>
          </form>
        </div>
      </div>
      <hr />
      <br />
    </div>

    <div class="container">
      <div class="row">
        <div class="col-md-6">
          <h2>Contextos</h2>
          <p>
            Veja e crie grupos de produtos, como categorias, coleções etc. Donec
            id elit non mi {state.uuid} porta gravida at eget metus. Fusce
            dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh,
            ut fermentum massa justo sit amet risus. Etiam porta sem malesuada
            magna mollis euismod. Donec sed odio dui.{" "}
          </p>
          <p>
            <a
              class="btn btn-outline-dark"
              href={`https://beon-static-context-app-browser/?client=${
                state.uuid
              }`}
              role="button"
            >
              Controle seus contextos &raquo;
            </a>
          </p>
        </div>
        <div class="col-md-6">
          <h2>Catálogo</h2>
          <p>
            Veja e crie regiões com conteúdo personalizado em suas páginas.
            Donec id elit non mi porta gravida at eget metus. Fusce dapibus,
            tellus ac cursus commodo, tortor mauris condimentum nibh, ut
            fermentum massa justo sit amet risus. Etiam porta sem malesuada
            magna mollis euismod. Donec sed odio dui.{" "}
          </p>
          <p>
            <a
              class="btn btn-outline-dark"
              href={`https://beon-static-catalog-app-browser/?client=${
                state.uuid
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
