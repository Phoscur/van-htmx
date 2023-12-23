import { parse } from "node:url"
import van from "mini-van-plate/van-plate"
import Hello from "./components/hello.js"
import Counter from "./components/counter.js"

export default function page(query = {}) {
  const { body, button, div, h1, h2, head, link, meta, option, p, script, select, title } = van.tags
  const counterInit = Number(query["counter-init"]) || 0

  return van.html(
    head(
      link({rel: "icon", href: "logo.svg"}),
      title("Van SSR and HTMX Example"),
      meta({name: "viewport", content: "width=device-width, initial-scale=1"}),
    ),
    body(
      script({type: "text/javascript", src: `client.bundle.js`, defer: true}),
      h1("Hello Components"),
      div({id: "hello-container"},
        Hello({van}),
      ),
      h1("Counter Components"),
      div({id: "counter-container"},
        h2("Basic Counter"),
        Counter({van, id: "basic-counter", init: counterInit}),
        h2("Styled Counter"),
        p("Select the button style: ",
          select({id: "button-style", value: "👆👇"},
            option("👆👇"),
            option("👍👎"),
            option("🔼🔽"),
            option("⏫⏬"),
            option("📈📉"),
          ),
        ),
        Counter({van, id: "styled-counter", init: counterInit, buttonStyle: "👆👇"}),
      ),
      button({id: "htmx-button", "hx-get": "/htmx/123", "hx-target": "#htmx-container", "hx-swap": "beforeend"}, "HTMX Button"),
      div({id: "htmx-container"}),   
      script({type: "text/javascript", src: `htmx.js`}),
    )
  )
}