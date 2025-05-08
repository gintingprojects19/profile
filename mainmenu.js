var m = document.getElementById("m");
var openM = document.getElementById("open-m");
var clsM = document.getElementById("cls-m");
var ds =document.getElementById("d");
/*ds.addEventListener("click", function(){
    centerBar.style.marginLeft="-500px";
    openM.style.display="none";
    p2.style.display="none";
    
})*/

m.addEventListener("click",function(){
    openM.style.display="block";
    m.style.backgroundColor="red";
    /*m.style.color="white";*/
    m.style.fontWeight="normal";
    p2.style.display="none";
    openD.style.display="none";
    p1.style.backgroundColor="white";
    d.style.backgroundColor="white";
    
})
clsM.addEventListener("click",function(){
    openM.style.display="none";
    m.style.backgroundColor="white";
    m.style.color="black";
    m.style.fontWeight="normal";
})
/*penilian*/
var p1=document.getElementById("p");
var p2=document.getElementById("open-p");
var p3=document.getElementById("cls-p");
p1.addEventListener("click",function(){
    p2.style.display="block";
    /*p1.style.backgroundColor="red";*/
    /*p1.style.color="white";*/
    /*p1.style.fontWeight="bold";*/
    openM.style.display="none";
    openD.style.display="none";
    m.style.backgroundColor="white";
    p1.style.backgroundColor="red";
    d.style.backgroundColor="white";
    
    
})
p3.addEventListener("click",function(){
    p2.style.display="none";
    p1.style.backgroundColor="white";
    p1.style.color="black";
    p1.style.fontWeight="normal";
    
    
    
    
})
/*menu-utama*/
var menuUtama=document.getElementById("menu-utama");
var centerBar=document.getElementById("center-bar");
var cmu=document.getElementById("closed-menu-utama");
cmu.style.display="none";
cmu.addEventListener("click",function(){
    centerBar.style.marginLeft="-600px";
    openM.style.display="none";
    p2.style.display="none";
    cmu.style.display="none";
    openD.style.display="none";
})
menuUtama.addEventListener("click",function(){
    centerBar.style.marginLeft="0px";
/*    m.style.backgroundColor="red";
    p.style.backgroundColor="red";
    i.style.backgroundColor="red";
    d.style.backgroundColor="red";*/
    cmu.style.display="block";
    m.style.backgroundColor="white";
    p1.style.backgroundColor="white";
    d.style.backgroundColor="white";
    
})
var openD = document.getElementById("open-d");
var d = document.getElementById("d");
var clsD = document.getElementById("cls-d");
d.addEventListener("click",function(){
    openD.style.display="block";
    openM.style.display="none";
    p2.style.display="none";
    m.style.backgroundColor="white";
    p1.style.backgroundColor="white";
    d.style.backgroundColor="red";
})
clsD.addEventListener("click",function(){
    openD.style.display="none";
    d.style.backgroundColor="white";
})