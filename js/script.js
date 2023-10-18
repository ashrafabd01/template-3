var btnTransE = document.getElementById("btn-trans-e")
var copyTextE = document.getElementById("english-trans")

btnTransE.onclick = function(){
    
    copyTextE.select();

    alert("Copied the text: " + copyTextE.value);
}

var btnTransF = document.getElementById("btn-trans-f")
var copyTextF = document.getElementById("frensh-trans")

btnTransF.onclick = function(){
    
    copyTextF.select();

    alert("Copied the text: " + copyTextF.value);
}

var btnTransG = document.getElementById("btn-trans-g")
var copyTextG = document.getElementById("german-trans")

btnTransG.onclick = function(){
    
    copyTextG.select();

    alert("Copied the text: " + copyTextG.value);
}

var hiddenParts = document.getElementById("hidden")
var hiddenList = document.getElementById("hidden-list")
var barsshow = document.getElementById("barsshow")
var barshid = document.getElementById("barshid")
var show = document.getElementById("show")

if( (window.innerWidth) <= 768){
    hiddenParts.style.display = "none";
    hiddenList.style.display = "none";
    barshid.style.display = "none";
}
if( (window.innerWidth) > 768){
    barshid.style.display = "none";
    barsshow.style.display = "none";
}
barsshow.onclick = function (){
    hiddenParts.style.display = "block";
    hiddenList.style.display = "block";
    barsshow.style.display = "none";
    barshid.style.display = "block";
}
barshid.onclick = function (){
    hiddenParts.style.display = "none";
    hiddenList.style.display = "none";
    barshid.style.display = "none";
    barsshow.style.display = "block"; 
}