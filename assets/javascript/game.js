// On page load...
$(document).ready(function () {

    // The following variables are declared globally.
    var score = 0;
    var magicNumber = 19;
    var randGemVal = 12;

    // Computer chooses random number.
     var randFunct = function () {
        magicNumber = Math.floor(Math.random() * 102) + 19;
        $(".magicNum").html("Magic Number: " + magicNumber);
    };
    randFunct();

    // Function returns random values between 2 and 12 to be assigned to gems.
     var gemValFunct = function () {
        randGemVal = Math.floor(Math.random() * 11) + 2;
        return randGemVal;
    };

    // Random values are assigned to gems.
    var sapphireVal = gemValFunct();
    var garnetVal = gemValFunct();
    var topazVal = gemValFunct();
    var emeraldVal = gemValFunct();

    // User is able to click on gems to reach the magic number.
    $("#sapphire").click(function () {
        score += sapphireVal;
        $(".scoreDisplay").text("Your Current Score: " + score);
        console.log(sapphireVal);
    });

    $("#garnet").click(function () {
        score += garnetVal;
        $(".scoreDisplay").text("Your Current Score: " + score);
        console.log(garnetVal);
    });

    $("#topaz").click(function () {
        score += topazVal;
        $(".scoreDisplay").text("Your Current Score: " + score);
        console.log(topazVal);
    });

    $("#emerald").click(function () {
        score += emeraldVal;
        $(".scoreDisplay").text("Your Current Score: " + score);
        console.log(emeraldVal);
    });


});