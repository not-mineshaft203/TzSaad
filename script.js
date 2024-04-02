function linka(){
    window.open("https://youtube.com/@gamerneshabdofficial1102?si=M6LN2xDRI8IwScAm")
}
function linkb(){
    window.open("https://youtube.com/@not_mineshaft203?si=kDZXY9PWIROq9VGk")
}
function linkc(){
    window.open("https://github.com/not-mineshaft203")
}
function linkd(){
    window.open("https://www.facebook.com/profile.php?id=100088579367935")
}
function linke(){
    window.open("https://youtube.com/playlist?list=PL8G-FjI4DoAJvyBK0JehUV_KTaZhEx4Ku&si=VsWKLHcWGHVevuDQ")
}
var func = 1
function linkf(){
    if(func > 2){
        func--
        document.querySelector("#shesh").innerHTML = ``
    }else{
        func++
        document.querySelector("#shesh").innerHTML = 
        `tahsin zubaer saad <br>
        *webdeveloper. <br>
        *developer of this website <br>
        *content creator at youtube <br>
        *founder and ceo of gamer nesha @ bd official <br>
        *founder of not_mineshaft203 <br>
        *cuber at world cube association <br>
        *programmer of python and javascript <br>
        *student of class 7 <br>
        *minecraft player <br>
        *command block engineer at minecraft<br>
        *owner of tahsin smp`
    }

}
var func2 = 1
function linkg(){
    if(func2 > 2){
        func2--
        document.querySelector("#nombor").innerHTML = ``
    }else{
        func2++
        document.querySelector("#nombor").innerHTML = 
        `MY phone number is currently dead.`
    }

}
var func3 = 1
function linkh(){
    if(func3 > 2){
        func3--
        document.querySelector("#ip").innerHTML = ``
    }else{
        func3++
        document.querySelector("#ip").innerHTML = 
        `Tahsinsmp.aternos.me:46031 <br>(server can be offline so you have to knock me first.)`
    }

}


function saving(a,b){
    var a = b
    console.log(a)
}

var username = prompt("whats your name?")
var jhamela = username+"key"
localStorage.setItem(jhamela,username)
alert('hello ' + username + " welcome to my website")

var i = 0
while (i < localStorage.length){
    var c = localStorage.key(i);
    var b = localStorage.getItem(c);
    saving(c,b);
    i++
}