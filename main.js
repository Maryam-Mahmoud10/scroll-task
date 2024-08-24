let card = document.getElementById("card");
let display = 0;
function appear() {
    
     if (display == 1) {
        card.style.display = "none";
        display = 0;
    }
    else {
        
        card.style.display = "block";
        display = 1;
    }
}
let body = document.getElementById("body");
let light = 0; 
let img = document.getElementById("img");
function dark() {
    if (light == 1) {
        body.style.backgroundColor = "white";
        body.style.color = "black";
        img.src = "https://img.icons8.com/?size=100&id=25031&format=png&color=000000";
        light = 0;
    }
    else {
        body.style.backgroundColor = "black";
        body.style.color = "white";
        img.src = "https://img.icons8.com/?size=100&id=648&format=png&color=000000";

        light = 1;
    }
}



let span = document.querySelector(".up");

window.onscroll = function () {
  this.scrollY >= 1000 ? span.classList.add("show") : span.classList.remove("show");
};

span.onclick = function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};
