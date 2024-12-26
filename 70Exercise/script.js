function getcolor() {
    let val1 = Math.ceil(Math.random() * 255);
    let g = Math.ceil(Math.random() * 255);
    let b = Math.ceil(Math.random() * 255);
    return `rgb(${val1},${g},${b})`;
}

let box = document.body.children[0].children;
console.log(box)
for (let i = 0; i < box.length; i++) {
    box[i].style.backgroundColor = getcolor(); // Set background color
    box[i].style.color = getcolor(); // Set text color
}
