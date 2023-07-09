"use strict";
//@ts-check 

window.onload = function() {
    //let svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    //svg.appendChild(rect);
    // Tässä esimerkki miten tehdä javascriptillä svg-kuvia: tee tapahtuman sisällä, muuten elementin haku ei onnistu.
    // Referoi piirrettävään svg:hen id:n avulla. sitten tee createElementNS kutsulla haluttu muotu, sitten monta setAttributea
    // että saat haluamasi kuvan
    let svg = document.getElementById("piirtoalusta");
    for (let i=0; i<10; i++) {
        let rect = document.createElementNS("http://www.w3.org/2000/svg","rect");
        //rect.style.x = (i*3) + "%";
        rect.style.x = "10%";
        rect.style.y = "10%";
        rect.style.width = "2%";
        rect.style.height = "10%";
        //rect.style.fill = "blue";
        rect.classList.add("neliot");
        // Tässä saadaan muuttujasta riippuva viive animaatiolle, huomaa että hipsut ovat tässä erikoiset, käytä copy-paste!
        //rect.setAttribute("style", `animation-delay: ${i}s`);
        rect.style.animationDelay = i/4 + "s";
        //rect.style.zIndex = -i;
        //rect.style.sijainti = i*3;
        rect.style.fill = "url(#Gradient1)";
        svg.appendChild(rect);
    }

    
    
    //svg.setAttribute("xmlns", "http://www.w3.org/2000/svg");
    //svg.setAttribute("version", "1.1");
    //svg.setAttribute("width", "300");
    //svg.setAttribute("height", "200");
    /*
    let rect = document.createElementNS("http://www.w3.org/2000/svg","rect");
    svg.appendChild(rect);
    rect.setAttribute("x", "0");
    rect.setAttribute("y", "0");
    rect.setAttribute("width", "50%");
    rect.setAttribute("height", "50%");
    rect.setAttribute("fill", 'red');
    */
    };