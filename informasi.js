var a = document.getElementById("if");
var b = document.getElementById("list-informasi");
var c = document.getElementById("tbl-li");
b.style.display="none";
a.addEventListener("mouseover",function(){
    a.style.color="red";
})
a.addEventListener("mouseout",function(){
    a.style.color="white";
})
a.addEventListener("click",function(){
    b.style.display="block";
    a.innerHTML="Pilih Informasi";
    a.style.backgroundColor="white";
    a.style.color="red";
    
})
c.addEventListener("click",function(){
    b.style.display="none";
    a.innerHTML="Informasi";
    a.style.backgroundColor="";
    a.style.color="white";
})