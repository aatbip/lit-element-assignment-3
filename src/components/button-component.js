/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */

import { LitElement, html, css } from 'lit';

import '@polymer/paper-button/paper-button.js';

export class ButtonComponent extends LitElement {
  static get styles() {
    return css`
      .buttons {
        margin-top: 5px;
      }
      .create-button {
        background-color: #ff0062;
        color: white;
        height: 30px;
        padding: 8px;
      }

      .cancel-button {
        color: black;
      }
    `;
  }

  render() {
    return html`
      <div class="buttons">
        <paper-button toggles raised class="create-button">
          CREATE
        </paper-button>
        <paper-button class="cancel-button"> CANCEL </paper-button>
      </div>
    `;
  }
}

customElements.define('button-component', ButtonComponent);
