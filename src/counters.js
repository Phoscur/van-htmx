import Counter from "./components/counter.js"

/**
 * @typedef {Object} Props
 * @property {import("vanjs-core").Van} van
 * @property {Record<String, String>=} query
 */
/**
 * @param {Props} props
 */
export default ({ van, query }) => {
  const counterInit = Number(query["counter-init"]) || 0

  const { h2, p, select, option } = van.tags
  return [
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
  ]
}
