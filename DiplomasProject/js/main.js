$('.slider__items').slick({
    dots: true,
    arrows: false
});


$(function(){
    
    

    var mixer = mixitup('.works__items', {
        animation: {
            duration: 500,
            effects: 'fade scale(0.5)'
        }
    });

    $('#play').on('click', function(){        
        $('.icon-pause').addClass('active'),        
        $('.icon-play2').removeClass('active'),
        $('.icon-pause').removeClass('disable'),
        $('.icon-play2').addClass('disable')

    });
    $('#pause').on('click', function(){
        $('.icon-play2').addClass('active'),        
        $('.icon-pause').removeClass('active'),
        $('.icon-play2').removeClass('disable'),
        $('.icon-pause').addClass('disable')

    });
    
    

});



document.querySelector('#play').onclick = play;
document.querySelector('#pause').onclick = pause;


let video,
    display;


video = document.querySelector ('#video-player');
progress = document.querySelector ('#progress');

video.ontimeupdate = progressUpdate;

progress.onclick = videoRewind;


function play(){
    video.play();
}

function pause(){
    video.pause();
}



function progressUpdate (){
    console.log (video.duration);
    console.log (video.currentTime);
    let d = video.duration;
    let c = video.currentTime;
    progress.value = (100 * c) / d;

}

function videoRewind (){
    let w = this.offsetWidth;
    let o = event.offsetX;
    console.log(w);
    console.log(o);
    this.value = 100 *o/w;
    video.pause ();
    video.currentTime = video.duration * (o/w);
    video.play();
}


var rangeSlider = function(){
    var slider = $('.range-slider'),
        range = $('.range-slider__range'),
        value = $('.range-slider__value');
      
    slider.each(function(){
  
      value.each(function(){
        var value = $(this).prev().attr('value');
        $(this).html(value);
      });
  
      range.on('input', function(){
        $(this).next(value).html(this.value);
      });
    });
  };
  
  rangeSlider();