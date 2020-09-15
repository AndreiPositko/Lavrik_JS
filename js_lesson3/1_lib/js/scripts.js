window.onload = function(e){
    
    let inputs = document.querySelectorAll('.check');
    let form = document.querySelector('form');
    
    form.onsubmit = function(e){
        let error = false;

        for (let i = 0; i < inputs.length; i++) {
            if (inputs[i].value === '') {
                inputs[i].classList.add('err');
                error = true;
            }
        }
        if(error) {
            e.preventDefault();
        }
    };

    // for(let i = 0; i < inputs.length; i++){
    //     inputs[i].oninput = function(){
    //         this.classList.remove('err');
    //     };
    // }
    
    // for(let i = 0; i < inputs.length; i++){
    //     inputs[i].onfocus = function(){
    //         this.classList.add('focus');
    //     };
    // }
    
    // for(let i = 0; i < inputs.length; i++){
    //     inputs[i].onblur = function(){
    //         this.classList.remove('focus');
    //     };
    // }
    
    // let jqInputs = $('check'); //Like jQuery

    let jqInputs = new OurJquery(inputs);

    // jqInputs.on('oninput', function() {
    //     this.classList.remove('err');
    // });

    // jqInputs.on('onfocus', function() {
    //     this.classList.add('focus');
    // });

    // jqInputs.on('onblur', function() {
    //     this.classList.remove('focus');
    // });

    //chain

    jqInputs.on('oninput', function() {
        this.classList.remove('err');
    }).on('onfocus', function() {
        this.classList.add('focus');
    }).on('onblur', function() {
        this.classList.remove('focus');
    });
    
    jqInputs.addClass('some').addClass('some1').addClass('some2');

    $('.items .item').html('1').addClass('nz').on('click', function() {
        $(this).html('12345');
        console.log(this);
        this.style.color = 'red';
    });
   
    /* 
     *  $('.items .item').fade(300); 
     *  https://dmitrylavrik.ru/javascript/prostaya-animaciya-na-javascript
     *  */
};