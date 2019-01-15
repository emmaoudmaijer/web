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
        hartjesNormaal.src = '../images/hartjeingekleurd.png';
        hartjes = 'vol';
        return hartjes;
    } else {
        hartjesNormaal.src = '../images/hartjeicoon.png';
        hartjes = 'leeg';
        return hartjes;
    }

}
hartjesNormaal.addEventListener('click', hartjesvullen);
hartjesGekleurd.addEventListener('click', hartjesNormaal);

