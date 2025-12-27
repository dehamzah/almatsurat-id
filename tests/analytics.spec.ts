import { describe, it, expect } from "vitest";
import { buildGaInlineScript } from "../src/utils/analytics";

describe("analytics utility", () => {
  it("returns empty string when no id provided", () => {
    expect(buildGaInlineScript("")).toBe("");
    expect(buildGaInlineScript(null as any)).toBe("");
  });

  it("includes GA id and anonymize_ip config", () => {
    const id = "G-TEST12345";
    const script = buildGaInlineScript(id);
    expect(script).toContain(id);
    expect(script).toContain("gtag");
    expect(script).toContain("anonymize_ip");
    expect(script).toContain("googletagmanager.com/gtag/js");
  });
});
