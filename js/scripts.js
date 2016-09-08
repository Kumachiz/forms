$(document).ready(function() {
  $("#blanks form").submit(function(event) {
    var verb1Input = $("input#verb1").val();
    var adjective1Input = $("input#adjective1").val();
    var verb2Input= $("input#verb2").val();
    var body1Input = $("input#body1").val();
    var adverbInput = $("input#adverb").val();
    var body2Input = $("input#body2").val();
    var nounsInput = $("input#nouns").val();
    var verb3Input = $("input#verb3").val();
    var animalsInput= $("input#animals").val();
    var nounInput = $("input#noun").val();
    var verbInput = $("input#verb").val();
    var adjectiveInput = $("input#adjective").val();
    var colorInput = $("input#color").val();

    $(".verb1").text(verb1Input);
    $(".adjective1").text(adjective1Input);
    $(".verb2").text(animalInput);
    $(".body1").text(body1Input);
    $(".adverb").text(adverbInput);
    $(".body2").text(body2Input);
    $(".nouns").text(nounsInput);
    $(".verb3").text(verb3Input);
    $(".animals").text(animalsInput);
    $(".noun").text(nounInput);
    $(".verb").text(verbInput);
    $(".adjective").text(adjectiveInput);
    $(".color").text(colorInput);

    $("#story").show();

    event.preventDefault();
  });
});
