/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */

import { LitElement, html, css } from 'lit';
import '@polymer/paper-input/paper-input.js';

export class PaperInputComponent extends LitElement {
  static get styles() {
    return css`
      paper-input {
        width: 48%;
        float: right;
      }

      #paper-input-to-left {
        width: 48%;
        float: left;
      }
    `;
  }

  static get properties() {
    return {
      /**
       * The name to say "Hello" to.
       *
       * @type {string}
       */
      name: { type: String },

      /**
       * The number of times the button has been clicked.
       *
       * @type {number}
       */
      count: { type: Number },
    };
  }

  constructor() {
    super();
  }

  render() {
    return html`
      <paper-input id="paper-input-to-left" label="name" value=""></paper-input>
      <paper-input label="Ligands Promoted" value=""></paper-input>
      <paper-input
        id="paper-input-to-left"
        label="description"
        value=""
      ></paper-input>
      <paper-input
        label="Total Ligands in Binding Group"
        value=""
      ></paper-input>
    `;
  }
}

customElements.define('paper-input-component', PaperInputComponent);
