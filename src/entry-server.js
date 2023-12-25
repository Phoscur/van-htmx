import van from 'mini-van-plate/van-plate'
import javascriptLogo from './javascript.svg'
import vanLogo from './vanjs.svg'
import page from './page'

export function render({ query }) {
  const content = page({ van, query })
  const html = `
    ${van.html(content)}
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
      <p class="read-the-docs">
  `
  return { html }
}