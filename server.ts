
import { Hono } from "hono"
import { serve } from "@hono/node-server"
import { serveStatic } from "@hono/node-server/serve-static"
import { readFile } from "node:fs/promises"
import van from "mini-van-plate/van-plate"; // TODO?! missing types
import { render } from "./src/entry-server"
import counters from "./src/counters";
// render = (await import("./dist/server/entry-server.js")).render;

const isProd = process.env["NODE_ENV"] === "production"
let html = await readFile(isProd ? "build/index.html" : "index.html", "utf8")

if (!isProd) {
    const rendered = await render(van, { query: {}}, /*url, ssrManifest*/);
    // Inject Vite client code to the HTML
    html = html
        .replace("<head>", `
    <script type="module">
import RefreshRuntime from "/@react-refresh"
RefreshRuntime.injectIntoGlobalHook(window)
window.$RefreshReg$ = () => {}
window.$RefreshSig$ = () => (type) => type
window.__vite_plugin_react_preamble_installed__ = true
</script>

    <script type="module" src="/@vite/client"></script>
    `)
      .replace(`<!--app-head-->`, rendered.head ?? "")
      .replace(`<!--app-html-->`, rendered.html ?? "");
}

const app = new Hono()
    .use("/assets/*", serveStatic({ root: isProd ? "build/" : "./" })) // path must end with '/'
    .get("/htmx/counters", c =>
      c.html(van.html(counters({ van, query: {} })))
    )
    .get("/htmx/*", c => c.html("<h4>hello</h4>"))
    .get("/*", c => c.html(html)) // fallback to index

export default app

if (isProd) {
    serve({ ...app, port: 4000 }, info => {
        console.log(`Listening on http://localhost:${info.port}`);
    });
}