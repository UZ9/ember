import { BasicAI } from "./BasicAI";

describe('BasicAI Tests', () => {
    let basicAI: BasicAI;
    
    beforeEach(() => {
        basicAI = new BasicAI();
    });
    
    it('should have a default position of (0, 0)', () => {
        expect(basicAI.position).toStrictEqual({ x: 0, y: 0 });
    });

    it('should be able to set a new position', () => {
        basicAI.position = { x: 1, y: 3 };

        expect(basicAI.position).toStrictEqual({ x: 1, y: 3 });
    });

    it('should be able to move to a new position', () => {
        basicAI.moveTo({ x: 1, y: 8 });
        expect(basicAI.position).toStrictEqual({ x: 1, y: 8 });
    });
});