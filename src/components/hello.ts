import type { VanObj } from "mini-van-plate/shared"

interface Props {
  van: VanObj
}

export default ({van} : Props) => {
  const {a, b, div, li, p, ul} = van.tags

  const fromServer = typeof window === "undefined"
  return div(
    p(() => `👋Hello (from ${fromServer ? "server" : "client"})`),
    ul(
      li("🗺️World"),
      li(a({href: "https://htmx.org/", class: "logo text"}, 
        "<", b("/"), "> htm", b("x")
      )),
      li(a({href: "https://vanjs.org/"}, "🍦VanJS")),
    ),
  )
}
