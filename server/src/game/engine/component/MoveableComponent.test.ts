import { MoveableComponent } from "./MoveableComponent";
import Vector2 from "../transform/Vector2";

describe("MoveableComponent tests", () => {
    let moveableComponent: MoveableComponent;

    beforeEach(() => {
        moveableComponent = new MoveableComponent();
    });

    it("should be the position (0, 0,) when created", () => {
        expect(moveableComponent.position.x).toBe(0);
        expect(moveableComponent.position.y).toBe(0);
    });

    it("should have the adjusted position after setting it", () => {
        const newPos = new Vector2(37, 43);

        moveableComponent.position = newPos;

        expect(moveableComponent.position).toBe(newPos);
    });

    it("should be able to add a position to it", () => {
        const newPos = new Vector2(30, 47);

        moveableComponent.addPosition(newPos);

        expect(moveableComponent.position.x).toBe(30);
        expect(moveableComponent.position.y).toBe(47);
    });
});
