$(document).ready(function() {

    $.getJSON("jsonDatabase/dogs.json", function(data) {

      console.dir(data);
      var html = "";

      $.each(data, function(index, item) {
          html += '<div class="col-md-4">' +
            //Name, Breed, Gender
            '<div class="dogName"><small>Name: </small> ' + item.name + '</div>' +
            '<div class="dogBreed"><small>Breed: </small>' + item.breed + '</div>' +
            '<div class="dogGender"><small>Gender: </small> ' + item.gender + '</div>' +
            //images
            '<img class="dogImage" src="' + item.image + '"/>'+
            //comments start
          '<div class="commentsContainer">';
          $.each(item.comments, function(ind, i) {
              html += '<div class="dogUsername"><small>Username: </small>' + i.username + '</div>' +
                '<div class="dogComment"><small>Comment: </small>' + i.comment + '</div>' +
              '<div class="dogStars">';
//stars
            var numStars = Number(i.stars);

              for (var i = 1; i <= 5; i++) {
                if (i <= numStars) {
                  html += '<img src="images/fullStar.png"/>';

                } else {
                  html += '<img src="images/emptyStar.png"/>';

                }
              }
              html += '</div>'; //end stars

            }) //each comment


          html += '</div>' + //commentsContainer
            '</div>'; //col-md-4

        }) //each dog
      $("#dogData").append(html);
    })

  })
  /*

  //one per dog
  <div class="col-md-4 dog">
  <div class="dogName"></div>
  <div class="dogBreed"></div>
  <div class="dogGender"></div>
  <img src=""/>
  <div class="commentsContainer">
  //one per comment
    <div class="dogUsername"></div>
    <div class="dogStars"></div>
    <div class="dogComment"></div>
  //5 stars, some full, some empty
  </div> //end stars
  </div> //end commentsContainer
  </div> //end dog
  */
