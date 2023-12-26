import javascriptLogo from './javascript.svg'
import vanLogo from './vanjs.svg'
import page from './page'

export function render(van, { query }) {
  const content = page({ van, query })
  const html = `
    <div>
      <a href="https://vanjs.org" target="_blank">
        <img src="${vanLogo}" class="logo" alt="VanJS logo" />
      <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
        <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
      </a>
      <a href="https://vitejs.dev" target="_blank">
        <img src="/vite.svg" class="logo" alt="Vite logo" />
      </a>
    </div>
    ${van.html(content)}
  `
  return { html }
}