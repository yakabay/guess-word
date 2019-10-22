import countWater from "./index";

describe("Count water", () => {
    it("returns 10 for [2,1,5,0,3,4,7,2,3,1,0]", () => {
        const result = countWater([2,1,5,0,3,4,7,2,3,1,0]);
        expect(result).toBe(10);
    });
    it("returns 21 for [2,1,5,0,3,4,7,2,3,1,6,1]", () => {
        const result = countWater([2,1,5,0,3,4,7,2,3,1,6,1]);
        expect(result).toBe(21);
    });
    it("returns 12 for [2,1,5,0,3,4,7,2,3,1,3]", () => {
        const result = countWater([2,1,5,0,3,4,7,2,3,1,3]);
        expect(result).toBe(12);
    });
});
