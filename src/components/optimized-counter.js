/**
 * @typedef {Object} OptimizedCounterProps
 * @property {import("mini-van-plate/src/shared").VanObj} van
 * @property {String=} id
 * @property {Number=} init
 * @property {String | import("vanjs-core").State<String>=} buttonStyle
 */
/**
 * @param {OptimizedCounterProps} props
 */
export default ({
  van, id, init = 0, buttonStyle = "👍👎",
}) => {
  const { button, div } = van.tags

  const counter = van.state(init)
  return div({...(id ? {id} : {}), "data-counter": counter},
    "❤️ ", counter, " ",
    button({onclick: () => ++counter.val}, () => [...van.val(buttonStyle)][0]),
    button({onclick: () => --counter.val}, () => [...van.val(buttonStyle)][1]),
  )
}
