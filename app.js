const direction = { x: 0, y: 0 }
const foodsound = new Audio()
const gameoversound = new Audio()
const movesound = new Audio()
const musicsound = new Audio()
let speed = 5
inputDir={x:0,y:1}
let lastPaintTime = 0
let snakeArr=[
    {x:13,y:15}
]
let food={x:6,y:7}
let score=0

function main(ctime) {
    window.requestAnimationFrame(main)
    // console.log(ctime);
    if ((ctime - lastPaintTime) / 1000 < 1 / speed) {
        return ;
    }
    lastPaintTime = ctime;
    gameEngine();
}
function iscollide(snake){
    for(let i=1;i<snakeArr.length;i++){
        if(snake[i].x===snake[0].x && snake[i].y===snake[0].y){
            return true
        }
    }
        if(snake[0].x>=18 || snake[0].x<=0 || snake[0].y>=18 || snake[0].y<=0){
            return true
        }
}
function gameEngine() {
    if(iscollide(snakeArr)){
        inputDir={x:0,y:0}
        alert("game over press any key to play again")
        snakeArr=[
            {x:13,y:14}
        ]
        score=0
    }


    //if you have eaten food increment score and regenerate food
    if(snakeArr[0].y===food.y && snakeArr[0].x===food.x){
        snakeArr.unshift({x:snakeArr[0].x+inputDir.x,y:snakeArr[0].y+inputDir.y})
        let a=2
        let b=16
        food={x:Math.round(a+(b-a)*Math.random()),y:Math.round(a+(b-a)*Math.random())}
    }

    //moving the snake 
    for(let i=snakeArr.length-2;i>=0;i--){
        snakeArr[i+1]={...snakeArr[i]}
    }
    snakeArr[0].x += inputDir.x
    snakeArr[0].y+= inputDir.y
    //part 1: updating the snake variable array
    board.innerHTML="";
    //part 2:render/display the snake/
    snakeArr.forEach((e,index)=>{
        snakeElement=document.createElement('div');
        snakeElement.style.gridRowStart=e.y;
        snakeElement.style.gridColumnStart=e.x;
        if(index===0){
            snakeElement.classList.add('head')
        }
        else{
            snakeElement.classList.add('snake')
        }
        board.appendChild(snakeElement);
    })
    //display  and food
        foodElement=document.createElement('div');
        foodElement.style.gridRowStart=food.y;
        foodElement.style.gridColumnStart=food.x;
        foodElement.classList.add('food');
        board.appendChild(foodElement);
}
















window.requestAnimationFrame(main)
window.addEventListener('keydown',e=>{
    inputDir={x:0,y:1}
    switch(e.key){
        case "ArrowUp":
        console.log("arrawup")
        inputDir.x=0 ;
        inputDir.y=-1 ;
        break;
        case "ArrowDown":
        console.log("arrowdown")
        inputDir.x= 0;
        inputDir.y= 1;
        break;
        case "ArrowRight":
        console.log("arrowright")
        inputDir.x= 1;
        inputDir.y= 0;
        break;
        case "ArrowLeft":
        console.log("arrowleft")
        inputDir.x= -1;
        inputDir.y= 0;
        break;
        default:
            break;

    }
})