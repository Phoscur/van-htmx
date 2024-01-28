import "./index.css";
import "./javascript.svg";

import htmx from "./htmx";
import "htmx.org/dist/ext/ws";
import van from "vanjs-core";
import Hello from "./components/hello";
import Counter from "./components/counter";

van.add(document.getElementById("hello-container"), Hello({ van }));

/** @param {Event} event */
const hydrateOnEvent = (event) => {
  if (!event.target) return;
  const el = event.target;
  if (!el) return;

  hydrateCounter(el);
  hydrateStyledCounter(el);
};

/** @param {HTMLElement} el */
const hydrateCounter = (el) => {
  if ("basic-counter" !== el.id) return;
  van.hydrate(el, (dom) =>
    Counter({
      van,
      id: dom.id,
      init: Number(dom.getAttribute("data-counter")),
    }),
  );
};

/** @param {HTMLElement} el */
const hydrateStyledCounter = (el) => {
  if ("styled-counter" !== el.id) return;
  /** @type HTMLSelectElement */
  const styleSelectDom = el.parentElement.querySelector("#button-style");
  const buttonStyle = van.state(styleSelectDom.value);
  styleSelectDom.oninput = (e) => (buttonStyle.val = e.target.value);
  van.hydrate(el, (dom) =>
    Counter({
      van,
      id: dom.id,
      init: Number(dom.getAttribute("data-counter")),
      buttonStyle,
    }),
  );
};

htmx.on("htmx:load", hydrateOnEvent);
