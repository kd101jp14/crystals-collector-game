// On page load...
$(document).ready(function () {

    // Audio plays once page is loaded. (This feature is not allowed in Google browser.)
    $("#mysteryMusic").get(0).play();

    // The following variables are declared globally.
    var score = 0;
    var wins = 0;
    var losses = 0;
    var magicNumber = 19;
    var randGemVal = 12;

    // Function chooses random number, which will be assigned to the magic number.
    var chooseMagicNum = function () {
        magicNumber = Math.floor(Math.random() * 102) + 19;
        $(".magicNum").html("Magic Number: " + magicNumber);
    };
    chooseMagicNum();

    // Function returns random values between 2 and 12 to be assigned to gems.
    var chooseGemVal = function () {
        randGemVal = Math.floor(Math.random() * 11) + 2;
        return randGemVal;
    };

    // Random values are assigned to gems.
    var sapphireVal = chooseGemVal();
    var garnetVal = chooseGemVal();
    var topazVal = chooseGemVal();
    var emeraldVal = chooseGemVal();

    // If gem value matches that of another gem, choose new value. (Needs to be refactored somehow...)
    if (sapphireVal === garnetVal || sapphireVal === topazVal || sapphireVal === emeraldVal) {
        sapphireVal = chooseGemVal();
    }

    if (garnetVal === sapphireVal || garnetVal === topazVal || garnetVal === emeraldVal) {
        garnetVal = chooseGemVal();
    }

    if (topazVal === sapphireVal || topazVal === garnetVal || topazVal === emeraldVal) {
        topazVal = chooseGemVal();
    }

    if (emeraldVal === sapphireVal || emeraldVal === topazVal || emeraldVal === garnetVal) {
        emeraldVal = chooseGemVal();
    }

    // User knows gems are clickable, as cursor becomes pointer when hovering.
    $(".gem").hover(function () {
        $(this).css('cursor', 'pointer');
    });


    // Refactored click function for all gems. Score is appropriately updated when any gem is clicked.
    $(".gem").click(function () {
        var $el = $(this);
        // When any gem is clicked, it is distinguished from the others by its ID.
        var gemID = $el.attr("id");
        console.log(gemID);

        // Function for updating score.
        var updateScore = function() {
         score += gemVal[gemID];
         $(".scoreDisplay").text("Your Current Score: " + score);
        }

        // Object organizes gems and their values.
        var gemVal = {
            sapphire: sapphireVal,
            garnet: garnetVal,
            topaz: topazVal,
            emerald: emeraldVal,
        };
 
        gemVal[gemID]
        console.log(gemVal[gemID])

        // Nested function is called to update score.
        updateScore(gemVal[gemID]);
    });
 
    // Function allows game reset.
    var reset = function () {
        score = 0;
        $(".scoreDisplay").text("Your Current Score: " + score);
        chooseMagicNum();
        sapphireVal = chooseGemVal();
        garnetVal = chooseGemVal();
        topazVal = chooseGemVal();
        emeraldVal = chooseGemVal();
    };

    // Wins, losses, and reset are determined by score.
    $(".gem").click(function () {
        if (score > magicNumber) {
            losses++;
            $(".lossDisplay").text("Losses: " + losses);
            $("#loseSound").get(0).play();
            reset();
        }
        if (score === magicNumber) {
            wins++;
            $(".winsDisplay").text("Wins: " + wins);
            $("#winSound").get(0).play();
            reset();
        }
    });
});