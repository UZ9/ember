import { Position } from "./Entity";

export interface Moveable {
    moveTo: (position: Position) => void;
}