/**
 * @typedef {Object} Props
 * @property {import("mini-van-plate/src/shared").VanObj} van
 */
/**
 * @param {Props} props
 */
export default ({ van }) => {
  const {a, div, li, p, ul} = van.tags

  const fromServer = typeof window === "undefined"
  return div(
    p(() => `👋Hello (from ${fromServer ? "server" : "client"})`),
    ul(
      li("🗺️World"),
      li("🗺️Worrrrld"),
      li(a({href: "https://vanjs.org/"}, "🍦VanJS")),
    ),
  )
}
