import { Entity, Position } from "./Entity";
import type { Moveable } from "./Moveable";

export class BasicAI extends Entity implements Moveable {
    public constructor() {
        super();
    }

    public moveTo(position: Position): void {
        this.position = position;
    }

    public printState() {
        console.log(JSON.stringify(this.position));
    }

    public tick() {
        console.log("yes.");   
    };
}