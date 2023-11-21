export abstract class Scientist {
    private _foodLevel: number;

    protected constructor(foodLevel: number) {
        this._foodLevel = foodLevel;
    }

    get foodLevel() {
        return this._foodLevel;
    }

    set foodLevel(foodLevel: number) {
        this._foodLevel = foodLevel;
    }
}