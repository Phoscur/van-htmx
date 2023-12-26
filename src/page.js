import Hello from "./components/hello.js"
import Counters from "./counters.js"

/**
 * @typedef {Object} PageProps
 * @property {import("vanjs-core").Van} van
 * @property {String=} id
 * @property {Record<String, String>=} query
 */
/**
 * @param {PageProps} props
 * @returns {HTMLElement[]}
 */
export default function page({ van, query = {}}) {
  const { body, button, div, h1, h2, head, link, meta, option, p, script, select, title } = van.tags
  console.log('query', query)

  return [
    h1("Vite Van HTMX"),
    div({id: "hello-container"},
      Hello({van}),
    ),
    h2("Components"),
    div({id: "counter-container"},
      Counters({van, query}),
    ),
    button({id: "htmx-button", "hx-get": "/htmx/123", "hx-target": "#htmx-container", "hx-swap": "beforeend"}, "HTMX Button"),
    div({id: "htmx-container"}),
  ]
}