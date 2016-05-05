$(function() {
    "use strict";

    function maniLooping(object) {

      // LINK TO IMAGE PAGE (REQUIRED BY FLICKR TOS)
      var imagePageUrl = "http://www.flickr.com/photos/" + object.owner + "/" + object.id + "/";

      // link to image jpgs in different sizes
      var thumbnailUrl = "http://farm" + object.farm + ".static.flickr.com/" + object.server + "/" + object.id + "_" + object.secret + "_" + "s.jpg";
      var imageSmallUrl = "https://farm" + object.farm + ".staticflickr.com/" + object.server + "/" + object.id + "_" + object.secret + ".jpg";
      var imageMediumUrl = "https://farm" + object.farm + ".staticflickr.com/" + object.server + "/" + object.id + "_" + object.secret + "_z.jpg";
      var imageLargeUrl = "https://farm" + object.farm + ".staticflickr.com/" + object.server + "/" + object.id + "_" + object.secret + "_c.jpg";

      // PLACE IMAGE IN IMAGE TAG AND APPEND TO IMAGES DIV and WRAP IN LINK
      $("<img>").attr("src", imageSmallUrl).appendTo("#slideshow").wrap("<a href='" + imagePageUrl + "'></a>");

      setTimeout(1000);
    }

    $('#load-image').on('click', function flickrSearch(){
    var apiKey = "e5b7a34c6bf046a7dfbf22eebb2966a5";
    var apiCall = "https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=" + apiKey + "&tags=dog&format=json";

    $.ajax({
      url: apiCall,
      method: 'GET',
      dataType: 'jsonp', jsonp: 'jsoncallback',
      success: function jsonFlickrApi(data) {
        data.photos.photo.forEach(function(object) {
          maniLooping(object);
        });
      }
    });

  });

});
