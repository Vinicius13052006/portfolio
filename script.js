/* =====================================
   VINI DEV PORTFOLIO
   PREMIUM JAVASCRIPT
===================================== */



// ===============================
// LOADER
// ===============================


window.addEventListener("load",()=>{


const loader=document.querySelector(".loader");


setTimeout(()=>{


loader.style.opacity="0";


setTimeout(()=>{


loader.style.display="none";


},500);


},1000);



});









// ===============================
// MENU MOBILE
// ===============================


const menu=document.querySelector(".menu");

const nav=document.querySelector("nav");



menu.addEventListener("click",()=>{


nav.classList.toggle("active");


});




document.querySelectorAll("nav a").forEach(link=>{


link.addEventListener("click",()=>{


nav.classList.remove("active");


});


});









// ===============================
// TEXTO DIGITANDO
// ===============================


const words=[

"sites incríveis",

"landing pages modernas",

"experiências digitais",

"soluções para empresas"

];


let wordIndex=0;

let charIndex=0;

let deleting=false;


const typing=document.querySelector("#typing");



function typingEffect(){



let current=words[wordIndex];



if(!deleting){


typing.textContent=current.substring(
0,
charIndex++
);



if(charIndex>current.length){


deleting=true;


setTimeout(typingEffect,1200);


return;

}



}else{


typing.textContent=current.substring(
0,
charIndex--
);



if(charIndex===0){


deleting=false;


wordIndex++;


if(wordIndex>=words.length){

wordIndex=0;

}


}


}



setTimeout(
typingEffect,
deleting ? 50 : 100
);



}



typingEffect();









// ===============================
// SCROLL REVEAL
// ===============================


const reveals=document.querySelectorAll(".reveal");



function reveal(){


reveals.forEach(item=>{


let top=item.getBoundingClientRect().top;


let height=window.innerHeight;



if(top < height - 120){


item.classList.add("active");


}


});


}



window.addEventListener(
"scroll",
reveal
);


reveal();










// ===============================
// HEADER EFFECT
// ===============================


const header=document.querySelector("header");



window.addEventListener("scroll",()=>{


if(window.scrollY>80){


header.style.background=
"rgba(2,6,23,.95)";


}else{


header.style.background=
"rgba(2,6,23,.65)";


}


});









// ===============================
// EFEITO 3D PROJETOS
// ===============================


const cards=document.querySelectorAll(".project");



cards.forEach(card=>{


card.addEventListener(
"mousemove",
(e)=>{


const rect=
card.getBoundingClientRect();



const x=
e.clientX - rect.left;



const y=
e.clientY - rect.top;



const centerX=
rect.width/2;



const centerY=
rect.height/2;



const rotateX=
(y-centerY)/15;



const rotateY=
(centerX-x)/15;




card.style.transform=
`
perspective(1000px)
rotateX(${rotateX}deg)
rotateY(${rotateY}deg)
scale(1.05)
`;



});





card.addEventListener(
"mouseleave",
()=>{


card.style.transform="";


});


});










// ===============================
// CURSOR NEON
// ===============================


const cursor=document.createElement("div");


cursor.className="cursor-glow";


document.body.appendChild(cursor);




document.addEventListener(
"mousemove",
(e)=>{


cursor.style.left=
e.clientX+"px";


cursor.style.top=
e.clientY+"px";


});









// ===============================
// PARALLAX AVATAR
// ===============================


const avatar=
document.querySelector(".avatar");



document.addEventListener(
"mousemove",
(e)=>{


let x=
(e.clientX / window.innerWidth - .5)*20;



let y=
(e.clientY / window.innerHeight - .5)*20;



if(avatar){


avatar.style.transform=
`
translate(${x}px,${y}px)
`;



}



});









// ===============================
// ANIMAÇÃO DOS CARDS DE SKILL
// ===============================


const skills=
document.querySelectorAll(".skill");



skills.forEach(skill=>{


skill.addEventListener(
"mouseenter",
()=>{


skill.style.transform=
`
translateY(-15px)
rotateY(15deg)
`;



});



skill.addEventListener(
"mouseleave",
()=>{


skill.style.transform="";


});


});










// ===============================
// SMOOTH SCROLL
// ===============================


document.querySelectorAll(
'a[href^="#"]'
)
.forEach(anchor=>{


anchor.addEventListener(
"click",
function(e){


e.preventDefault();


document.querySelector(
this.getAttribute("href")
)
.scrollIntoView({

behavior:"smooth"

});


});


});