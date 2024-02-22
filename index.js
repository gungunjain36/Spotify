// document.querySelector(".play").addEventListener("click",function(){
//     var audio = new Audio("Darkhaast Shivaay Ringtone Free Download(RingtoneLive.Com).mp3");
//     audio.play();

//     // setTimeout(audio.pause(),10000);
    
// })



var myAudio = new Audio("Darkhaast Shivaay Ringtone Free Download(RingtoneLive.Com).mp3");
var isPlaying = false;

function togglePlay(){
    isPlaying ? myAudio.pause() : myAudio.play();
};

myAudio.onplaying = function(){
    isPlaying = true;
};

myAudio.onpause = function(){
    isPlaying = false;
};

document.querySelector(".play").addEventListener("click",togglePlay())