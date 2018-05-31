$(document).ready(function() {
  $("#survey").submit(function(event) {
    var inputName = $("input#name").val();
    var inputFood = $("input#favFood").val();
    var inputColor = $("input#favCol").val();
    var inputPlace = $("input#favPlace").val();
    var inputMusic = $("input#favMusic").val();
    var inputDrink = $("#favDrink").val();
    var inputCream = $("input:radio[name=favCream]:checked").val();


    $(".name").text(inputName);
    $(".favFood").text(inputFood);
    $(".favCol").text(inputColor);
    $(".favPlace").text(inputPlace);
    $(".favMusic").text(inputMusic);
    $(".favDrink").text(inputDrink);
    $(".favCream").text(inputCream);


    $("#results").show();

    event.preventDefault();
  });
});
