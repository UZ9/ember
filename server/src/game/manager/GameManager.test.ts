import { GameManager } from "./GameManager";

describe("GameManager tests", () => {
    let manager: GameManager;

    beforeEach(() => {
       manager = new GameManager();
    });

    it("should have a non null entity manager when initialized", () => {
        expect(manager.entityManager).toBeDefined();
    });
});