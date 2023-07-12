"use strict";
//@ts-check 

window.onload = function() {
    let svg = document.getElementById("piirtoalusta");

    svg.style.width = "100vw";
    svg.style.height = "100vh";
    //svg.setAttribute("width", "95vw");
    //svg.setAttribute("height", "95vh");
    
    // Tällä silmukalla luodaan väriliukupalkit. Nostamalla silmukan suorituskertoja saa aikaan enemmän palkkeja
    for (let i=0; i<10; i++) {
        let rect = document.createElementNS("http://www.w3.org/2000/svg","rect");
        rect.style.x = "10%";
        rect.style.y = "10%";
        rect.style.position = "absolute";
        rect.setAttribute("width", "5%");
        rect.setAttribute("height", "25%");
        rect.classList.add("neliot");
        // Tässä saadaan muuttujasta riippuva viive animaatiolle
        rect.style.animationDelay = i/4 + "s";
        // rect.style.zIndex = -i;
        rect.style.fill = "url(#Gradient1)";
        // Lisätään palkeille tapahtumankäsittelijä, joka muuttaa palkin väriä aina kun se vaihtaa suuntaa eli animaation iteraatio vaihtuu
        rect.addEventListener("animationiteration", animlistener);
        svg.appendChild(rect);

        // Tehdään selainikkunan oikeaan alanurkkaan toinen väriliukupalkkisetti
        let rectToka = document.createElementNS("http://www.w3.org/2000/svg","rect");
        rectToka.style.x = "60%";
        rectToka.style.y = "60%";
        rectToka.style.position = "absolute";
        rectToka.setAttribute("width", "5%");
        rectToka.setAttribute("height", "25%");
        rectToka.classList.add("neliot");
        rectToka.style.animationDelay = i/4 + "s";
        //rect.style.zIndex = -i;
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

    // Haetaan html-dokumentista näppäin, jolla pingviinejä voi lisätä ja tehdään lisäys klikkaus-tapahtumankäsittelyllä
    let pingviinipainike = document.getElementById("pingviininappain");
    pingviinipainike.addEventListener("click", lisaaPingviini); 


    /**
     * Apufunktio, jolla lisätään pingviini aina kun käyttäjä painaa näppäintä.
     * @param {Event} e - tapahtuma, joka kutsui funktiota
     * @var {Element} pingviini - pingviini-elementti, joka lisätään dokumenttiin kun funktiota kutsutaan
     */
    function lisaaPingviini(e) {
    let pingviini = document.createElement("img");
    pingviini.style.position = "absolute";
    pingviini.style.top = "0%";
    pingviini.style.left = "0%";
    pingviini.alt = "pingviinikuva";

    pingviini.src = "https://appro.mit.jyu.fi/tiea2120/vt/vt4/penguin.png"; 
    
    pingviini.style.zIndex = "2";
    pingviini.classList.add("pingviinit");
    document.body.appendChild(pingviini);
    }

    // Tässä luodaan pöllön lähdekuvasta kaksi eri canvas-elementtiä, joihin sitten piirretään molempiin puolet pöllön palasista pituussuunnassa
    let canvas = document.getElementById("polloalusta");
    const ctx = canvas.getContext('2d');
    // Piti hakea pöllön kuva html tiedostosta, javascriptillä jostain syystä kuvaa ei löytynyt, jota piirtää canvakselle.
    // let pollokuva = document.createElement('img');
    // pollokuva.src = "http://appro.mit.jyu.fi/tiea2120/vt/vt4/owl.png";
    // pollokuva.alt = "kuvapöllöstä";
    // document.body.appendChild(pollokuva);
    let pollokuva = document.getElementsByTagName('img')[0];
    pollokuva.style.display = "none";

    // Luodaan vielä toinen canvas, jossa pöllön toinen puolikas on
    let tokaCanvas = document.createElement("canvas");
    const tokactx = tokaCanvas.getContext('2d');
    tokaCanvas.id = "tokaPolloAlusta";
    

    // Tässä jos yrittää käyttää style.width, niin canvas defaulttaa 300x150 kokoiseksi, en tiedä miksi. Mutta ymmärtääkseni elementin leveyttä ja korkeutta sai 
    // säätää javascriptilla, kaikki muut ominaisuudet on tehty style.property tyylillä, että css-koodia ei päädy html-tiedostoon
    canvas.width = "564";
    canvas.height = "552";
    canvas.style.position = "absolute";
    canvas.style.top = "20vh";
    canvas.style.left = "0%";
    canvas.style.zIndex = "1";
    canvas.style.overflow = "hidden";

    tokaCanvas.width = "564";
    tokaCanvas.height = "552";
    tokaCanvas.style.position = "absolute";
    tokaCanvas.style.top = "20vh";
    tokaCanvas.style.right = "0%";
    tokaCanvas.style.zIndex = "1";
    canvas.style.overflow = "hidden";

    // pollonpalat-muuttuja päättää, kuinka moneen osaan pöllö jaetaan
    const pollonpalat = pollokuva.naturalHeight/16;
    // Tehdään silmukka jolla piirretään pöllö palasina canvakselle
    for (let i=0; i<16; i+=2) {
    // Ensimmäinen numero on lähteen x-koordinaatti, toinen y-koordinaatti, kolmas lähteen leveys, neljäs lähteen pituus,
    // viides kohteen x-koordinaatti, kuudes kohteen y-koordinaatti, seitsemäs kohteen leveys, kahdeksas kohteen pituus
        ctx.drawImage(pollokuva, 0, i*pollonpalat, pollokuva.naturalWidth, pollonpalat, 0, i*pollonpalat, pollokuva.naturalWidth, pollonpalat);
    }

    // Toinen silmukka jolla tehdään toiset pöllön puolikkaat
    for (let i=1; i<=16; i+=2) {
        tokactx.drawImage(pollokuva, 0, i*pollonpalat, pollokuva.naturalWidth, pollonpalat, 0, i*pollonpalat, pollokuva.naturalWidth, pollonpalat);  
    }

    // Lisätään canvas-elementit dokumenttiin näkyville
    document.body.appendChild(canvas);
    document.body.appendChild(tokaCanvas);
};

/**
 * Tällä tapahtumankäsittelijäfunktiolla sovitellaan pöllönkuva selainikkunan keskelle, kun sen kokoa muutetaan.
 * @var {Number} pollonvalistus - pöllönvälistys, eli paljon tyhjää tilaa asetetaan pöllön kuvan yläpuolelle, kun on ensin vähennetty selainikkunan korkeudesta pöllön kuvan korkeus
 */
window.onresize = function() {
    let canvas = document.getElementById("polloalusta");
    let tokaCanvas = document.getElementById("tokaPolloAlusta");
    let pollonvalistus = (document.body.scrollHeight - canvas.height) / 2;
    canvas.style.top = `${pollonvalistus}px`;
    tokaCanvas.style.top = `${pollonvalistus}px`;
};