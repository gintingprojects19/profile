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
    m.style.color="white";
    p1.style.color="black";
    i.style.color="black";
    i.style.backgroundColor="white";
    openInformasi.style.display="none";
  
    
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
    m.style.color="black";
    p1.style.color="white";
    d.style.color="black";
    openInformasi.style.display="none";
    i.style.color="black";
    i.style.backgroundColor="white";
    
    
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
    centerBar.style.marginLeft="-900px";
    openM.style.display="none";
    p2.style.display="none";
    cmu.style.display="none";
    openD.style.display="none";
    m.style.color="black";
    p1.style.color="black";
    d.style.color="black";
    openInformasi.style.display="none";
    i.style.backgroundColor="white";
    i.style.color="black";    
    d.style.backgroundColor="white";
    d.style.color="black";    
    p1.style.backgroundColor="white";
    p1.style.color="black";
    m.style.backgroundColor="white";
    m.style.color="black";
    
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
    m.style.color="black";
    p1.style.color="black";
    d.style.color="white";
    openInformasi.style.display="none";
        i.style.color="black";
    i.style.backgroundColor="white";
})
clsD.addEventListener("click",function(){
    openD.style.display="none";
    d.style.backgroundColor="white";
    d.style.color="black";
})
/*var call = document.getElementById("call");*/
var sosmed = document.getElementById("sosmed");
/*call.addEventListener("click",function(){
    sosmed.style.marginRight="25px";
})*/

var plus = document.getElementById("plus");
var minus = document.getElementById("minus");
plus.addEventListener("click",function(){
    plus.style.display="none";
    minus.style.display="block";
    sosmed.style.marginRight="12px";
    
})
minus.addEventListener("click",function(){
    plus.style.display="block";
    minus.style.display="none";
    sosmed.style.marginRight="-80px";
})

var i =document.getElementById("i");
var openInformasi=document.getElementById("open-informasi");
var clsi =document.getElementById("cls-i");
i.addEventListener("click",function(){
    openInformasi.style.display="block";
    openM.style.display="none";
    p2.style.display="none"; 
    openD.style.display="none";
    i.style.backgroundColor="red";
    i.style.color="white";
    m.style.color="black";
    m.style.backgroundColor="white";    
    p1.style.color="black";
    p1.style.backgroundColor="white";
    d.style.color="black";
    d.style.backgroundColor="white";
    
    
    
})
clsi.addEventListener("click",function(){
    openInformasi.style.display="none";
    i.style.backgroundColor="white";
    i.style.color="black";
})