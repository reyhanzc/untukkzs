// =============================
// ELEMENT
// =============================

const cover = document.getElementById("cover");
const slider = document.getElementById("slider");

const startBtn = document.getElementById("startBtn");

const prev = document.getElementById("prev");
const next = document.getElementById("next");

const music = document.getElementById("music");

const slides = document.querySelectorAll(".slide");

let current = 0;

// =============================
// WAKTU LAGU
// SESUAIKAN DENGAN LAGUMU
// =============================

const lyricTime = [
    0,
    15,
    30,
    45,
    60,
    75
];

// =============================
// TAMPILKAN SLIDE
// =============================

function showSlide(index){

    slides.forEach(slide=>{

        slide.classList.remove("active");

    });

    slides[index].classList.add("active");

}

// =============================
// BUKA COVER
// =============================

startBtn.addEventListener("click",()=>{

    cover.classList.add("hide");

    setTimeout(()=>{

        cover.style.display="none";

    },700);

    slider.style.display="block";

    showSlide(0);

    music.currentTime=lyricTime[0];

    music.play();

});

// =============================
// NEXT
// =============================

next.addEventListener("click",()=>{

    if(current < slides.length-1){

        current++;

        showSlide(current);

        if(current < lyricTime.length){

            music.currentTime=lyricTime[current];

            music.play();

        }

    }

});

// =============================
// PREVIOUS
// =============================

prev.addEventListener("click",()=>{

    if(current>0){

        current--;

        showSlide(current);

        music.currentTime=lyricTime[current];

        music.play();

    }

});

// =============================
// KEYBOARD
// =============================

document.addEventListener("keydown",(e)=>{

    if(e.key==="ArrowRight"){

        next.click();

    }

    if(e.key==="ArrowLeft"){

        prev.click();

    }

});

// =============================
// SWIPE HP
// =============================

let startX=0;

document.addEventListener("touchstart",(e)=>{

    startX=e.touches[0].clientX;

});

document.addEventListener("touchend",(e)=>{

    let endX=e.changedTouches[0].clientX;

    if(startX-endX>60){

        next.click();

    }

    if(endX-startX>60){

        prev.click();

    }

});

// =============================
// PARTICLE
// =============================

const particles=document.getElementById("particles");

for(let i=0;i<80;i++){

    const snow=document.createElement("span");

    snow.className="snow";

    snow.style.left=Math.random()*100+"vw";

    snow.style.width=(2+Math.random()*6)+"px";

    snow.style.height=snow.style.width;

    snow.style.opacity=Math.random();

    snow.style.animationDuration=(5+Math.random()*6)+"s";

    snow.style.animationDelay=Math.random()*5+"s";

    particles.appendChild(snow);

}

// =============================
// AUTO REPLAY
// =============================

music.addEventListener("ended",()=>{

    music.currentTime=0;

    music.play();

});