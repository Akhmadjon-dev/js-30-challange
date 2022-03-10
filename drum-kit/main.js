

function play(title){
    var audio = new Audio('sounds/'+title+'.wav');
    audio.play();
}

window.addEventListener('keydown', function(event){
    var key = event.keyCode;
    if(key == 65){
        play('clap');
    }
    else if(key == 83){
        play('hihat');
    }
    else if(key == 68){
        play('kick');
    }
    else if(key == 70){
        play('openhat');
    }
    else if(key == 71){
        play('boom');
    }
    else if(key == 72){
        play('ride');
    }
    else if(key == 74){
        play('snare');
    }
    else if(key == 75){
        play('tom');
    }
    else if(key == 76){
        play('tink');
    }
});