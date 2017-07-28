$(document).ready(function(){

function nextLinkClicked() {
    var currentActiveImage = $(".image-shown");
    var nextActiveImage = currentActiveImage.next();

    if(nextActiveImage.length == 0)
    {
      nextActiveImage = $(".carousel-inner a").first();
    }

    currentActiveImage.removeClass("image-shown").addClass("image-hidden");
    nextActiveImage.addClass("image-shown").removeClass("image-hidden");
    $(".carousel-inner a").not([currentActiveImage, nextActiveImage]);
  }

  $(".nextLink").on("click", function(e){

    nextLinkClicked();

    e.preventDefault();

  });

  $(".previousLink").on("click", function(e){
    var currentActiveImage = $(".image-shown");
    var nextActiveImage = currentActiveImage.prev();
    if(nextActiveImage.length == 0){
      nextActiveImage = $(".carousel-inner a").last();
    }
    currentActiveImage.removeClass("image-shown").addClass("image-hidden");
    nextActiveImage.addClass("image-shown").removeClass("image-hidden");
    $(".carousel-inner a").not([currentActiveImage, nextActiveImage]);
    e.preventDefault();
  });

});
