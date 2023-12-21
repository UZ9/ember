
import { Component } from "../engine/component/Component";
import { Entity } from "./Entity";

// Mock classes
class EntityMock extends Entity {
    public onInitialize = (): void => {
        return;
    };

    public onUpdate = (): void => {
        return;
    };
}

class ComponentMock1 implements Component {
    public entity: EntityMock = new EntityMock();
}

describe('Entity Tests', () => {
    let e: EntityMock;
    const component1 = new ComponentMock1();

    beforeEach(() => {
        e = new EntityMock();
    });

    it('should start with a component length of 0', () => {
        expect(e.components).toHaveLength(0);
    });

    it('should successfully add a component through addComponent', () => {
        e.addComponent(component1);

        expect(e.components).toHaveLength(1);
    });

    it('should have the correct component after adding', () => {
        e.addComponent(component1);

        expect(e.components).toHaveLength(1);
        expect(e.components[0] === component1);
    });
    
    it('should be able to successfully remove a component', () => {
        e.addComponent(component1);

        e.removeComponent(ComponentMock1);

        expect(e.components).toHaveLength(0);

        //
    });

    it("should throw an error if the component doesn't exist", () => {
       const invalidGet = () => {
           e.getComponent(ComponentMock1);
       };

       expect(invalidGet).toThrow(Error);
    });

    it("should return false if it doesn't have a component", () => {
        const hasComponent = e.hasComponent(ComponentMock1);

        expect(hasComponent).toBeFalsy();
    });

    it("should return true if it does have a component", () => {
        e.addComponent(component1);

        const hasComponent = e.hasComponent(ComponentMock1);

        expect(hasComponent).toBeTruthy();
    });


});