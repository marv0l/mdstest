document.querySelectorAll('.atr .image img').forEach(image =>{
    image.onclick = () =>{
        document.querySelector('.img-popup').style.display = 'block';
        document.querySelector('.img-popup img').src = image.getAttribute('src');
    }
});

window.onkeydown = function( event ) {
    if ( event.keyCode == 27 ) {
        document.querySelector('.img-popup').style.display = 'none';
    }
};

document.querySelector('.img-popup span').onclick = () =>{
    document.querySelector('.img-popup').style.display = 'none';
}