$(function(){
    
    // var mixer = mixitup('.works__items');

    var mixer = mixitup('.works__items', {
        animation: {
            duration: 500,
            effects: 'fade scale(0.5)'
        }
    });
    

});

var video = document.querySelector('.video');
var circle = document.querySelector('.circle');
var juice = document.querySelector('.oranje__juice');
var btn = document.getElementById('play-pause');


function togglePlayPause(){
    if (video.paused){
        btn.className = 'pause';
        video.play ();
    }
    else{
        btn.className = "play";
        video.pause ();
    }
}

btn.onclick = function () {
    togglePlayPause();
};

video.addEventListener('timeupdate', function(){
    circlePos = video.currentTime / video.duration;
    circle.style.left = circlePos * 100 +'%';
    if (video.ended){
        btn.className = 'play';
    }
})