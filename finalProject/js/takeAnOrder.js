$(document).ready(function() {

  //$("#log").append("<br>added some text");

  //  $("#").on("", function() {   });

  // mouseleave and mouse enter
  $("#myButton").on("mouseenter", function() {
      $("#log").append("<br>Button mouseenter");
      $(this).text("Place my Order!");
    })
    .on("mouseleave", function() {
      $("#log").append("<br>Button mouseleave");
      $(this).text("Click Me!");
    });



  // focus
  $("#mySingleLineText").on("focus", function() {
      $("#log").append("<br>input focus");
      $(this).css("background-color", "#F7F8E0")

    })
    //blur
    .on("blur", function() {
      $("#log").append("<br>input blur");
      $(this).css("background-color", "#FFF")

    });
  //change colour
  $("#mySelect").on("change", function() {
    var val = $(this).val();
    $("#mySelectMessage").html(val + "");

  });


  //user clicks button
  $("#myButton").on("click", function() {

    var myInput = $("#mySingleLineText").val();
    var myTextarea = $("#myTextarea").val();
    var mySelect = $("#mySelect").val();
    var myRadio = $("[name='gender']:checked").val();

    var myCheckValues = [];
    //each is a jquery loop for objects/arrays
    $("[name='vehicle']:checked").each(function() {
      myCheckValues.push($(this).val());
    });

    $("#log").append("<br>User clicked the button");

    $("#log").append("<br>Name: " + myInput);
    $("#log").append("<br>E-mail: " + myInput);
    $("#log").append("<br>Additional Requests: " + myTextarea);
    $("#log").append("<br>Number of Travellers: " + mySelect);
    $("#log").append("<br>Location: " + myRadio);
    $("#log").append("<br>Extra Bookings: " + myCheckValues.join());
  })

});
