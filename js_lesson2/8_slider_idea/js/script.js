window.onload = function () {
    
   let slider1 = new Slider({
        images: '.gallery-1 .photos img',
        btnPrev: '.gallery-1 .buttons .prev',
        btnNext: '.gallery-1 .buttons .next',
        auto: false
   });
   
    function Slider(obj) {
       this.images = document.querySelector(obj.images);
       this.btnPrev = obj.btnPrev;
       this.btnNext = obj.btnNext;
       this.auto = obj.auto;
       let i = 0;
       let slider = this;

       slider.prev = function() {
           slider.images[i].classList.remove('showed');
           i--;

           if (i < 0) {
               i = slider.images.length - 1;
           }

           slider.images[i].classList.add('showed');
       };

       slider.next = function() {
           slider.images[i].classList.remove('showed');
           i++;

           if (i >= images.length) {
               i = 0;
           }

           slider.images[i].classList.add('showed');
       };

       document.querySelector(slider.btnPrev).onclick = slider.prev;
       document.querySelector(slider.btnNext).onclick = slider.next;

       if (slider.auto) {
           setInterval(slider.next, 1000);
       }
   }
};