function formatNumber(num) {
    if (num >= 1_000_000) {
        // For millions
        return (num / 1_000_000).toFixed(1).replace(/\.0$/, '') + ' M';
    } else if (num >= 1000) {
        // For thousands
        return (num / 1000).toFixed(1).replace(/\.0$/, '') + ' k';
    }
    // For numbers less than 1000
    return num.toString();
}

function createCard(title,cName,views,monthsOld,duration,thumbnail) {
    let image=document.createElement("img")
    image.src=thumbnail;
    image.setAttribute("width","168px")
    image.setAttribute("height","92px")
    let cont=document.querySelector(".container")
    cont.insertAdjacentElement("afterbegin",image)
    let p=document.createElement("p");
    views=formatNumber(views)
    p.innerHTML=`${cName} . ${views} views . ${monthsOld} months`;
    let div=document.createElement("div");
    div.setAttribute("class","timestamp")
    div.innerHTML=`${duration}`
    let div2=document.createElement("h3");
    div2.setAttribute("class","intro")
    div2.innerHTML=`${title}`
    cont.append(div2)
    cont.append(p)
    cont.append(div)
}

createCard("This is another title added complicacies","codeWithHarry",602356,7,"31:22","img.jpeg")