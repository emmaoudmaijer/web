/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/
/*eslint-env browser*/
/*eslint 'no-console':0*/


/*----- functie om de download animatie af te spelen-----*/

function wisselClass(img) {
    img.classList.toggle('dl-na');
    document.getElementById("dllink").innerHTML = "&#10122;";
    document.getElementById("dllinkSmall").innerHTML = "&#10122;";
}




/*----- functie om het filtermenu te tonen -----*/

function openNav() {
    document.getElementById("mySidenav").style.width = "35em";
}


/*----- functie om de homepage foto te verbergen -----*/

function closeHomePageImg(){        
    document.querySelector('.titelhomepagina').style.display='none';
}


/*----- functie om het wachtwoord te tonen op de inlog pagina -----*/

function showPass() {
        var x = document.getElementById("password");
        if (x.type === "password") {
                x.type = "text";
        } else {
                x.type = "password";
        }
}


/*----- functie om het filtermenu te verbergen -----*/

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}


/*----- functie om het favorietenhartje te vullen -----*/

var hartjes = 'leeg';
var hartjesImage = document.querySelector('.harticoon');
hartjesImage.addEventListener('click', hartjesvullen);


function hartjesvullen() {
    if (hartjes =='leeg') {
        hartjesImage.src = '../web/images/hartjeingekleurd.png';
        hartjes = 'vol';
        document.getElementById("likecount").innerHTML = "&#10122;";
        document.getElementById("likecountSmall").innerHTML = "&#10122;";
        return hartjes;
    } else {
        hartjesImage.src = '../web/images/hartjeicoon.png';
        hartjes = 'leeg';
        document.getElementById("likecount").innerHTML = "";
        document.getElementById("likecountSmall").innerHTML = "";
        return hartjes;
    }
}


function hartjesvullenOUD(hartjesImage) {
    if (hartjes =='leeg') {
        hartjesImage.src = '../web/images/hartjeingekleurd.png';
        hartjes = 'vol';
        document.getElementById("likecount").innerHTML = "&#10122;";
        document.getElementById("likecountSmall").innerHTML = "&#10122;";
        
        return hartjes;
    } else {
        hartjesImage.src = '../web/images/hartjeicoon.png';
        hartjes = 'leeg';
        document.getElementById("likecount").innerHTML = "";
        document.getElementById("likecountSmall").innerHTML = "";
        return hartjes;
    }
}

/*
hartjes.addEventListener('click', hartjesvullen);
hartjesImage.addEventListener('click', hartjesImage);
hartjesImage.addEventListener('click', hartjesvullen);
hartjesImage.addEventListener('click', hartjesvullen);
hartjesImage.addEventListener('click', hartjesvullen);
hartjesImage.addEventListener('click', hartjesvullen);
hartjesImage.addEventListener('click', hartjesvullen);
hartjesImage.addEventListener('click', hartjesvullen);
*/

document.getElementsById("verwijderen").addEventListener("click", myFunction);

function myFunction() {
  alert ("Hello World!");
}