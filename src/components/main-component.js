/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */

import { LitElement, html, css } from 'lit';

import './paperInput-component';
import './dataPicker-component';
import './paperDialogue-component';

import '@polymer/paper-dialog/paper-dialog.js';

import '@polymer/paper-dialog-scrollable/paper-dialog-scrollable.js';

export class MainComponent extends LitElement {
  static get styles() {
    return css`
      .container {
        width: 100%;
      }

      .wrapper {
        width: 80%;
        margin: 0 auto;
      }

      paper-dialogue-component{
        width: 500px; 
        height: 500px; 
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
      <div class="container">
        <div class="wrapper">
          <h1>Create Binding Group</h1>
          <paper-input-component></paper-input-component>
          <date-component></date-component>
          <paper-dialogue-component></paper-dialogue-component>
        </div>
      </div>
    `;
  }
}

customElements.define('main-component', MainComponent);
