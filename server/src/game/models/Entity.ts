export type Position = {
    x: number,
    y: number
}

export abstract class Entity {
    protected _position: Position;
    
    protected constructor() {
        this._position = { x: 0, y: 0 };
    }

    get position() {
        return this._position;
    }

    set position(position: Position) {
        this._position = position;
    }
}