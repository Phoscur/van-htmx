import App from "./app";

import javascriptLogo from "./javascript.svg";
import vanLogo from "./vanjs.svg";
import tailwindLogo from "./tailwind.svg";

export function render(van, { query }) {
  const content = App({ van, query });
  const html = `
    <div class="h-32 mb-8 mx-auto grid grid-flow-col gap-8 auto-cols-max">
      <a href="https://vanjs.org" target="_blank">
        <img src="${vanLogo}" class="w-32 logo" alt="VanJS logo" />
      <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
        <img src="${javascriptLogo}" class="w-32 logo vanilla" alt="JavaScript logo" />
      </a>
      <a href="https://tailwindcss.com" target="_blank">
        <img src="${tailwindLogo}" class="w-32 logo" alt="Tailwind logo" />
      </a>
      <a href="https://hono.dev" target="_blank">
        <img src="/hono.png" class="w-32 logo" alt="Hono logo" />
      </a>
      <a href="https://vitejs.dev" target="_blank">
        <img src="/vite.svg" class="w-32 logo" alt="Vite logo" />
      </a>
    </div>
    ${van.html(content)}
  `;
  return { html };
}
