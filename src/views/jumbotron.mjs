import { h } from "hyperapp"; // eslint-disable-line

import "./jumbotron.css";

export const Jumbotron = () => (
  <div class="jumbotron">
    <div class="container">
      <h1 class="display-3">Ocean Drop, bem-vindo ao Beon!</h1>
      <p>
        This is a template for a simple marketing or informational website. It
        includes a large callout called a jumbotron and three supporting pieces
        of content. Use it as a starting point to create something more unique.
      </p>
      {/* <form>
        <div class="form-row align-items-center">
          <div class="col-auto">
            <label class="sr-only" for="inlineFormInput">
              Código de cliente
            </label>
            <input
              class="form-control mb-2"
              id="inlineFormInput"
              oninput={({ target: { value } }) => actions.inputUUID({ value })}
              type="text"
            />
          </div>
          <div class="col-auto">
            <div class="form-check mb-2">
              <input
                class="form-check-input"
                type="checkbox"
                id="autoSizingCheck"
              />
              <label class="form-check-label" for="autoSizingCheck">
                Lembrar meu código de cliente
              </label>
            </div>
          </div>
          <div class="col-auto">
            <button type="submit" class="btn btn-outline-dark mb-2">
              Ativar
            </button>
          </div>
        </div>
      </form> */}
    </div>
  </div>
);
