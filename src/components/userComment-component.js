/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */

import { LitElement, html, css } from 'lit';

import '@polymer/paper-input/paper-textarea.js';

export class UserCommentComponent extends LitElement {
  static get styles() {
    return css`
      paper-textarea {
        margin-top: 15px;
      }
    `;
  }

  render() {
    return html`
      <paper-textarea
        label="Comments"
        always-float-label
        rows="2"
      ></paper-textarea>
    `;
  }
}

customElements.define('user-comment-component', UserCommentComponent);
