# Van HTMX

Bing was sure the combination of Van.JS & HTMX was already out there, but checking the given links it turned out that GPT4 was phantasizing even citations! So I whipped this up:

It's just an Express server, which uses Van instead of pug-templates. The original example was in TypeScript, however I've refactored it to Vanilla JS, so the server does not require a build step.

Try to develop a new htmx-view while leveraging ultra-lightweight van-components!

```sh
npm install
npm run build
npm run dev
# [...] on demand, rebuild the client:
npm run build
```
- Refresh the browser on demand

TODO
- Automatically reload (& rebuild) the client - HMR?
- Lint & format
- Tests
- Completely remove Typescript or switch to Bun to support it for the server-side (alternative: `ts-node-dev`)