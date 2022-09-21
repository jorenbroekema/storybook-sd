import { html } from "lit";

export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/web-components/configure/overview
   * to learn how to generate automatic titles
   */
  title: "Style-Dictionary",
};

export const Default = (args) => {
  const baseTokens = args.allTokens.filter(
    (token) =>
      token.type === "color" &&
      token.attributes.category === "color" &&
      token.attributes.type === "base"
  );
  return html`
    <style>
      ul {
        list-style: none;
        display: flex;
        gap: 1rem;
      }
      li {
        display: flex;
        flex-direction: column;
        width: 200px;
      }
      p {
        margin: 0.25rem;
      }
    </style>
    <ul>
      ${baseTokens.map(
        (color) => html`
          <li>
            <p>${color.path.reduce((acc, curr) => `${acc}.${curr}`)}</p>
            <p>${color.value}</p>
            <div
              style="background-color: ${color.value}; width: 100px; height: 100px;"
            ></div>
          </li>
        `
      )}
    </ul>
  `;
};
Default.args = {
  allTokens: process.env.allTokens,
  tokens: process.env.tokens,
};
