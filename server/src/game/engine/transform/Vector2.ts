export default class Vector2 {
    private _x: number;
    private _y: number;
    
    constructor(x: number, y: number) {
        this._x = x;
        this._y = y;
    }

    public get x(): number {
        return this._x;
    }

    public get y(): number {
        return this._y;
    }

    public add(other: Vector2): Vector2 {
        return new Vector2(this._x + other.x, this._y + other.y);
    }
}