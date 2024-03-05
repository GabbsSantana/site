
// IMAGENS
let imagemDaEstrada;
let imagemDoAtor;
let imagemInimigo;
let imagemInimigo2;
let imagemInimigo3;
let imagemInimigo11;
let imagemInimigo21;

//SONS
let somTrilha;
let somColisao;
let somPonto;

function preload(){
  imagemDaEstrada = loadImage ("imagens/estrada.png");
  imagemDoAtor =    loadImage ("imagens/personagem.png");
  imagemInimigo =   loadImage ("imagens/inimigo-3.png");
  imagemInimigo2 =   loadImage ("imagens/inimigo-4.png");
  imagemInimigo3 =   loadImage ("imagens/inimigo-7.png");
  imagemInimigo11= loadImage ("imagens/inimigo-32.png");
  imagemInimigo21= loadImage ("imagens/inimigo41.png")
  imagemInimigos= [imagemInimigo, imagemInimigo2, imagemInimigo3, imagemInimigo11, imagemInimigo21,imagemInimigo, imagemInimigo2, imagemInimigo3, imagemInimigo11, imagemInimigo21]


  somTrilha   = loadSound ("sons/trilha.mp3")
  somColisao = loadSound ("sons/colisao.mp3")
  somPonto   = loadSound ("sons/pontos.wav")
}