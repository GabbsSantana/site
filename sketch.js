
function setup() {
  createCanvas(500, 400);
  somTrilha.loop();
}

function draw() {
  background(imagemDaEstrada);
  mostraAtor();
  mostraInimigo();
  movimentaInimigo();
  movimentaAtor();
  voltaInimigo();
  verificaColisao();
  incluiPontos();
  marcaPonto();
}


