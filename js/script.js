let canvas = document.getElementById("snake");
let context = canvas.getContext("2d");
let box = 32;
let snake = [];
snake[0] = {
   x: 8 * box,
   y: 8 * box
}
/* o context renderiza o desenho que vai acontecer no canvas */

let direction = "right"; 
let food = {
   x: Math.floor(Math.random() * 15 + 1) * box,
   y: Math.floor(Math.random() * 15 + 1) * box
}
/*para indicar a direção que a cobrinha vai andar*/
/*o math.random retornaum número aeatório até 1 e o math.floor retira a parte suplante*/

function criarBG() {
   context.fillStyle = "lightgreen";
   context.fillRect(0, 0, 16 * box, 16 * box); 
}
/* desenha o campo do jogoe trabalha com 4 parâmetros, x e y e altura e largura */ 

function criarCobrinha() {
   for(i=0; i < snake.length; i++){
      context.fillStyle = "green";
      context.fillRect(snake[i].x, snake [i].y, box, box);
   }
}

function drawfood(){
   context.fillStyle = "red";
   context.fillRect(food.x, food.y, box, box);
}

document.addEventListener('keydown', update);

function update (event) {
   if(event.keycode == 37 && direction != "right") direction = "left";
   if(event.keyCode == 38 && direction != "down") direction = "up";
   if(event.keyCode == 39 && direction != "left") direction = "right";
   if(event.keyCode == 40 && direction != "up") direction = "down";
}

function iniciarJogo(){
   if(snake[0].x > 15 * box && direction == "right") snake[0].x = 0;
   if(snake[0].x < 0 && direction == "left") snake[0].x = 16 * box;
   if(snake[0].y > 15 * box && direction == "down") snake[0].y = 0;
   if(snake[0].y < 0 && direction == "up") snake[0].y = 16 * box;

   for(i = 1; i < snake.length; i++){
      if(snake[0].x == snake[i].x && snake[0]. y == snake[1].y){
         clearInterval(jogo);
         alert("Oops, too hungry! You've eaten yourself... Game Over");
      }
   }

   criarBG();
   criarCobrinha();
   drawfood();

   let snakeX = snake[0].x;
   let snakeY = snake[0].y;

   if(direction == "right") snakeX += box;
   if(direction == "left") snakeX -= box;
   if(direction == "up") snakeY -= box;
   if(direction == "down") snakeY += box;

   if(snakeX != food.x || snakeY != food.y){
      snake.pop();
   }
   else{food.x = Math.floor(Math.random() * 15 + 1) * box;
      food.y = Math.floor(Math.random() * 15 + 1) * box;
   }

   let newHead = {
      x:snakeX,
      y: snakeY
   }

   snake.unshift(newHead);
}
/*a função if criou as coordenadas de aumentar ou diminuir os quadradinhos da cobrinha dependendo da direção escolhida*/

let jogo = setInterval(iniciarJogo, 150); 
/*atualizar o jogo em 100 milésimos de segundo*/
