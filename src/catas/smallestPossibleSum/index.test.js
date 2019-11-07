import minimize from "./index";

describe("smallestSumm", () => {
    it("test", () => {
        const result = minimize([6, 9, 21]);
        expect(result).toBe(10);
    });
});
