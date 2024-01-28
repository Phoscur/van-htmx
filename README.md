# Van HTMX

Bing was sure the combination of Van.JS & HTMX was already out there, but checking the given links it turned out that GPT4 was phantasizing even citations! So I whipped this up:

It's just an Express server with Vite, which uses Van instead of pug-templates or Hypertext. The original example was in TypeScript, however I've refactored it to Vanilla JS, so the server does not require a build step.

Try to develop a new htmx-view while leveraging ultra-lightweight van-components!

```sh
npm install
npm run dev
# [...] on demand, build the client & server to preview production (prebuilt Vite SSR):
npm run build
npm run preview
```

TODO

- Lint & format
- Tests
- Fix/improve nodemon+vite, use vite as proxy (so it restarts separately from the server)?
