console.log("Welcome to, Spotify!");
let songIndex = 0;
let audioElement= new Audio('Songs/1.mp3');
let audioElement2 = new Audio('Songs/2.mp3');
let audioElement3 = new Audio('Songs/3.mp3');
let audioElement4 = new Audio('Songs/4.mp3');
let audioElement5 = new Audio('Songs/5.mp3');
let audioElement6 = new Audio('Songs/6.mp3');
let audioElement7 = new Audio('Songs/7.mp3');
let audioElement8 = new Audio('Songs/8.mp3');
let audioElement9 = new Audio('Songs/9.mp3');
let audioElement10 = new Audio('Songs/10.mp3');
let audioElement11 = new Audio('Songs/11.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('progressBar');
let giff = document.getElementById('giff');
let superplay = document.getElementById('superplay');
let so2 = document.getElementById('so2');
let so3 = document.getElementById('so3');
let so4 = document.getElementById('so4');
let so5 = document.getElementById('so5');
let so6 = document.getElementById('so6');
let so7 = document.getElementById('so7');
let so8 = document.getElementById('so8');
let so9 = document.getElementById('so9');
let so10 = document.getElementById('so10');
let so11 = document.getElementById('so11');
// let songItmes1 = document.getElementsByClassName('songItems1');
// let h = document.getElementById('Home');
// let songItmes = Array.from(getElementsByClassName('SongL'));
// let songlistname = document.getElementsByClassName('songlistname');
// let song = [
//     {songName:"Sun raha hai", filePath:"Songs/1.mp3", coverPath:"Covers/Cover1.jpg"},
//     {songName:"Dil Cheez badi mast", filePath:"Songs/2.mp3", coverPath:"Covers/Cover2.jpg"},
//     {songName:"Afgan Jalebi", filePath:"Songs/3.mp3", coverPath:"Covers/Cover3.jpg"},
//     {songName:"Shaam Shandar", filePath:"Songs/4.mp3", coverPath:"Covers/Cover4.jpg"},
//     {songName:"Zindagi", filePath:"Songs/5.mp3", coverPath:"Covers/Cover5.jpg"},
//     {songName:"Janam Janam", filePath:"Songs/6.mp3", coverPath:"Covers/Cover6.jpg"},
//     {songName:"Deewani Mastani", filePath:"Songs/7.mp3", coverPath:"Covers/Cover7.jpg"},
//     {songName:"Khaab Akhil", filePath:"Songs/8.mp3", coverPath:"Covers/Cover8.jpg"},
//     {songName:"Ranjhana", filePath:"Songs/9.mp3", coverPath:"Covers/Cover9.jpg"},
//     {songName:"Desi Kalakar", filePath:"Songs/10.mp3", coverPath:"Covers/Cover10.jpg"},
//     {songName:"Khwaja mere Khwaja", filePath:"Songs/11.mp3", coverPath:"Covers/Cover11.jpg"}

// ];
masterPlay.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-play');
        masterPlay.classList.add('fa-pause');
        giff.style.opacity = 1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause');
        masterPlay.classList.add('fa-play');
        giff.style.opacity = 0;
    }
})

// songItmes.forEach((element, i) => {
//     element.getElementByTagName('img')[0].src = song[i].coverPath;
//     element.getElementsByClassName('songlistname')[0].innerText = song[i].songName;
// });
// // 
//The Last way;
// masterPlay.addEventListener('click', ()=>{
    // audioElement.play();
    // audioElement.pause();
// })

audioElement.addEventListener('timeupdate', ()=>{
    p = parseInt((audioElement.currentTime/audioElement.duration)*100);
    myProgressBar.value = p;
});

myProgressBar.addEventListener('change', ()=>{
    audioElement.currentTime = myProgressBar.value*audioElement.duration/100;
});

superplay.addEventListener('click', ()=>{
    if(audioElement.paused){
        audioElement.play('Songs/1.mp3');
        superplay.classList.remove('fa-play');
        superplay.classList.add('fa-pause');
        masterPlay.classList.remove('fa-play');
        masterPlay.classList.add('fa-pause');
    }
    else{
        audioElement.pause();
        superplay.classList.remove('fa-pause');
        superplay.classList.add('fa-play');
        masterPlay.classList.remove('fa-pause');
        masterPlay.classList.add('fa-play');
    }
    audioElement.addEventListener('timeupdate', ()=>{
        p = parseInt((audioElement.currentTime/audioElement.duration)*100);
        myProgressBar.value = p;
    });
    
    myProgressBar.addEventListener('change', ()=>{
        audioElement.currentTime = myProgressBar.value*audioElement.duration/100;
    });
    
});

