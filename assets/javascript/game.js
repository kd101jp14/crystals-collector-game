// On page load...
$(document).ready(function () {

    // The following variables are declared globally.
    var score = 0;
    var wins = 0;
    var losses = 0;
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

    // User knows gems are clickable, as cursor becomes pointer when hovering.
    $(".gem").hover(function() {
        $(this).css('cursor','pointer');
    });

    // User can click on gems to attempt to match score w/ magic number.
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

    // Function allows game reset.
    var reset = function () {
        score = 0;
        $(".scoreDisplay").text("Your Current Score: " + score);
        randFunct();
        sapphireVal = gemValFunct();
        garnetVal = gemValFunct();
        topazVal = gemValFunct();
        emeraldVal = gemValFunct();
    };

    // Wins, losses, and reset are determined by score.
    $(".gem").click(function () {
        if (score > magicNumber) {
            losses++;
            $(".lossDisplay").text("Losses: " + losses);
            reset();
        }
        if (score === magicNumber) {
            wins++;
            $(".winsDisplay").text("Wins: " + wins);
            reset();
        }
    });
});

// To Do: 1) Fix gem value repeat issue. 2) Center gems for small viewport.