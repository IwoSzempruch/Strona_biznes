i = 1;
j = 1;
function Wyswietl1(){
    if(i%2!=0){
        document.getElementById("content-2").style.opacity = "1";
        document.getElementById("content-2").style.transform = "translateY(0)";
    }
    else{
        document.getElementById("content-2").style.opacity = "0";
        document.getElementById("content-2").style.transform = "translateY(100%)";
    }
    i++;
}
function Wyswietl2(){
    if(j%2!=0){
        document.getElementById("content-3").style.opacity = "1";
        document.getElementById("content-3").style.transform = "translateY(0)";
    }
    else{
        document.getElementById("content-3").style.opacity = "0";
        document.getElementById("content-3").style.transform = "translateY(100%)";
    }
    j++;
}