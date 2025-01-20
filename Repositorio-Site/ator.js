//ator
let yAtor= 366;
let xAtor= 100;
let colisao = false;
let meusPontos = 0

function mostraAtor(){
    image(imagemDoAtor, xAtor,yAtor,35,35);
}


function movimentaAtor(){
  if (keyIsDown(UP_ARROW)){
    yAtor -=3;
  }
  if (keyIsDown(DOWN_ARROW)){
    if (podeMover()){
    yAtor +=3;
    }
  }
  if (keyIsDown(LEFT_ARROW)){
    xAtor-=3.5;
  }
if (keyIsDown(RIGHT_ARROW)){
    xAtor+=3.5;}
}

function verificaColisao(){
  //collideRectCircle(x1, y1, width1, height1, cx, cy, diameter)
  for (let i = 0; i < imagemInimigos.length; i++){
    colisao = collideRectCircle(xInimigos[i], yInimigos[i], comprimentoInimigo[i], alturaInimigo[i], xAtor, yAtor,-0)
    if (colisao){
      voltaAtor();
      somColisao.play();
      if(meusPontos > 0){
        meusPontos -=1;
      }
    }
  }
}

function voltaAtor(){
  yAtor = 366; xAtor = 100
}

//desing pontos

function incluiPontos(){
  textSize(23);
  fill(color(70,130,200))
  stroke(119,136, 156)
  strokeWeight(2)
  text(meusPontos, width /2, 25)
}

function marcaPonto(){
  if (yAtor < 15) {
    meusPontos+=1; 
    somPonto.play();
    voltaAtor();
  } 
}
function podeMover(){
  return yAtor<366;
}




