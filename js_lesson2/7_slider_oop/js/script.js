window.onload = function () {

    let images = document.querySelectorAll('.gallery-1 .photos img');
    let images2 = document.querySelectorAll('.gallery-2 .photos img');

    let prevButton = document.querySelector('.gallery-1 .buttons .prev');
    let nextButton = document.querySelector('.gallery-1 .buttons .next');
    let prevButton2 = document.querySelector('.gallery-2 .buttons .prev');
    let nextButton2 = document.querySelector('.gallery-2 .buttons .next');
    console.log('prevButton', prevButton);

    let slider1 = new Slider(images);

    prevButton.onclick = function() {
        slider1.prev();
    };

    nextButton.onclick = function() {
        slider1.next();
    };

    let slider2 = new Slider(images2);

    //setInterval(slider.next, 2000); В основном обьекте let context = this!
    // setInterval(() => slider2.next(), 2000);
    setInterval(function() {
        slider2.next();
     }, 2000);


    function Slider(images) {

        this.images = images;
        let i = 0;

        this.prev = function() {
            this.images[i].classList.remove('showed');
            i--;

            if (i < 0) {
                i = this.images.length - 1;
            }
            this.images[i].classList.add('showed');
        };

        this.next = function() {
            this.images[i].classList.remove('showed');
            i++;

            if (i >= this.images.length) {
                i = 0;
            }
            this.images[i].classList.add('showed');
        };
    }
};