window.onload = function (e) {

    let form = document.querySelector('form');
    let submitButton = document.querySelector('input[type=submit]');
    let inputs = document.querySelectorAll('input[type=text]');

    form.onsubmit = function(e) {
        let error = false;

       for (let i = 0; i < inputs.length; i++) {
            if (inputs[i].value == '') {
                inputs[i].classList.add('error');
                error = true;
           } else {
            inputs[i].classList.remove('error');
           }

           if (error) {
               e.preventDefault();
           }
       } 
    };
    
    // form.onsubmit = function(e) {
    //    for (let i = 0; i < inputs.length; i++) {
    //        if (inputs[i].value == '') {
    //            inputs[i].classList.add('error');
    //            e.preventDefault();
    //        } else {
    //         inputs[i].classList.remove('error');
    //        }
    //    } 
    // };


}