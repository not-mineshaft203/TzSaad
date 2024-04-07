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
var func4 = 1;
function linki(){
    if(func4 > 2){
        func4--;
        document.querySelector("#buga").innerHTML = ``;
    }else{
        func4++;
        document.querySelector("#buga").innerHTML = 
        `if you found any bug or glich or any other problem than please inform us on messenger.`
    }

}
function linkj(){
    document.querySelector(".oll").style.visibility = "visible";
}
var func5 = 1;
function linkk(){
    if(func5 > 2){
        func5--;
        document.querySelector("#temp").innerHTML = ``;
    }else{
        func5++;
        document.querySelector("#temp").innerHTML = 
        `we are currently working on this.please wait till the next update to get this service.`
    }

}


function saving(a,b){
    var a = b
    console.log(a)
}


function login(){
    var username = prompt("whats your name?")
    if(username){
        if(localStorage.getItem(username)){
            var password1234 = prompt('what is your password? if you forgot than use another username.')
            if(password1234 == localStorage.getItem(username)){
                alert('hello ' + username + " welcome to my website")
            }
            else{
                alert("password is incorrect please give the correct password or use another username.")
                login()
            }
    
    
        }
        else{
            function passtaking(){var password1234 = prompt("set your password (you must remember this).")
            if(password1234){
                localStorage.setItem(username,password1234);
                alert('hello ' + username + " welcome to my website")
            }
            else{
                alert("you must give password")
                passtaking()
            }
            
        
            }
             passtaking()}     
    }
    else{
        alert("you must give username")
        login()
    }
function settingerfunc (){
    var prufile = username.split(' ').map(function (s) { return s.charAt(0); }).join('');    
    document.querySelector("#profile").innerHTML = prufile;
    document.querySelector("#susername").innerHTML = prufile;
    document.querySelector("#susername").innerHTML = username;
    document.querySelector("#word").innerHTML = password1234;
    document.querySelector("#sprofile").innerHTML = prufile;
    var h = null
    function saving(b){
        var a = b
        h = h+","+a
        document.querySelector("#onnoid").innerHTML = h
    }
    var i = 0
    while (i < localStorage.length){
        var b = localStorage.key(i);
        saving(b);
        i++
    }
}
settingerfunc()
}

function settingon(){
    document.querySelector(".nampaltano").style.visibility = "visible";
    document.querySelector("#protom").style.visibility = "visible";
    document.querySelector("#ditio").style.visibility = "visible";
}
function settingoff(){
    document.querySelector(".nampaltano").style.visibility = "hidden";
    document.querySelector("#protom").style.visibility = "hidden";
    document.querySelector("#ditio").style.visibility = "hidden";
    
}


function deleting(){
    var dname = prompt("which account do you want to delete?")
    if(localStorage.getItem(dname)){
        localStorage.removeItem(dname)
        alert(dname+" was deleted successfully")
        login()
    }
    else{
        alert("the name was not found/cancelled.")
    }
} 

function olloff(){
    document.querySelector(".oll").style.visibility = "hidden"
}


addEventListener("load", (a)=>{
    a.preventDefault();
    a.returnValue = ''
    login()
})


addEventListener("beforeunload", (e)=>{
    e.preventDefault();
    e.returnValue = ''
})

var i = 0
while (i < localStorage.length){
    var c = localStorage.key(i);
    var b = localStorage.getItem(c);
    saving(c,b);
    i++
}

