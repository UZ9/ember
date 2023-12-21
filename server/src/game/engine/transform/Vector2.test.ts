import Vector2 from "./Vector2";

describe('Vector2 tests', () => {
    let vector: Vector2;

    it("should set the x and y correctly when initialized", () => {
        vector = new Vector2(0, 0);

        expect(vector.x).toBe(0);
        expect(vector.y).toBe(0);

        vector = new Vector2(32, -48);

        expect(vector.x).toBe(32);
        expect(vector.y).toBe(-48);
    });

    it("should be able to correctly add two vectors", () => {
        vector  = new Vector2(10, 10);

        const other = new Vector2(20, 30);

        const result = vector.add(other);

        expect(result.x).toBe(30);
        expect(result.y).toBe(40);
    });
});