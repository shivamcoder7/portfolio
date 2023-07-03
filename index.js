var numOfButtons= document.querySelectorAll(".drum").length;

document.addEventListener("keypress",function(evt){
    makeSound(evt.key);
    makeAnimation(evt.key);
}); 


for(var i=0;i<numOfButtons;i++){
    document.querySelectorAll("button")[i].addEventListener("click",function(){
        var alpha=this.innerHTML;
        makeSound(alpha);
        makeAnimation(alpha);
    });
}

function makeSound(key){
    // var key=event.key;
    switch(key){
        case "w":
            var tom1=new Audio("./sounds/tom-1.mp3");
            tom1.play();
            break;
        case "a":
            var tom2=new Audio("./sounds/tom-2.mp3");
            tom2.play();
            break;
        case "s":
            var tom3=new Audio("./sounds/tom-3.mp3");
            tom3.play();
            break;
        case "d":
            var tom4=new Audio("./sounds/tom-4.mp3");
            tom4.play();
            break;
        case "j":
            var snare=new Audio("./sounds/snare.mp3");
            snare.play();
            break;
        case "k":
            var kick=new Audio("./sounds/kick-bass.mp3");
            kick.play();
            break;
        case "l":
            var crash=new Audio("./sounds/crash.mp3");
            crash.play();
            break;

        default: console.log("Invalid Press");
    }
}

function makeAnimation(key){
    var currBtn=document.querySelector("."+key);
    currBtn.classList.add("pressed");
    setTimeout(function(){
        currBtn.remove("pressed");
    },100);
}

