import { describe, expect, it, vi } from "vitest";

import Counter from "./counter";
import type { VanObj } from "mini-van-plate/shared";

describe("Counter", () => {
  it("should render", () => {
    const div = vi.fn().mockImplementation(() => {});
    const button = vi.fn().mockImplementation(() => {});
    const van = {
      tags: { div, button },
      val: () => [],
      state: () => {},
    } as unknown as VanObj;

    Counter({ van });
    expect(button).toBeCalledTimes(2);
    expect(div).toBeCalledTimes(1);
  });
});
