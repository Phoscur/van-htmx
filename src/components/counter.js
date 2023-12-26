/**
 * @typedef {Object} CounterProps
 * @property {import("vanjs-core").Van} van
 * @property {String=} id
 * @property {Number=} init
 * @property {String | import("vanjs-core").State<String>=} buttonStyle
 */
/**
 * @param {CounterProps} props
 */
export default ({
  van, id, init = 0, buttonStyle = "👍👎",
}) => {
  const { button, div } = van.tags

  const [up, down] = [...van.val(buttonStyle)]
  const counter = van.state(init)

  return div({...(id ? {id} : {}), "data-counter": counter},
    "❤️ ", counter, " ",
    button({onclick: () => {
      console.log("counter", counter);
      return ++counter.val
    }}, up),
    button({onclick: () => --counter.val}, down),
  )
}
