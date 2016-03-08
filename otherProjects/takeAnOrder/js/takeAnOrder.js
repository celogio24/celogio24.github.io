$(document).ready(function() {

  //$("#log").append("<br>added some text");
  $("#myButton").on("click", function() {

    var myInput = $("#mySingleLineText").val();

    $("#log").append("<br>User clicked the button");
    $("#log").append("<br>Value of input is: " + myInput);
  })

});
