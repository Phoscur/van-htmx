import "./style.css"
import "./javascript.svg"

import htmx from "htmx.org"
import van from "vanjs-core"
import Hello from "./components/hello.js"
import Counter from "./components/counter.js"

const { button, p } = van.tags

van.add(document.getElementById("hello-container"), Hello({van}))

const hydrate = () => {
  const el = document.getElementById("basic-counter");
  if (!el) return;

  van.hydrate(el, dom => Counter({
    van,
    id: dom.id,
    init: Number(dom.getAttribute("data-counter")),
  }))

  /** @type HTMLSelectElement */
  const styleSelectDom = document.getElementById("button-style")
  const buttonStyle = van.state(styleSelectDom.value)
  styleSelectDom.oninput = e => buttonStyle.val = e.target.value
  van.hydrate(document.getElementById("styled-counter"), dom => Counter({
    van,
    id: dom.id,
    init: Number(dom.getAttribute("data-counter")),
    buttonStyle,
  }))
}

htmx.onLoad(hydrate);
// manually trigger hydration
// van.add(document.getElementById("counter-container"), p(button({onclick: hydrate}, "Hydrate")))