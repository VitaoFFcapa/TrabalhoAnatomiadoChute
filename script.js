const phases = [
 {title:"Preparação",text:"O jogador organiza a aproximação, a postura e o equilíbrio antes do contato com a bola."},
 {title:"Balanço para trás",text:"A perna de chute se desloca para trás. Essa ação prepara a amplitude do movimento que antecede o avanço."},
 {title:"Preparação da perna (cocking)",text:"O quadril se estende e o joelho flexiona, posicionando a perna para a fase de aceleração."},
 {title:"Aceleração",text:"A coxa avança e o joelho se estende rapidamente. A sequência de movimentos contribui para aumentar a velocidade do pé antes do impacto."},
 {title:"Acompanhamento (follow-through)",text:"Após o contato, a perna continua seu movimento e o corpo controla a desaceleração e recupera o equilíbrio."}
];
const tabs=[...document.querySelectorAll(".phase-tab")];
const number=document.getElementById("phaseNumber");
const title=document.getElementById("phaseTitle");
const text=document.getElementById("phaseText");
const player=document.getElementById("player");
function setPhase(i){
 tabs.forEach((t,j)=>t.classList.toggle("active",i===j));
 number.textContent=`FASE ${i+1} DE 5`;
 title.textContent=phases[i].title;
 text.textContent=phases[i].text;
}
tabs.forEach(t=>t.addEventListener("click",()=>setPhase(Number(t.dataset.phase))));
document.getElementById("replay").addEventListener("click",()=>{
 player.classList.remove("paused"); player.style.animation="none";
 void player.getBoundingClientRect(); player.style.animation="";
 setPhase(0);
});
