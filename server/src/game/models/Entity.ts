import { Component } from "../engine/component/Component";

type constr<T> = { new(...args: unknown[]): T }

export abstract class Entity {
    protected _components: Component[] = [];

    public get components(): Component[] {
        return this._components;
    }

    public addComponent(component: Component) {
        this._components.push(component);
        component.entity = this;
    }


    public getComponent<C extends Component>(constr: constr<C>): C {
        for (const component of this._components) {
            if (component instanceof constr) {
                return component as C;
            }
        }

        throw new Error(
            `Attempted to retrieve nonexistent comoonent ${constr.name} on entity ${this.constructor.name}`
        );
    }

    public removeComponent<C extends Component>(constr: constr<C>): void {
        let toRemove: Component | undefined;
        let index: number | undefined;

        for (let i = 0; i < this._components.length; i++) {
            const component = this._components[i];


            console.log("Checking");
            if (component instanceof constr) {
                console.log("Found");
                toRemove = component;
                index = i;
                break;
            }
        }

        if (toRemove !== undefined && index !== undefined) {
            toRemove.entity = null;
            console.log(this._components);
            this._components.splice(index, 1);
            console.log(this._components);
        
        }
    }

    public hasComponent<C extends Component>(constr: constr<C>): boolean {
        for (const component of this._components) {
            if (component instanceof constr) return true;
        }

        return false;
    }

    public abstract onInitialize: () => void;

    public abstract onUpdate: () => void;
}
