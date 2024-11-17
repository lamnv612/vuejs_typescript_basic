import { describe, it, expect } from "vitest";
import { generateRandomNumber } from "@/utils";

describe("generateRandomNumber", () => {
  // デフォルトで3桁の数字が生成されることをテスト
  it("デフォルトで3桁の数字を生成する", () => {
    const result = generateRandomNumber();
    expect(result).toBeGreaterThanOrEqual(100); // 100以上であること
    expect(result).toBeLessThanOrEqual(999); // 999以下であること
  });

  // 指定した桁数（この場合は5桁）の数字が生成されることをテスト
  it("指定した桁数の数字を生成する", () => {
    const result = generateRandomNumber(5);
    expect(result).toBeGreaterThanOrEqual(10000); // 10000以上であること
    expect(result).toBeLessThanOrEqual(99999); // 99999以下であること
  });

  // 複数回呼び出した際に異なる数字が生成されることをテスト
  it("複数回呼び出すと異なる数字を生成する", () => {
    const result1 = generateRandomNumber();
    const result2 = generateRandomNumber();
    expect(result1).not.toBe(result2); // 2つの結果が異なることを確認
  });

  // 入力が1の場合、1桁の数字が生成されることをテスト
  it("入力が1の場合、1桁の数字を生成する", () => {
    const result = generateRandomNumber(1);
    expect(result).toBeGreaterThanOrEqual(0); // 0以上であること
    expect(result).toBeLessThanOrEqual(9); // 9以下であること
  });

  // 大きな桁数の入力（この場合は10桁）を適切に処理できることをテスト
  it("大きな桁数の入力を処理する", () => {
    const result = generateRandomNumber(10);
    expect(result.toString()).toHaveLength(10); // 結果が10桁であることを確認
  });
});
