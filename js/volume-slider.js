$(".play").click(function(){
  $("video")[0].play();
 });

$(".pause").click(function(){
  $("video")[0].pause();
 });

$('.volume').change(function () {
  newvolume = $('.volume').val();
  $("video")[0].volume = newvolume / 100;
$('.currentvolume').text(newvolume)
});
