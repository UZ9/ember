export abstract class Scientist {
    private foodLevel: number;

    protected constructor(foodLevel: number) {
        this.foodLevel = foodLevel;
    }

    public getFoodLevel(): number {
        return this.foodLevel;
    }

    public setFoodLevel(foodLevel: number) {
        this.foodLevel = foodLevel;
    }
}