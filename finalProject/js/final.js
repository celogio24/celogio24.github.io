$(document).ready(function() {

    $(".nav").find("li").on("click", function() {

        $(".nav").find("li").removeClass("active");

        $(this).addClass("active");

        //added active class to
        var page = $(this).attr("id");
        getPartial(page);

      }) //click

    function getPartial(partial) {

      if (partial == "homePage") {


      } else if (partial == "newestDealsPage") {


      } else if (partial == "bookFlightPage") {


      }

    }

    //begin the program, get the homepage
    getPartial("homepage");


  }) //ready