so2.addEventListener('click', ()=>{
    if(audioElement2.paused){
        audioElement2.play('Songs\2.mp3');
        so2.classList.remove('fa-play');
        so2.classList.add('fa-pause');
        masterPlay.classList.remove('fa-play');
        masterPlay.classList.add('fa-pause');
    }
    else{
        audioElement2.pause();
        so2.classList.remove('fa-pause');
        so2.classList.add('fa-play');
        masterPlay.classList.remove('fa-pause');
        masterPlay.classList.add('fa-play');
    }
    audioElement2.addEventListener('timeupdate', ()=>{
        p = parseInt((audioElement2.currentTime/audioElement2.duration)*100);
        myProgressBar.value = p;
    });
    
    myProgressBar.addEventListener('change', ()=>{
        audioElement2.currentTime = myProgressBar.value*audioElement2.duration/100;
    });
    
});
so3.addEventListener('click', ()=>{
    if(audioElement3.paused){
        audioElement3.play('Songs/3.mp3');
        so3.classList.remove('fa-play');
        so3.classList.add('fa-pause');
        masterPlay.classList.remove('fa-play');
        masterPlay.classList.add('fa-pause');
    }
    else{
        audioElement3.pause();
        so3.classList.remove('fa-pause');
        so3.classList.add('fa-play');
        masterPlay.classList.remove('fa-pause');
        masterPlay.classList.add('fa-play');
    }
    audioElement3.addEventListener('timeupdate', ()=>{
        p = parseInt((audioElement3.currentTime/audioElement3.duration)*100);
        myProgressBar.value = p;
    });
    
    myProgressBar.addEventListener('change', ()=>{
        audioElement3.currentTime = myProgressBar.value*audioElement3.duration/100;
    });
    
});
so4.addEventListener('click', ()=>{
    if(audioElement4.paused){
        audioElement4.play('Songs/4.mp3');
        so4.classList.remove('fa-play');
        so4.classList.add('fa-pause');
        masterPlay.classList.remove('fa-play');
        masterPlay.classList.add('fa-pause');
    }
    else{
        audioElement4.pause();
        so4y.classList.remove('fa-pause');
        so4.classList.add('fa-play');
        masterPlay.classList.remove('fa-pause');
        masterPlay.classList.add('fa-play');
    }
    audioElement4.addEventListener('timeupdate', ()=>{
        p = parseInt((audioElement4.currentTime/audioElement4.duration)*100);
        myProgressBar.value = p;
    });
    
    myProgressBar.addEventListener('change', ()=>{
        audioElement4.currentTime = myProgressBar.value*audioElement4.duration/100;
    });
    
});
so5.addEventListener('click', ()=>{
    if(audioElement5.paused){
        audioElement5.play('Songs/5.mp3');
        so5.classList.remove('fa-play');
        so5.classList.add('fa-pause');
        masterPlay.classList.remove('fa-play');
        masterPlay.classList.add('fa-pause');
    }
    else{
        audioElement5.pause();
        so5.classList.remove('fa-pause');
        so5.classList.add('fa-play');
        masterPlay.classList.remove('fa-pause');
        masterPlay.classList.add('fa-play');
    }
    audioElement5.addEventListener('timeupdate', ()=>{
        p = parseInt((audioElement5.currentTime/audioElement5.duration)*100);
        myProgressBar.value = p;
    });
    
    myProgressBar.addEventListener('change', ()=>{
        audioElement5.currentTime = myProgressBar.value*audioElement5.duration/100;
    });
    
});
so6.addEventListener('click', ()=>{
    if(audioElement6.paused){
        audioElement6.play('Songs/6.mp3');
        so6.classList.remove('fa-play');
        so6.classList.add('fa-pause');
        masterPlay.classList.remove('fa-play');
        masterPlay.classList.add('fa-pause');
    }
    else{
        audioElement6.pause();
        so6.classList.remove('fa-pause');
        so6.classList.add('fa-play');
        masterPlay.classList.remove('fa-pause');
        masterPlay.classList.add('fa-play');
    }
    audioElement6.addEventListener('timeupdate', ()=>{
        p = parseInt((audioElement6.currentTime/audioElement6.duration)*100);
        myProgressBar.value = p;
    });
    
    myProgressBar.addEventListener('change', ()=>{
        audioElement6.currentTime = myProgressBar.value*audioElement6.duration/100;
    });
    
});
so7.addEventListener('click', ()=>{
    if(audioElement7.paused){
        audioElement7.play('Songs/7.mp3');
        so7.classList.remove('fa-play');
        so7.classList.add('fa-pause');
        masterPlay.classList.remove('fa-play');
        masterPlay.classList.add('fa-pause');
    }
    else{
        audioElement7.pause();
        so7.classList.remove('fa-pause');
        so7.classList.add('fa-play');
        masterPlay.classList.remove('fa-pause');
        masterPlay.classList.add('fa-play');
    }
    audioElement7.addEventListener('timeupdate', ()=>{
        p = parseInt((audioElement7.currentTime/audioElement7.duration)*100);
        myProgressBar.value = p;
    });
    
    myProgressBar.addEventListener('change', ()=>{
        audioElement7.currentTime = myProgressBar.value*audioElement7.duration/100;
    });
    
});
so8.addEventListener('click', ()=>{
    if(audioElement8.paused){
        audioElement8.play('Songs/8.mp3');
        so8.classList.remove('fa-play');
        so8.classList.add('fa-pause');
        masterPlay.classList.remove('fa-play');
        masterPlay.classList.add('fa-pause');
    }
    else{
        audioElement8.pause();
        so8.classList.remove('fa-pause');
        so8.classList.add('fa-play');
        masterPlay.classList.remove('fa-pause');
        masterPlay.classList.add('fa-play');
    }
    audioElement8.addEventListener('timeupdate', ()=>{
        p = parseInt((audioElement8.currentTime/audioElement8.duration)*100);
        myProgressBar.value = p;
    });
    
    myProgressBar.addEventListener('change', ()=>{
        audioElement8.currentTime = myProgressBar.value*audioElement8.duration/100;
    });
    
});
so9.addEventListener('click', ()=>{
    if(audioElement9.paused){
        audioElement9.play('Songs/9.mp3');
        so9.classList.remove('fa-play');
        so9.classList.add('fa-pause');
        masterPlay.classList.remove('fa-play');
        masterPlay.classList.add('fa-pause');
    }
    else{
        audioElement9.pause();
        so9.classList.remove('fa-pause');
        so9.classList.add('fa-play');
        masterPlay.classList.remove('fa-pause');
        masterPlay.classList.add('fa-play');
    }
    audioElement9.addEventListener('timeupdate', ()=>{
        p = parseInt((audioElement9.currentTime/audioElement9.duration)*100);
        myProgressBar.value = p;
    });
    
    myProgressBar.addEventListener('change', ()=>{
        audioElement9.currentTime = myProgressBar.value*audioElement9.duration/100;
    });
    
});
so10.addEventListener('click', ()=>{
    if(audioElement10.paused){
        audioElement10.play('Songs/10.mp3');
        so10.classList.remove('fa-play');
        so10.classList.add('fa-pause');
        masterPlay.classList.remove('fa-play');
        masterPlay.classList.add('fa-pause');
    }
    else{
        audioElement10.pause();
        so10.classList.remove('fa-pause');
        so10.classList.add('fa-play');
        masterPlay.classList.remove('fa-pause');
        masterPlay.classList.add('fa-play');
    }
    audioElement.addEventListener('timeupdate', ()=>{
        p = parseInt((audioElement10.currentTime/audioElement10.duration)*100);
        myProgressBar.value = p;
    });
    
    myProgressBar.addEventListener('change', ()=>{
        audioElement10.currentTime = myProgressBar.value*audioElement10.duration/100;
    });
    
});
so11.addEventListener('click', ()=>{
    if(audioElement11.paused){
        audioElement11.play('Songs/11.mp3');
        so11.classList.remove('fa-play');
        so11.classList.add('fa-pause');
        masterPlay.classList.remove('fa-play');
        masterPlay.classList.add('fa-pause');
    }
    else{
        audioElement11.pause();
        so11.classList.remove('fa-pause');
        so11.classList.add('fa-play');
        masterPlay.classList.remove('fa-pause');
        masterPlay.classList.add('fa-play');
    }
    audioElement.addEventListener('timeupdate', ()=>{
        p = parseInt((audioElement11.currentTime/audioElement11.duration)*100);
        myProgressBar.value = p;
    });
    
    myProgressBar.addEventListener('change', ()=>{
        audioElement11.currentTime = myProgressBar.value*audioElement11.duration/100;
    });
    
});

h.addEventListener('click', ()=>{
    console.log('https://www.youtube.com/watch?v=ANzPM5-lwXc&t=4494s');
})

