document.addEventListener("DOMContentLoaded", () => {
    const menuToggle = document.querySelector('#mobile-menu');
    const navLinksContainer = document.querySelector('.nav-links-container');

    menuToggle.addEventListener('click', () => {
        navLinksContainer.classList.toggle('nav-active');
    });

    let list = document.querySelector('.slider .list');
    let items = document.querySelectorAll('.slider .list .item');
    // let next = document.getElementById('next');
    // let prev = document.getElementById('prev');
    let dots = document.querySelectorAll('.slider .dots li');

    let active = 0;
    let lengthItems = items.length - 1; // Corrected typo

    next.onclick = function(){
        if(active + 1 > lengthItems){
            active = 0;
        }else{
            active = active + 1;
        }
        reloadSlider();
    }
    prev.onclick = function(){
        if(active - 1 < 0){
            active = lengthItems;
        }else{
            active = active - 1;
        }
        reloadSlider();
    }
    let refreshSlider = setInterval(()=> {next.click()}, 5000);

    function reloadSlider(){
        if (items[active]) {
            let checkLeft = items[active].offsetLeft;
            list.style.left = -checkLeft + 'px';

            let lastActiveDot = document.querySelector('.slider .dots li.active');
            if (lastActiveDot) {
                lastActiveDot.classList.remove('active');
            }
            dots[active].classList.add('active');
            clearInterval(refreshSlider);
            refreshSlider = setInterval(()=> {next.click()}, 3000);
        } else {
            console.error('Active item is out of bounds:', active);
        }
    }

    dots.forEach((li, key) => {
        li.addEventListener('click', function(){
            active = key;
            reloadSlider();
        })
    });
});
