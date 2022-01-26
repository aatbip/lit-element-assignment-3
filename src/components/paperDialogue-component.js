/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */

import { LitElement, html, css } from 'lit';

import '@polymer/paper-dialog/paper-dialog.js';

import '@polymer/paper-dialog-scrollable/paper-dialog-scrollable.js';

export class PaperDialogueComponent extends LitElement {
  static get styles() {
    css`
      section {
        width: 100%;
        height: 300px;
        @apply --layout-vertical;
      }
      section paper-dialog-scrollable {
        @apply --layout-flex;
      }
    `;
  }
  constructor() {
    super();
  }

  render() {
    return html`
      <section>
        <paper-dialog-scrollable> </paper-dialog-scrollable>
      </section>
    `;
  }
}

customElements.define('paper-dialogue-component', PaperDialogueComponent);
