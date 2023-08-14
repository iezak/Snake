import { getInputDirecktion } from "../function/input.js";

export const SNAKE_SPEED = 6

const snakeBody = [
    {x: 11, y: 11}
   ]

let newSegment = 0

export function update() {
    addSegment()

    const inputDirecktion = getInputDirecktion()
    
    for (let i = snakeBody.length - 2; i >= 0; i--) {
        snakeBody[i + 1] = {...snakeBody[i]}
    }

    snakeBody[0].x += inputDirecktion.x
    snakeBody[0].y += inputDirecktion.y
}

export function draw(gameBoard) {
    snakeBody.forEach(segment => {
        const snakeElement = document.createElement('div')
        snakeElement.style.gridColumnStart = segment.x
        snakeElement.style.gridRowStart = segment.y
        snakeElement.classList.add('snake')
        gameBoard.appendChild(snakeElement)
    }) 
}

export function expandSnake(amount) {
    newSegment += amount
}

export function addSegment() {
    for(let i = 0; i < newSegment; i++) {
        snakeBody.push({ ...snakeBody[snakeBody.length - 1]})
    }

    newSegment = 0
}

export function onSnake(position, {ignoreHead = false} = {}) {
    return snakeBody.some((segment, index) => {
        if(ignoreHead && index == 0) return
        return position.x == segment.x && position.y == segment.y
    })
}

export function getSnakeHead() {
    return snakeBody[0]
}

export function snakeIntersection() {
    return onSnake(getSnakeHead(), {
        ignoreHead: true})
}
