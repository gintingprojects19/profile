var p1 = document.getElementById("pl");
var p2 = document.getElementById("list-penilaian");
var p3 = document.getElementById("tbl-pl");
p2.style.display="none";
p1.addEventListener("mouseover",function(){
    p1.style.color="red";
    p1.style.backgroundColor="white";
    p1.style.color="red";
})
p1.addEventListener("click",function(){
    p2.style.display="block";
    p1.innerHTML="Pilih Penilaian";
    p1.style.backgroundColor="white";
    p1.style.color="red";
})
p3.addEventListener("click",function(){
    p2.style.display="none";
    p1.innerHTML="Penilaian";
    p1.style.backgroundColor="";
    p1.style.color="white";
})
