$(document).ready(function(){
    $('.parallax-one').parallaxBackground();
    $('.parallax-two').parallaxBackground({
        animation_type: 'rotate',
        zoom: 50,
        rotate_perspective: 500
    });
    $('.parallax-three').parallaxBackground({
        event: 'mouse_move',
        animation_type: 'shift',
        animate_duration: 2
    });
    $('.parallax-four').parallaxBackground({
        event: 'mouse_move',
        animation_type: 'rotate',
        animate_duration: 1,
        zoom: 70,
        rotate_perspective: 1000
    });
}

);