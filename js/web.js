/* Set the width of the side navigation to 250px */
function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
}

/* Set the width of the side navigation to 0 */
function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}


var hartjeinkleuren ='leeg';
var hartjenormaal = document.querySelector('#opslaan');
var hartjegekleurd = document.querySelector('#opslaan');

function hartjeInkleuren() {
    if (hartjeInkleuren =='leeg'){
        hartjenormaal.src = '../images/hartjeingekleurd.png';
        hartjeinkleuren = 'vol';
        return hartjeInkleuren;
    }
    else {
        hartjenormaal.src ='../images/hartjeicoon.png';
        hartjeinkleuren = 'leeg';
    }
}
hartjenormaal.addEventListener('click', hartjeInkleuren);

var hartje ='leeg';
var hartjeleeg = document.querySelector('.hartjeicoon');
var hartjeingekleurd = document.querySelector('.hartjeicoon');

function hartje() {
    if (hartje =='leeg'){
        hartjeleeg.src = '../images/hartjeingekleurd.png';
        hartjeinkleuren = 'vol';
        return hartje;
    }
    else {
        hartjeleeg.src ='../images/hartjeicoon.png';
        hartje = 'leeg';
        return hartje;
    }
}
hartjeleeg.addEventListener('click', hartje);
hartjeingekleurd.addEventListener('click', hartjeleeg);


