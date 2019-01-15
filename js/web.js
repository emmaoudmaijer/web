/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/
/*eslint-env browser*/
/*eslint 'no-console':0*/


/*----- functie om de download animatie af te spelen-----*/

function wisselClass(img) {
            img.classList.toggle('dl-na');
}


/*----- functie om het filtermenu te tonen -----*/

function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
}


/*----- functie om het filtermenu te verbergen -----*/

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}


/*----- functie om het favorietenhartje te vullen -----*/

var hartjes = 'leeg';
//var hartjesImage = document.querySelector('.harticoon');

function hartjesvullen(hartjesImage) {
    if (hartjes =='leeg') {
        hartjesImage.src = '/web/images/hartjeingekleurd.png';
        hartjes = 'vol';
        return hartjes;
    } else {
        hartjesImage.src = '/web/images/hartjeicoon.png';
        hartjes = 'leeg';
        return hartjes;
    }
}
//hartjesImage.addEventListener('click', hartjesvullen);

