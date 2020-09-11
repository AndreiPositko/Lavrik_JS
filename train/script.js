let input = document.getElementById('input');
let result = document.querySelector('.result');

input.oninput = function() {
    result.innerHTML = input.value;
}