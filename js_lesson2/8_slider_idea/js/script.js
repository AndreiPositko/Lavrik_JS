window.onload = function () {
    
    let slider1 = new Slider({
        images: '.gallery-1 .photos img',
        btnPrev: '.gallery-1 .buttons .prev',
        btnNext: '.gallery-1 .buttons .next',
        auto: false
    });
    
    let slider2 = new Slider({
        images: '.gallery-2 .photos img',
        btnPrev: '.gallery-2 .buttons .prev',
        btnNext: '.gallery-2 .buttons .next',
        auto: true,
        rate: 300
    });
    
    function Slider(obj) {

        this.images = document.querySelectorAll(obj.images);
        // this.btnPrev = obj.btnPrev;
        // this.btnNext = obj.btnNext;

        this.btnPrev = document.querySelector(obj.btnPrev);
        this.btnNext = document.querySelector(obj.btnNext);
        this.auto = obj.auto;
        this.rate = obj.rate || 1000;
        console.log(this.rate);

        let slider = this;
        console.log(slider.btnPrev);

        let i = 0;

        this.prev = function() {
            slider.images[i].classList.remove('showed');
            i--;

            if (i < 0) {
                i = slider.images.length - 1;
            }
            slider.images[i].classList.add('showed');
        };

        console.log(slider);

        this.next = function() {
            slider.images[i].classList.remove('showed');
            i++;

            if (i >= slider.images.length) {
                i = 0;
            }
            slider.images[i].classList.add('showed');
        };

        slider.btnPrev.onclick = function() {
            slider.prev();
        };
        
        slider.btnNext.onclick = function() {
            slider.next();
        };

        if (slider.auto) {
            setInterval(slider.prev, slider.rate);
        }
    }
};
