//On page load...
$(document).ready(function() {

    var sapphire = 2;
    var garnet = 2;
    var topaz = 2;
    var emerald = 2;
    var score = 0;
    // Computer chooses random number
    var random = 19;

    var randFunct = function() {
        random = Math.floor(Math.random() * 102) + 19;
        $(".magicNum").html("Magic Number: " + random);
    };
    randFunct();

   

















});