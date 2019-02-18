//On page load...
$(document).ready(function () {

    var sapphire = 2;
    var garnet = 2;
    var topaz = 2;
    var emerald = 2;
    var score = 0;
    // Computer chooses random number
    var random = 19;

    var randFunct = function () {
        random = Math.floor(Math.random() * 102) + 19;
        $(".magicNum").html("Magic Number: " + random);
    };
    randFunct();

    randGemVal = 12;

    var gemValFunct = function () {
        randGemVal = Math.floor(Math.random() * 11) + 2;
        return randGemVal;
    }
    var sapphireVal = gemValFunct();
    var garnetVal = gemValFunct();
    var topazVal = gemValFunct();
    var emeraldVal = gemValFunct();

    console.log(randGemVal);

    // User is able to click on gems.
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