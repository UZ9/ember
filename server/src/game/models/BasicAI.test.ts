import { BasicAI } from "./BasicAI";
import { MoveableComponent } from "../engine/component/MoveableComponent";

describe('BasicAI Tests', () => {
    let ai: BasicAI;

    beforeEach(() => {
        ai = new BasicAI();

        ai.onInitialize();
    });

    it("should do something", () => {

        const moveableComponent = ai.getComponent(MoveableComponent);

        console.log(moveableComponent);

        expect(true === true);
    });

    it("should do nothing on update", () => {
        ai.onUpdate();

        expect(true === true);
    });
});