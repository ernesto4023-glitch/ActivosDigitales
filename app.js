const botones = document.querySelectorAll('.btn');
botones.forEach(btn => {
    btn.addEventListener('click', () => {
        window.open('https://wa.me/+584246311409?text=Hola%20Estoy%20interesad@%20en%20tus%20servicios','_black');
    })
})

const modal = document.getElementById("modal");
const abrir = document.getElementById("abrirModal");
const cerrar = document.querySelector(".cerrar");

abrir.onclick = () => {
  modal.style.display = "block";
}

cerrar.onclick = () => {
  modal.style.display = "none";
}

window.onclick = (e) => {
  if (e.target == modal) {
    modal.style.display = "none";
  }
}


const inputFile = document.getElementById("imagenInput");
const preview = document.getElementById("preview");
const quitarBtn = document.getElementById("quitarImagen");

inputFile.addEventListener("change", function() {
  const file = this.files[0];

  if (file) {
    const reader = new FileReader();

    reader.onload = function(e) {
      preview.src = e.target.result;
      preview.style.display = "block";
      quitarBtn.style.display = "inline-block";
    }

    reader.readAsDataURL(file);
  }
});

quitarBtn.addEventListener("click", function() {
  preview.src = "";
  preview.style.display = "none";
  inputFile.value = ""; // 🔥 esto limpia el input
  quitarBtn.style.display = "none";
});

/*Menu Hamburguesa */

const toggle = document.getElementById("menu-toggle");
const nav = document.querySelector(".nav");

toggle.addEventListener("click", () => {
  nav.classList.toggle("active");
});

gsap.from('.navbar .logo',{
  x:60,
  scale:1.5,
  opacity:0,
  duration:2
});



gsap.from('.a1', {
  x: -110,
  opacity:0,
  scale:1.3,
  duration: 1
});
gsap.from('.a2', {
  x: -90,
  opacity:0,
  scale:1.3,
  duration: 1.1
});
gsap.from('.a3', {
  x: 90,
  opacity:0,
  scale:1.3,
  duration: 1.2
});
gsap.from('.a4', {
  x: 110,
  opacity:0,
  scale:1.3,
  duration: 1.3
});

gsap.from('.btn-contacto', {
  x:-60,
  scale:1.5,
  opacity:0,
  duration:2
});

gsap.from(".hero h1", {
  y: -50,
  opacity: 0,
  duration: 1
});

gsap.from(".hero p", {
  y: 30,
  opacity: 0,
  duration: 1,
  delay: 0.3
});

gsap.from(".hero .btn", {
  scrollTrigger: {
    trigger: ".hero",
    start: "top 100%"
  },
  opacity: 0,
  y: 50,
  duration: 1
});

const secciones = document.querySelectorAll(".servicios");

secciones.forEach((seccion) => {

  // H2
  gsap.from(seccion.querySelector("h2"), {
    x: 70,
    opacity: 0,
    duration: 2,
    scrollTrigger: {
      trigger: seccion.querySelector("h2"),
      start: "top 90%",
    }
  });
  gsap.from(seccion.querySelector("p"),{
  y:40,
  opacity:0,
  duration:2,
  scrollTrigger: {
    trigger: seccion.querySelector("p"),
    start: "top 90%", // cuando entra en pantalla
  }
});

  // Card 1
  gsap.from(seccion.querySelector(".card1"), {
    x: 120,
    opacity: 0,
    duration: 0.5,
    scrollTrigger: {
      trigger: seccion.querySelector(".card1"),
      start: "top 100%",
    }
  });

  // Card 2
  gsap.from(seccion.querySelector(".card2"), {
    x: 150,
    opacity: 0,
    duration: 0.9,
    scrollTrigger: {
      trigger: seccion.querySelector(".card2"),
      start: "top 100%",
    }
  });

  // Card 3
  gsap.from(seccion.querySelector(".card3"), {
    x: 180,
    opacity: 0,
    duration: 1.1,
    scrollTrigger: {
      trigger: seccion.querySelector(".card3"),
      start: "top 100%",
    }
  });

  // Card 4
  gsap.from(seccion.querySelector(".card4"), {
    x: 180,
    opacity: 0,
    duration: 1.1,
    scrollTrigger: {
      trigger: seccion.querySelector(".card4"),
      start: "top 100%",
    }
  });

});

gsap.from('.horario h2',{
  x:-60,
  opacity:0,
  duration:1,
  scrollTrigger: {
    trigger: ".horario h2",
    start: "top 90%", // cuando entra en pantalla
  }
});

gsap.from('.horario .dia',{
  x:40,
  opacity:0,
  duration:2,
  scrollTrigger: {
    trigger: ".horario .dia",
    start: "top 90%", // cuando entra en pantalla
  }
});
gsap.from('.swiper',{
  x:-80,
  opacity:0,
  duration:2,
  scrollTrigger: {
    trigger: ".swiper",
    start: "top 100%", // cuando entra en pantalla
  }
});
gsap.from('.porque-texto',{
  x:80,
  opacity:0,
  duration:1.8,
  scrollTrigger: {
    trigger: ".porque-texto",
    start: "top 100%", // cuando entra en pantalla
  }
});


gsap.from('.f1',{
  x:60,
  opacity:0,
  duration:2,
  
  scrollTrigger: {
    trigger: ".f1",
    start: "top 100%", // cuando entra en pantalla
  }
});
gsap.from('.f2',{
  x:80,
  opacity:0,
  duration:2,
  
  scrollTrigger: {
    trigger: ".f2",
    start: "top 100%", // cuando entra en pantalla
  }
});
gsap.from('.f3',{
  x:100,
  opacity:0,
  duration:2,
  
  scrollTrigger: {
    trigger: ".f3",
    start: "top 100%", // cuando entra en pantalla
  }
});
gsap.from('.f4',{
  x:120,
  opacity:0,
  duration:2,
  
  scrollTrigger: {
    trigger: ".f4",
    start: "top 100%", // cuando entra en pantalla
  }
});
gsap.from('.footer-copy',{
  x:-60,
  opacity:0,
  duration:1.5,
  
  scrollTrigger: {
    trigger: ".footer-copy",
    start: "top 100%", // cuando entra en pantalla
  }
});

gsap.from('.testimonio',{
  y:60,
  opacity:0,
  duration:1.5,
  
  scrollTrigger: {
    trigger: ".testimonio",
    start: "top 100%", // cuando entra en pantalla
  }
});

gsap.from('.titulo',{
    y:-60,
  opacity:0,
  duration:1.5,
  
  scrollTrigger: {
    trigger: ".titulo",
    start: "top 100%", // cuando entra en pantalla
  }
})

gsap.from('.cd1',{
  x:-60,
  opacity:0,
  duration:1.5,
  
  scrollTrigger: {
    trigger: ".cd1",
    start: "top 100%", // cuando entra en pantalla
  }
});

gsap.from('.cd2',{
  x:60,
  opacity:0,
  duration:1.5,
  
  scrollTrigger: {
    trigger: ".cd2",
    start: "top 100%", // cuando entra en pantalla
  }
});


