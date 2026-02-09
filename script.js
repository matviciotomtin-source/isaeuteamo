const canvas = document.getElementById("particles");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let particles = [];

for(let i=0;i<60;i++){
  particles.push({
    x: Math.random()*canvas.width,
    y: Math.random()*canvas.height,
    size: Math.random()*2+1,
    speed: Math.random()*1+0.3
  });
}

function animate(){
  ctx.clearRect(0,0,canvas.width,canvas.height);

  ctx.fillStyle = "#000000";

  particles.forEach(p=>{
    ctx.fillRect(p.x,p.y,p.size,p.size);
    p.y += p.speed;

    if(p.y > canvas.height){
      p.y = 0;
      p.x = Math.random()*canvas.width;
    }
  });

  requestAnimationFrame(animate);
}

animate();


function trocarTexto(){
  document.getElementById("texto-jp").classList.toggle("ativo");
  document.getElementById("texto-br").classList.toggle("ativo");
}


const container = document.getElementById("gifs");









