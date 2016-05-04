// See: http://docs.jquery.com/Tutorials:Introducing_$(document).ready()

$(function() {
    "use strict";

    $('#load-image').on('click', function flickrSearch(){
    var apiCall = "https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=e5b7a34c6bf046a7dfbf22eebb2966a5&tags=dog&format=json";

    //PRINT API CALL (DEBUG)
    $("<span>").html(apiCall+"<br>").appendTo("body");

    $.ajax({
      url: apiCall,
      method: 'GET',
      dataType: 'jsonp', jsonp: 'jsoncallback',
      success: function jsonFlickrApi(data) {
        data.photos.photo.forEach(function(object) {
          console.log(object);

          // LINK TO IMAGE SOURCE
          var thumbnail_src = "http://farm" + object.farm + ".static.flickr.com/" + object.server + "/" + object.id + "_" + object.secret + "_" + "s.jpg";
          console.log(thumbnail_src);

          // LINK TO IMAGE PAGE (REQUIRED BY FLICKR TOS)
          var image_page_url = "http://www.flickr.com/photos/" + object.owner + "/" + object.id + "/";

          // link to image jpg
          var image_small_jpg_url = "https://farm" + object.farm + ".staticflickr.com/" + object.server + "/" + object.id + "_" + object.secret + ".jpg";
          var image_medium_jpg_url = "https://farm" + object.farm + ".staticflickr.com/" + object.server + "/" + object.id + "_" + object.secret + "_z.jpg";
          var image_large_jpg_url = "https://farm" + object.farm + ".staticflickr.com/" + object.server + "/" + object.id + "_" + object.secret + "_c.jpg";

          // PLACE IMAGE IN IMAGE TAG AND APPEND TO IMAGES DIV and WRAP IN LINK
          $("<img>").attr("src", image_small_jpg_url).appendTo("#results").wrap(("<a href='" + image_page_url + "'></a>"));
        });
      }
    });

  });

});
