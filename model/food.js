import { onSnake, expandSnake } from "./snake.js";
import { randonGridPosition } from "../function/grid.js";

let food = getRandonFoodPosition()

const EXPANSION_RATE = 1

export function update() {
    if(onSnake(food)) {
        expandSnake(EXPANSION_RATE)
        food = getRandonFoodPosition()
        
    }
}

export function draw(gameBoard) {
    const foodElement = document.createElement('div')
        foodElement.style.gridColumnStart = food.x
        foodElement.style.gridRowStart = food.y
        foodElement.classList.add('food')
        gameBoard.appendChild(foodElement)
}

function getRandonFoodPosition() {
    let newFoodPosition

    while (newFoodPosition == null || onSnake(newFoodPosition)) {
        newFoodPosition = randonGridPosition()
    }
    
    return newFoodPosition
}