let parent = document.querySelector('.table');
let selectedItem;

console.log(parent);

parent.onclick = function(event) {
    let target = event.target;
    console.log(target);

    colorized(target);
   
};

function colorized (item) {
    
    if (selectedItem) {
        selectedItem.classList.remove('colorBg');
    }
    selectedItem = item;
    selectedItem.classList.add('colorBg');
}

