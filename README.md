# Van HTMX

## Background
Bing was sure the combination of Van.JS & HTMX was already out there, but checking the given links it turned out that GPT4 was phantasizing even citations! So I whipped this up:

It is a Vite Hono Server, which uses Van instead of pug-templates or Hypertext - however Hono leverages (static) JSX too... maybe that is nicer van VanJS... 

Try to develop a new htmx-view while leveraging ultra-lightweight van-components!

```sh
npm install
npm start
# [...] on demand, build the client & server to preview production (prebuilt Vite SSR):
npm run build
npm run preview
```

### TODO

- eslint
- e2e tests

- remove server.js?! 
- add hono/jsx example
- what about htmx/ws, reenable!?
- tailwind v4?
