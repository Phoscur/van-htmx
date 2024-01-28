import type { VanObj, State } from "mini-van-plate/shared";

interface Props {
  van: VanObj;
  id?: string;
  init?: number;
  buttonStyle?: string | State<string>;
}

export default ({ van, id, init = 0, buttonStyle = "👍👎" }: Props) => {
  const { button, div } = van.tags;

  const [up, down] = [...van.val(buttonStyle)];
  const counter = van.state(init);

  return div(
    { ...(id ? { id } : {}), "data-counter": counter },
    "❤️ ",
    counter,
    " ",
    button(
      {
        onclick: () => {
          console.log("counter", counter);
          return ++counter.val;
        },
      },
      up,
    ),
    button({ onclick: () => --counter.val }, down),
  );
};
