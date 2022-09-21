import { html } from "lit";

import "../index.js";

export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/web-components/configure/overview
   * to learn how to generate automatic titles
   */
  title: "Button",
};

const Template = ({ text }) => html` <my-button .text=${text}></my-button> `;

export const Default = Template.bind({});
Default.args = {
  text: "Click me please!",
};
