import { LitElement, html, css } from "lit";

export class MyButton extends LitElement {
  static get properties() {
    return {
      text: {
        type: String,
        reflect: true,
      },
    };
  }

  static get styles() {
    return [
      css`
        button {
          background-color: salmon;
          color: white;
          border: none;
          outline: none;
          box-shadow: none;
        }
      `,
    ];
  }

  render() {
    return html`<button>${this.text}</button>`;
  }
}
customElements.define("my-button", MyButton);
