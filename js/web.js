/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/
/*eslint-env browser*/
/*eslint 'no-console':0*/


/* Set the width of the side navigation to 250px */
function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
}

/* Set the width of the side navigation to 0 */
function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}

var hartjes = 'leeg';
var hartjesNormaal = document.querySelector('.harticoon');
var hartjesGekleurd = document.querySelector('.harticoon');

function hartjesvullen() {
    if (hartjes =='leeg') {
        hartjesNormaal.src = '/web/images/hartjeingekleurd.png';
        hartjes = 'vol';
        return hartjes;
    } else {
        hartjesNormaal.src = '/web/images/hartjeicoon.png';
        hartjes = 'leeg';
        return hartjes;
    }

}
hartjesNormaal.addEventListener('click', hartjesvullen);
hartjesGekleurd.addEventListener('click', hartjesNormaal);

