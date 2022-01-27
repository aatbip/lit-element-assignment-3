/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */

import { LitElement, html, css } from 'lit';

import '@polymer/paper-checkbox/paper-checkbox.js';

export class PaperDialogueComponent extends LitElement {
  static get styles() {
    return css`
      * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
      }

      p {
        color: #737373;
      }

      .container {
        margin-top: 15px;
      }
      .binding-group {
        width: 100%;
        border: 1px solid #737373;
        border-radius: 5px;
        padding: 5px;
        margin-top: 10px;

        height: 130px;
        overflow-y: auto;
        overflow-x: hidden;
      }

      .checkbox {
        width: 100%;
        padding: 5px 5px;
      }

      ::-webkit-scrollbar {
        width: 15px;
      }

      ::-webkit-scrollbar-thumb {
        background-color: rgb(186, 186, 192);
        border-radius: 20px;
        border: 5px solid #fff;
      }

      li {
        list-style-type: none;
      }

      li:nth-child(odd) {
        background-color: #f5f5f5;
      }
      li:nth-child(even) {
        background-color: white;
      }
    `;
  }
  constructor() {
    super();

    this.bindingGroups = [
      'BRD2 Affinity_High_Affinity',
      'BRD2 AMP_PNP_competitive',
      'BRD2 NRX-0459676_non-competitive',
      'BRD3 Affinity_High_Affinity',
      'BRD3 AMP_PNP_competitive',
      'BRD# NRX-0459676_non-competitive',
    ];
  }

  render() {
    return html`
      <div class="container">
        <p>Binding Group</p>
        <div class="binding-group">
          ${this.bindingGroups.map(
            (info) => html`
              <li>
                <paper-checkbox noink class="checkbox">${info} </paper-checkbox>
              </li>
              <br />
            `
          )}
        </div>
      </div>
    `;
  }
}

customElements.define('paper-dialogue-component', PaperDialogueComponent);
