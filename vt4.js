"use strict";
//@ts-check 

window.onload = function() {
    //let svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    //svg.appendChild(rect);
    // Tässä esimerkki miten tehdä javascriptillä svg-kuvia: tee tapahtuman sisällä, muuten elementin haku ei onnistu.
    // Referoi piirrettävään svg:hen id:n avulla. sitten tee createElementNS kutsulla haluttu muotu, sitten muuta elementin
    // style arvoja haluamaksesi
    let svg = document.getElementById("piirtoalusta");
    for (let i=0; i<10; i++) {
        let rect = document.createElementNS("http://www.w3.org/2000/svg","rect");
        //rect.style.x = (i*3) + "%";
        rect.style.x = "10%";
        rect.style.y = "10%";
        rect.style.width = "5%";
        rect.style.height = "25%";
        //rect.style.fill = "blue";
        rect.classList.add("neliot");
        // Tässä saadaan muuttujasta riippuva viive animaatiolle, huomaa että hipsut ovat tässä erikoiset, käytä copy-paste!
        //rect.setAttribute("style", `animation-delay: ${i}s`);
        rect.style.animationDelay = i/4 + "s";
        //rect.style.zIndex = -i;
        //rect.style.sijainti = i*3;
        rect.style.fill = "url(#Gradient1)";
        rect.addEventListener("animationiteration", animlistener);
        svg.appendChild(rect);

        let rectToka = document.createElementNS("http://www.w3.org/2000/svg","rect");
        //rect.style.x = (i*3) + "%";
        rectToka.style.x = "60%";
        rectToka.style.y = "50%";
        rectToka.style.width = "5%";
        rectToka.style.height = "25%";
        //rect.style.fill = "blue";
        rectToka.classList.add("neliot");
        // Tässä saadaan muuttujasta riippuva viive animaatiolle, huomaa että hipsut ovat tässä erikoiset, käytä copy-paste!
        //rect.setAttribute("style", `animation-delay: ${i}s`);
        rectToka.style.animationDelay = i/4 + "s";
        //rect.style.zIndex = -i;
        //rect.style.sijainti = i*3;
        rectToka.style.fill = "url(#Gradient1)";
        rectToka.addEventListener("animationiteration", animlistener);
        svg.appendChild(rectToka);
    }

    // Muutetaan palkkien väri tapahtumakäsittelijällä
    function animlistener(e) {
        if (e.target.style.fill == `url("#Gradient1")`) {
            e.target.style.fill = "url(#Gradient2)";
        }
        else {
            e.target.style.fill = "url(#Gradient1)";
        }
    }

    let pingviini = document.createElementNS("http://www.w3.org/2000/svg","image");
    pingviini.style.x = "0%";
    pingviini.style.y = "0%";
    pingviini.style.width = "150";
    pingviini.style.height = "150";
    pingviini.style.position = "absolute";
    //pingviini.style.visibility = 'visible';
    //pingviini.src = "https://appro.mit.jyu.fi/tiea2120/vt/vt4/penguin.png";
    //pingviini.alt = "pingviinikuva";
    //pingviini.style.x = "0%";
    //pingviini.style.y = "0%";
    //tässä jos kokeilee pingviini.href niin tulee vain getter only property!
    pingviini.setAttributeNS('http://www.w3.org/1999/xlink', 'href', 'https://appro.mit.jyu.fi/tiea2120/vt/vt4/penguin.png'); 
    
    //pingviini.style.zIndex = "10";

    svg.appendChild(pingviini);

    //svg.setAttribute("xmlns", "http://www.w3.org/2000/svg");
    //svg.setAttribute("version", "1.1");
    //svg.setAttribute("width", "300");
    //svg.setAttribute("height", "200");
    };