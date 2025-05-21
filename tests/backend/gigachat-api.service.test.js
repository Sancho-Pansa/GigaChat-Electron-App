import { describe, expect, test } from "vitest";
import * as gigachat from "../../src/main/services/gigachat-api.service";

describe("Test backend (main) functions", () => {
  test("Balance Check", async () => {
    const result = await gigachat.getBalance();
    expect(result).toBeGreaterThan(0);
  });
});