export default class Vector2 {
    private _x: number;
    private _y: number;
    
    constructor(x: number, y: number) {
        this._x = x;
        this._y = y;
    }

    public get x(): number {
        return this.x;
    }

    public get y(): number {
        return this.y;
    }
}