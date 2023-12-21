import { MoveableComponent } from "../engine/component/MoveableComponent";
import { Entity } from "./Entity";

export class BasicAI extends Entity {
    public onInitialize =  () => {
        this.addComponent(new MoveableComponent());
    };

    public onUpdate = () => {
        return;
    };

    public constructor() {
        super();
    }
}