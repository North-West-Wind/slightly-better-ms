# slightly-better-ms
This is basically the "ms" package from ZEIT/Vercel. Please learn how to use "ms" from their [Github](https://github.com/vercel/ms).

# Features
- Everything from the original "ms"
- The ability to parse strings with multiple units. Read example to get the idea.

# Examples
```js
const ms = require("slightly-better-ms");

ms("1d22hr22min");
// => 166920000
```
