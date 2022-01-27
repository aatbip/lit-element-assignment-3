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

  render() {
    return html`
      <paper-input id="paper-input-to-left" label="Name" value=""></paper-input>
      <paper-input label="Ligands Promoted" disabled value="24"></paper-input>
      <paper-input
        id="paper-input-to-left"
        label="Description"
        value=""
      ></paper-input>
      <paper-input
        label="Total Ligands in Binding Group"
        disabled
        value="100"
      ></paper-input>
    `;
  }
}

customElements.define('paper-input-component', PaperInputComponent);
