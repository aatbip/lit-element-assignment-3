/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */

import { LitElement, html, css } from 'lit';

import '@vaadin/vaadin-date-picker/vaadin-date-picker.js';

export class DatePickerComponent extends LitElement {
  static get styles() {
   return css`
      vaadin-date-picker {
        width: 100%;
      }
    `;
  }
  constructor() {
    super();
  }

  render() {
    return html` <vaadin-date-picker label="date"> </vaadin-date-picker> `;
  }
}

customElements.define('date-component', DatePickerComponent);
