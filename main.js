import { draw as drawSnake, update as updateSnake, SNAKE_SPEED, getSnakeHead, snakeIntersection} from "./model/snake.js";
import { draw as drawFood, update as updateFood } from "./model/food.js";
import { outsideGrid } from "./function/grid.js";

let lastRenderTime = 0
let gameOver = false

const gameBoard = document.getElementById('game-board')


function main(currentTime) {
    if(gameOver) {
        if(confirm("Você perdeu")){
            location = './index.html'
        }
        return
    }
    
    requestAnimationFrame(main)
    const secondsSinceLastRender = (currentTime - lastRenderTime) / 1000

    if(secondsSinceLastRender < 1 / SNAKE_SPEED) return

    lastRenderTime = currentTime

    update()
    draw()
}
requestAnimationFrame(main)

function update() {
    updateSnake()
    updateFood()
    checkDead()
}

function draw() {
    gameBoard.innerHTML = ""
    drawSnake(gameBoard)
    drawFood(gameBoard)
}

function checkDead() {
    gameOver = outsideGrid(getSnakeHead()) || snakeIntersection()
}
