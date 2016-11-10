//$ function() {
  //$('h1').html('Hello jQuerry!');
//}
//$('h1').html('Hello jQuery!');

$(function() {
    
    $('button').click(function() {
        $('h1').fadeToggle(5000);
    });
});