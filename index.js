var aud= new Audio(`./audio/letter/a.mp3`);

function playletter(id){
    aud.pause();
    var aud1= new Audio(`./audio/letter/${id}.mp3`);
    aud=aud1;
    aud.play();
    
}
function playword(id){
    aud.pause();
    var aud2= new Audio(`./audio/word/${id}.mp3`);
    aud=aud2;
    aud.play();
}
function playsps(id){
    aud.pause();
    var aud3= new Audio(`./audio/sps/${id}.mp3`);
    aud=aud3;
    aud.play();
}
function playsong(id){
    aud.pause();
    var aud4= new Audio(`./audio/song/song.mp3`);
    aud=aud4;
    aud.play();
    
}
function pouse(){
    aud.pause();
}


function play(id){
    var element=document.getElementsByName('choice');
    var choice;
    for(var i=0;i<element.length;i++){
        if(element[i].checked)
            choice=element[i].value;
    }
    
    switch (choice){
        case 'letter':   playletter(id);   
                    break;
        case 'word':      playword(id);
                    break;
        case 'sps':      playsps(id);
                    break;
        case 'song':      playsong(id);
                    break;
        case 'off':        pouse();
                    break;     
        default:
            return;
    }
     
}

