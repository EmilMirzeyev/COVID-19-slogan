function retry (){
        setTimeout(function(){change("stay");},0);
        setTimeout(function(){change("relax");},1000);
        setTimeout(function(){change("keep");},2000);
        setTimeout(function(){change("eat");},3000);
        setTimeout(function(){change("sleep");},4000);
        setTimeout(function(){change("watch");},5000);
        setTimeout(function(){change("learn");},6000);
}
window.onload=retry();
setInterval(() => {retry()},7000);
function change(x){
    document.getElementById("main-text").innerText = x;
}