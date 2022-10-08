# CSP

TypeScript library to create CSP headers. Usage:

```ts
import csp from "./mod.ts";

const headers = response.headers;
const options = {
  "Strict-Transport-Security": {
    maxAge: DEFAULT_MAX_AGE,
    includeSubDomains: true,
    preload: true,
  },
  "Referrer-Policy": ["no-referrer", "strict-origin-when-cross-origin"],
  "X-Frame-Options": true,
  "X-Content-Type-Options": true,
  "X-XSS-Protection": true,
  "X-Permitted-Cross-Domain-Policies": true,
  "X-Powered-By": false,
};

csp(headers, options);
```
