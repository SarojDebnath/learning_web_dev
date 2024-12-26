console.log("DOM");
console.log(document.body);
console.log(document.body.childNodes);
console.log(document.body.childNodes[1]);
console.log(document.body.childNodes[1].childNodes[3]);
console.log(document.body.childNodes[1].firstElementChild);
document.body.childNodes[1].childNodes[3].style.backgroundColor = "green";
console.log(document.body.childNodes[1].firstElementChild.parentElement);
console.log(document.body.childNodes[1].children);