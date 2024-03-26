let items = document.querySelectorAll('.slider-local .item-local');
let next = document.getElementById('next');
let prev = document.getElementById('prev');


let active = 5;
function loadShow(){
    let stt = 0;
    for(var i = active + 1; i < items.length; i++){
        stt++;
        items[i].style.transform = `translateX(${120*stt}px) scale(${1 - 0.2*stt})`;
    }
}
loadShow();