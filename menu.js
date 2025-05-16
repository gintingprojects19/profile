/*materi*/
var a = document.getElementById("hm");
var b = document.getElementById("list-hm");
var c = document.getElementById("menu");
var d =document.getElementById("taks-menu");
var e = document.getElementById("about");
var f = document.getElementById("list-me");
var g =document.getElementById("closed");
var h =document.getElementById("ds");
var i =document.getElementById("open-ds");
i.style.display="none";
f.style.display="none";
c.innerHTML="Menu";
d.style.display="none";
h.addEventListener("click",function(){
   i.style.display="block" ;
})
c.addEventListener("click",function(){
    d.style.display="block";
})
b.style.display="none";
a.addEventListener("click",function(){
    b.style.display="block";
    f.style.display="none";
    a.innerHTML="-";
    i.style.display="none";
    
})
e.addEventListener("click",function(){
    b.style.display="none";
    f.style.display="block";
    a.innerHTML="home";
})
g.addEventListener("click",function(){
    d.style.display="none";
    b.style.display="none";
    f.style.display="none";
    
})
/*penilian*/
var p1=document.getElementById("p");
var p2=document.getElementById("open-p");
var p3=document.getElementById("cls-p");
p1.