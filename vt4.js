"use strict";
//@ts-check 

window.onload = function() {
    //let svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    //svg.appendChild(rect);
    // Tässä esimerkki miten tehdä javascriptillä svg-kuvia: tee tapahtuman sisällä, muuten elementin haku ei onnistu.
    // Referoi piirrettävään svg:hen id:n avulla. sitten tee createElementNS kutsulla haluttu muotu, sitten muuta elementin
    // style arvoja haluamaksesi
    let svg = document.getElementById("piirtoalusta");

    // muista aina käyttää style.width ominaisuutta eikä setAttributea, koska tehtävänanto vaatii sen
    svg.style.width = "95vw";
    svg.style.height = "95vh";
    //svg.setAttribute("width", "95vw");
    //svg.setAttribute("height", "95vh");
    
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
        //TODO: JSHINT valittaa, että rect-objekteilla pitäisi olla height ja width-attribuutit. pitää korjata
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

    let pingviinipainike = document.getElementById("pingviininappain");
    pingviinipainike.addEventListener("click", lisaaPingviini); 

    function lisaaPingviini(e) {
    let pingviini = document.createElementNS("http://www.w3.org/2000/svg","image");
    pingviini.style.x = "0%";
    pingviini.style.y = "0%";
    pingviini.style.position = "absolute";
    
    //Tässä voi määrittää pingviinille valinnaisen koon, mutta ei välttämättä tarvitse.
    //pingviini.style.width = "150px";
    //pingviini.style.height = "150px";

    //pingviini.src = "https://appro.mit.jyu.fi/tiea2120/vt/vt4/penguin.png";
    //pingviini.style.visibility = 'visible';
    //pingviini.alt = "pingviinikuva";


    //tässä jos kokeilee pingviini.href niin tulee vain getter only property!
    //TODO: JSHINT valittaa, että a0:href not allowed on element image at this point. tee ehkä pingviini.src sen sijaan, ja laita
    //ulkopuolelle svg:tä?
    pingviini.setAttributeNS('http://www.w3.org/1999/xlink', 'href', 'https://appro.mit.jyu.fi/tiea2120/vt/vt4/penguin.png'); 
    
    //pingviini.style.zIndex = "10";
    pingviini.classList.add("pingviinit");
    svg.appendChild(pingviini);
    }

    //let canvas = document.createElement("canvas");
    //Piti hakea pöllö html tiedostosta, muuten kuvaa ei löytynyt, jota piirtää canvakselle
    let canvas = document.getElementById("polloalusta");
    const ctx = canvas.getContext('2d');
    let pollokuva = document.getElementsByTagName('img')[0];
    pollokuva.style.display = "none";
    //pollokuva.style.width = "564px";
    //pollokuva.style.height = "552px";
    //let pollokuva = document.createElement('img');
    //pollokuva.src = "http://appro.mit.jyu.fi/tiea2120/vt/vt4/owl.png";
    //pollokuva.alt = "kuvapöllöstä";
    //document.body.appendChild(pollokuva);

    //Tässä jos yrittää käyttää style.width, niin canvas defaulttaa 300x150 kokoiseksi, en tiedä miksi
    canvas.width = "564";
    canvas.height = "552";
    canvas.style.position = "absolute";
    canvas.style.top = "20%";
    canvas.style.left = "35%";
    canvas.style.zIndex = "11";
    //ctx.fillStyle = "#ff0000";
    //ctx.fillRect(0, 0, 150, 200);
    //ctx.fillStyle = "blue";
    //ctx.fillRect(0, 0, 150, 200);
    ctx.drawImage(pollokuva, 0, 0);
    document.body.appendChild(canvas);

    //svg.setAttribute("xmlns", "http://www.w3.org/2000/svg");
    //svg.setAttribute("version", "1.1");
    //svg.setAttribute("width", "300");
    //svg.setAttribute("height", "200");
};