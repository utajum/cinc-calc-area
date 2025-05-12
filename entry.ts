// @deno-types="npm:@astrojs/deno/env"
import { handler } from './dist/server/entry.mjs'; // Adjust if your build output is different

Deno.serve({
  port: 8000,
  fetch: handler,
});
