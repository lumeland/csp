import { assertEquals } from "https://deno.land/std@0.158.0/testing/asserts.ts";
import csp from "../mod.ts";

Deno.test("Default options", () => {
  const headers = new Headers();
  const expect = {
    "strict-transport-security": "max-age=31536000; includeSubDomains; preload",
    "x-content-type-options": "nosniff",
    "x-frame-options": "SAMEORIGIN",
    "x-permitted-cross-domain-policies": "none",
    "x-xss-protection": "1; mode=block",
  };
  csp(headers);
  assertEquals(expect, Object.fromEntries(headers));
});
