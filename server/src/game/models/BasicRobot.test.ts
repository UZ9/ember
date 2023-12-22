import { BasicRobot } from "./BasicRobot";
import { MoveableComponent } from "../engine/component/MoveableComponent";

describe('BasicRobot Tests', () => {
    let ai: BasicRobot;

    beforeEach(() => {
        ai = new BasicRobot();

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