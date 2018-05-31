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


  $("#market").submit(function(event) {
    var inputNameFirst = $("input#namefirst").val();
    var inputNameLast = $("input#namelast").val();
    var inputAddress1 = $("input#address1").val();
    var inputAddress2 = $("input#address2").val();

    $(".namefirst").text(inputNameFirst);
    $(".namelast").text(inputNameLast);
    $(".address1").text(inputAddress1);
    $(".address2").text(inputAddress2);

    $("#results").show();

    event.preventDefault();
  });


});
