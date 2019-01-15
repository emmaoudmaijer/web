/* Set the width of the side navigation to 250px */
function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
}

/* Set the width of the side navigation to 0 */
function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}

var hartjestatus = 'leeg';
var hartjeLeeg = document.querySelector('#opslaan');
var hartjeVol = document.querySelector('#opslaan');

function hartjesvullen() {
    if (hartjesstatus == 'leeg') {
        hartjesLeeg.src = 'images/hartjeingekleurd.png';
        hartjesstatus = 'vol';
        return hartjesstatus;
    } else {
        hartjesLeeg.src = '../images/hartjeicoon.png';
        hartjesstatus = 'leeg';
        return hartjesstatus;
    }

}
hartjesLeeg.addEventListener('click', hartjesvullen);
hartjesVol.addEventListener('click', hartjesLeeg);

