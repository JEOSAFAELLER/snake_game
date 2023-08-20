import { DO_NOT_USE_OR_YOU_WILL_BE_FIRED_EXPERIMENTAL_FORM_ACTIONS } from "react";
import { Coordinate } from "../types/types";

export const checkEatsfood = (
    head: Coordinate,
    food: Coordinate,
    area: number,

): boolean => {
    const distanceBetweenFoodAndSnakeX: number = Math.abs(head.x - food.x);
    const distanceBetweenFoodAndSnakeY: number = Math.abs(head.y - food.y);
    return (
        distanceBetweenFoodAndSnakeX< area && distanceBetweenFoodAndSnakeY< area
    );
};
    
    

