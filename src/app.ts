import type { VanObj, State } from "mini-van-plate/shared"
import Hello from "./components/hello"
interface Props {
  van: VanObj
  id?: string
  init?: number
  buttonStyle?: string | State<string>
}

export default function page({ van }: Props) {
  const { button, div, h1, h2, form, input } = van.tags

  return [
    h1("Vite Van HTMX"),
    div({id: "hello-container"},
      Hello({van}),
    ),
    h2("Components"),
    div({id: "counter-container"},
      button({id: "counters-button", "hx-get": "/htmx/counters", "hx-swap": "outerHTML"}, "HTMX Load Button"),
    ),
    // moar htmx buttons!11
    // button({id: "htmx-button", "hx-get": "/htmx/123", "hx-target": "#htmx-container", "hx-swap": "beforeend"}, "HTMX Hello Button"),
    // div({id: "htmx-container"}),
    div({"hx-ext": "ws", "ws-connect": "/ws"},
      div({id: "notifications"}),
      div({id: "chat_room"}),
      form({id: "form", "ws-send": true}, 
        input({name: "chat_message"})
      ),
    ),
  ]
}