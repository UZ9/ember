import Vector2 from "../transform/Vector2";
import { Component } from "./Component";
import { Entity } from "../../models/Entity";

export class MoveableComponent implements Component {
    public entity: Entity | null = null;

    private _position: Vector2;

    public constructor();
    public constructor(position?: Vector2) {
        this._position = position || new Vector2(0, 0);
    }

    public get position(): Vector2 {
        return this._position;
    }

    public set position(newPosition: Vector2) {
        this._position = newPosition;
    }

    public set addPosition(position: Vector2) {
        this._position = this._position.add(position);
    }
}