function Popup(options) {
    this.modal = document.querySelector(options.modal);
    this.overlay = document.querySelector(options.overlay);

    let popup = this;

    this.open = function(context) {
        popup.modal.innerHTML = context;
        popup.modal.classList.add('open');
        popup.overlay.classList.add('open');
    };

    this.close = function() {
        popup.modal.classList.remove('open');
        popup.overlay.classList.remove('open');
    };

    this.overlay.onclick = popup.close;

}

let p = new Popup({
    modal: '.modal',
    overlay: '.overlay'
});

let callme = document.querySelector('.callme');

let form = document.querySelector('.for-callme-popup');
callme.onclick = function() {
    p.open(form.innerHTML);
};

let write = document.querySelector('.write');
write.onclick = function() {
    p.open('Заказать товар!')
}






