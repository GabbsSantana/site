let yInimigos = [30,90,150,35,80,200,260,315,200,245];
let velocidadeInimigos = [3.5,2.5,5,3.5,2.5,2,2.8,4,2,2.8];
let xInimigos = [600,600,600,500,400,600,600,600,500,400]
let comprimentoInimigo = [90,45,50,70,45,90,45,50,70,45]
let alturaInimigo =      [60,40,46,50,80,60,40,46,50,80]



function mostraInimigo(){
  for(let i = 0; i < imagemInimigos.length; i = i + 1){
    image(imagemInimigos[i]  ,xInimigos[i]      ,yInimigos[i],comprimentoInimigo[i], alturaInimigo[i]);}
}

function movimentaInimigo(){
    for(let i = 0; i < imagemInimigos.length; i = i + 1){
        xInimigos[i] -= velocidadeInimigos[i];
        }
}

function voltaInimigo(){
    for(let i = 0; i < imagemInimigos.length; i = i + 1){
        if(passouTodaATela(xInimigos[i])){
                xInimigos[i] = 600;
        }
    }
}

function passouTodaATela(xInimigos){
    return xInimigos < - 50;
}