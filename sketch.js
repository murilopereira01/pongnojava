//variaveis da bolinha
let xBolinha = 300;
let yBolinha = 200;
let diametro = 20;
//variavel para calcular o raio da bolinha
let raio = diametro / 2;

//velocidade da bolinha
let velocidadeXBolinha = 6;
let velocidadeYBolinha = 6;

//variaveis da raquete
let xRaquete = 5;
let yRaquete = 150;
let raqueteComprimento = 10;
let raqueteAltura = 90;

function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(0, 255);
  mostraBolinha();
  movimentaBolinha();
  verificaColisaoBorda();
  mostraRaquete();
  movimentaRaquete();
  verificaColisaoRaquete();
}

function mostraBolinha() {
  fill("red");
  circle(xBolinha, yBolinha, diametro);
}

function movimentaBolinha() {
  xBolinha += velocidadeXBolinha;
  yBolinha += velocidadeYBolinha;
}

function verificaColisaoBorda() {
  if (xBolinha + raio > width || xBolinha - raio < 0) {
    velocidadeXBolinha *= -1;
  }
  if (yBolinha + raio > height || yBolinha - raio < 0) {
    velocidadeYBolinha *= -1;
  }
}

function mostraRaquete() {
  fill("white");
  rect(xRaquete, yRaquete, raqueteComprimento, raqueteAltura);
}

function movimentaRaquete() {
  if (keyIsDown(UP_ARROW)) {
    yRaquete -= 10;
  }
  if (keyIsDown(DOWN_ARROW)) {
    yRaquete += 10;
  }
}

function verificaColisaoRaquete() {
  if (
    xBolinha - raio < xRaquete + raqueteComprimento &&
    yBolinha - raio < yRaquete + raqueteAltura &&
    yBolinha + raio > yRaquete
  ) {
    velocidadeXBolinha *= -1;
  }
}