import { MAX_ENTITIES } from "./Entity";

class EntityManager {
    private _availableEntities: number[] = [];

    public constructor() {
        for (let entity = 0; entity < MAX_ENTITIES; entity++) {
            this._availableEntities.push(entity);
        }
    }   
}