// let count=document.getElementById("counter").value ;
let count=0;
document.getElementById("increase").onclick=function(){
    count+=1;
    document.getElementById("counter").textContent=count ;
}
document.getElementById("decrease").onclick=function(){
    
    count-=1;
    document.getElementById("counter").textContent=count ;
}
document.getElementById("reset").onclick=function(){
    count=0;
    document.getElementById("counter").textContent=count ;
}