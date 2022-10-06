let rond = document.getElementById("rond");
let rondtransparent = document.getElementById("arriereplan");

rond.onmouseover = afficheRond ;

function afficheRond() {
  rondtransparent.classList.remove("noactive");  
  rondtransparent.classList.add("active");
}

rond.onmouseout = cacheRond;

function cacheRond() {
  rondtransparent.classList.remove("active");
  rondtransparent.classList.add("noactive");
}

console.log("hello");