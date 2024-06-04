import { z } from "npm:zod@^3";

const schema = z.string().datetime();

Deno.test("zod datetime test 1", () => {
  const result = schema.safeParse("2021-01-01T00:00:00Z");
  console.log("@result.success", result.success);
});

Deno.test("zod datetime test 2", () => {
  const result = schema.safeParse("2021-01-01T00:00:00");
  console.log("@result.success", result.success);
});
