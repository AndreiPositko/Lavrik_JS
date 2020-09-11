function OurJquery(elements) {

    this.elements = elements;

    this.click = function(f) {
        for(let i = 0; i < this.elements.length; i++) {
            this.elements[i].addEventListener('click', f);
        }
    }

}