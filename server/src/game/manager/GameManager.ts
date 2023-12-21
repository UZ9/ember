import { EntityManager } from "../models/EntityManager";

export class GameManager {
    private readonly _entityManager: EntityManager;

    constructor() {
        this._entityManager = new EntityManager();
    }

    public get entityManager() {
        return this._entityManager;
    }
}