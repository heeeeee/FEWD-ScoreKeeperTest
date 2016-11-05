$(document).ready(function() {

    var score = 0;

    $("#increase-5").on("click", function() {
        score += 5;

        $("#score").html(score + " Points");
    });

    $("#decrease-5").on("click", function() {
        score -= 5;

        if (score < 0) {
            $("#score").html("0 Points");
            score = 0;
        } else {
            $("#score").html(score + " Points");
        }
    });

    $("#custom-score-form").on("submit", function(event) {
        //Make sure form doesn't refresh the page
        event.preventDefault();

        //Convert string score into integer
        var customScore = $("#custom-score").val();
        var customScoreInt = parseInt(customScore);

        //Check if the new score is below 0
        if (customScoreInt < 0) {
            alert("You can't enter a score less than 0!");
        } else {
            //Set the score variable to the custom score and update the HTML
            score = customScoreInt;
            $("#score").html(score + " Points");
            $("#custom-score").val("");
        }
    });

});
