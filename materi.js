var m1 = document.getElementById("mt");
var m2 = document.getElementById("list-materi");
var m3 = document.getElementById("tbl-mt");
m2.style.display="none";
m1.addEventListener("mouseover",function(){
    m1.style.color="red";
    m1.style.backgroundColor="white";
    m1.style.color="red";
})
m1.addEventListener("click",function(){
    m2.style.display="block";
    m1.innerHTML="Pilih Materi";
    m1.style.backgroundColor="white";
    m1.style.color="red";
})
m3.addEventListener("click",function(){
    m2.style.display="none";
     m1.innerHTML="Materi";
    m1.style.backgroundColor="";
    m1.style.color="white";
    
})
