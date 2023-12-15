import { MoveableComponent } from "../engine/component/MoveableComponent";
import { Entity } from "./Entity";

export class BasicAI extends Entity {
    public onInitialize =  () => {
        this.addComponent(new )
    };

    public onUpdate = () => {
        return;
    };

    public constructor() {
        super();
    }

    public printState() {
        console.log(JSON.stringify(this.position));
    }

    public tick() {
        console.log("yes.");   
    };
}