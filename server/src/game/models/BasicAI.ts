import { Entity } from "./Entity";
import type { Moveable } from "./Moveable";

export class BasicAI extends Entity implements Moveable {
    public constructor() {
        super();
    }

    public moveTo(x: number, y: number): void {
        this.position = { x, y };
    }

    public printState() {
        console.log(JSON.stringify(this.position));
    }
}