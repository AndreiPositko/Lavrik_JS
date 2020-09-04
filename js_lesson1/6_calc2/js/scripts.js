window.onload = function (e) {

    // let sum = document.querySelector('input[name=sum]');
    // let min = document.querySelector('input[name=min]');
    // let div = document.querySelector('input[name=div]');
    // let mult = document.querySelector('input[name=mult]');

    let num1 = document.querySelector('input[name=num1]');
    let num2 = document.querySelector('input[name=num2]');

    let span = document.querySelector('.res');
    let buttons = document.querySelectorAll('input[type=button]');

    for (let i = 0; i <= buttons.length; i++) {
        buttons[i].onclick = function() {
            let op = this.dataset.op;
            calcForm(op);
        };
    }

    function calcForm(op) {
        let a = parseInt(num1.value);
        let b = parseInt(num2.value);
        let res;

        if (op === '+') {
            res = a + b;
        } else if (op === '-') {
            res = a - b; 
        } else if (op === '/') {
            res = a / b;
        } else if (op === '*') {
            res = a * b;
        } else {
            res = 'You type uncknown symbols';
        }
        span.innerHTML = res;
    }

    // sum.onclick = function () {
    //     let res = parseInt(num1.value) + parseInt(num2.value);
    //     span.innerHTML = res;
    // };

    // min.onclick = function () {
    //     let res = parseInt(num1.value) - parseInt(num2.value);
    //     span.innerHTML = res;
    // };

    // div.onclick = function () {
    //     let res = parseInt(num1.value) / parseInt(num2.value);
    //     span.innerHTML = res;
    // };

    // mult.onclick = function () {
    //     let res = parseInt(num1.value) * parseInt(num2.value);
    //     span.innerHTML = res;
    // };
}