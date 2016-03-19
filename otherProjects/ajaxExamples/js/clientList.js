$(document).ready(function() {

    $("#getClients").on("click", function() {

        var url = "http://celogio24.github.io/otherProjects/ajaxExamples/jsonDatabase/clients.json";

        $.getJSON(url, function(data) {

            var html = "";

            $.each(data, function(index, item) {
//List
              html += "<ul class='list-unstyled'><li><strong>Name: </strong>" + item.name + "<ul>" +
                "<li><strong>Email: </strong>" + item.email + "</li>" +
                "<li><strong>Company: </strong>" + item.company + "</li></ul></li></ul>"

            })

            $("#data").append(html);
            //alert(data);
            //console.dir(data);

          }) //getJSON

      }) //click

  }) //ready
