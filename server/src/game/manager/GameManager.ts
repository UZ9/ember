import { Entity } from "../models/Entity";

export class GameManager {
    private static _instance: GameManager;
    
    private _entities: Entity[];

    constructor() {
        this._entities = [];
    }

    public get entities() {
        return this._entities;
    }

    public static get Instance() {
        return this._instance || (this._instance = new this());
    }

    public static registerEntity(entity: Entity) {
        this.Instance._entities.push(entity);
    }
}