window.onload = function (e) {

    let btn = document.querySelector('input[name=calc]');
    let num1 = document.querySelector('input[name=num1]');
    let num2 = document.querySelector('input[name=num2]');
    let span = document.querySelector('.res')
    console.log('btn', btn);
    console.log('num1', num1);
    console.log('num2', num2);
    console.log('span', span);

    btn.onclick = function () {
        console.log(1);
        let res = parseInt(num1.value) + parseInt(num2.value);
        span.innerHTML = res;
        console.log('this click', this);
        this.disabled = true;
    }

    // function btnBlock() {
    //     console.log('this block', this);
    // }


}