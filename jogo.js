const nome = prompt("Bem-vindo(a) ao jogo, qual é seu nome?");
document.write("Bom jogo, " + nome);
localStorage.setItem("nome", nome);

const NUM_AMONG = 42;
const TEMPO_INICIAL = 10;
let pontos = 0;
let tempo = 0;
let timer = null;

function iniciaJogo(){
    pontos = 0;
    tempo = TEMPO_INICIAL;
    let tela = document.getElementById("tela");
    tela.innerHTML ="";

    for (let i = 0; i < NUM_AMONG; ++i) {
        let among = document.createElement("img");
        among.src = "among.jpg";
        among.id = "a" +i;
        among.onclick = function(){
        pegaAmong(this);
        };

        tela.appendChild(among);
    }

    timer = setInterval(contaTempo,1000);
}
function pegaAmong(among) {
    among
    among.src = "among2.jpg",
    ++pontos;
      
    let contadorPontos = document.getElementById("pontos");
    contadorPontos.innerText =pontos;
}
function contaTempo (){
  if(tempo > 0){
    --tempo;
  
    let contadorTempo = document.getElementById("tempo");
    contadorTempo.innerText = tempo;
    return contaTempo = null;
  }

    if(tempo <= 0){
        clearInterval(timer);
        alert("Parabéns, você fez " + pontos + " pontos!");
        iniciaJogo();
    }
}