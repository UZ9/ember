import { BasicRobot } from "./BasicRobot";
import { MoveableComponent } from "../engine/component/MoveableComponent";
import { EntityManager } from "./EntityManager";
import { Entity } from "./Entity";

class MockEntity extends Entity {
    private initialized = false;
    private updated = false;

    onInitialize = () => {
        this.initialized = true;
    };

    onUpdate = () => {
        this.updated = true;
    };

    hasInitialized = (): boolean => {
        return this.initialized;
    };

    hasUpdated = (): boolean => {
        return this.updated;
    };
}

describe('EntityManager Tests', () => {
    let manager: EntityManager;
    let mockEntity: MockEntity;

    beforeEach(() => {
        mockEntity = new MockEntity();

        manager = new EntityManager();
    });

    it("should be able to register a new entity", () => {
        manager.registerEntity(mockEntity);

        expect(manager.entities).toHaveLength(1);
    });

    it("should call the entity's initialize method on manager initialize", () => {
        manager.registerEntity(mockEntity);

        manager.onInitialize();

        expect(mockEntity.hasInitialized()).toBeTruthy();
    });

    it("should call the entity's update method on manager update", () => {
        manager.registerEntity(mockEntity);

        manager.onUpdate();

        expect(mockEntity.hasUpdated()).toBeTruthy();
    });
});