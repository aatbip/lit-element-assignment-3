/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */

import { LitElement, html, css } from 'lit';

import './paperInput-component';
import './dataPicker-component';
import './paperDialogue-component';
import './userComment-component';
import './button-component';

import '@polymer/paper-dialog/paper-dialog.js';

import '@polymer/paper-dialog-scrollable/paper-dialog-scrollable.js';

export class MainComponent extends LitElement {
  static get styles() {
    return css`
      .container {
        width: 100%;
      }

      .wrapper {
        width: 60%;
        margin: 0 auto;
        box-shadow: 0 8px 4px 1px gray;
        padding: 20px 20px;
      }
    `;
  }

  render() {
    return html`
      <div class="container">
        <div class="wrapper">
          <h1>Create Binding Group</h1>
          <paper-input-component></paper-input-component>
          <date-component></date-component>
          <paper-dialogue-component></paper-dialogue-component>
          <user-comment-component></user-comment-component>
          <button-component></button-component>
        </div>
      </div>
    `;
  }
}

customElements.define('main-component', MainComponent);
