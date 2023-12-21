import { Entity } from "./Entity";

export class EntityManager extends Entity {
    private _entities: Entity[] = [];

    public onInitialize = () => {
        this._entities.forEach(e => e.onInitialize());
    };

    public onUpdate = () => {
        this._entities.forEach(e => e.onUpdate());
    };

    public registerEntity(entity: Entity) {
        this._entities.push(entity);
    }

    public get entities(): Entity[] {
        return this._entities;
    }
}