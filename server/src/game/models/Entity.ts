export type Position = {
    x: number,
    y: number
}

export abstract class Entity {
    protected position: Position;
    
    protected constructor() {
        this.position = { x: 0, y: 0 };
    }
}