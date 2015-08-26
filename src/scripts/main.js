var number=0;
// var picture='url("http://myspace.hanbingyan.net/images/background/'+$('select').val()+'.png")';

$(document).ready(function() {

    // Reconbobulate html structure around aticle images.
    $('img').not('#welcome-pic1').not('#welcome-pic2').each(function() {
        $(this).parent().append('<div class="image-caption"/>');
        $(this).parent().find('.image-caption').html('<div>' + $(this).prop('title') + '</div>')
        $(this).parent().find('.image-caption').prepend($(this));
    });
    changewelcome();
  
    
    // $('#wrap').css('background-image',picture);
    // $('select').change(function(){
    //   picture = $(this).val();
    //   picture = picture+'.png';
    //   picture = "url('http://myspace.hanbingyan.net/images/background/"+picture+"')"
    //   $('#wrap').css('background-image',picture);
    // });
    
});
    

// Opoen large image modal when click on an image.
$('img').not('#welcome-pic1').not('#welcome-pic2').on('click', function() {
    $('#large-image-modal .modal-title').html($(this).prop('alt'));
    $('#large-image-modal .modal-body').html('<img src="' + $(this).prop('src') + '"></img>');
    $('#large-image-modal .modal-body').append('<p>' + $(this).prop('title') + '</p>');
    $('#large-image-modal').modal('show');
});

function changewelcome(){
  var welcome1='http://myspace.hanbingyan.net/images/pokemon/pokemon'+(++number%8).toString()+'.png';
  $('#welcome-pic1').attr('src',welcome1);
  var welcome2='http://myspace.hanbingyan.net/images/pokemon/pokemon'+(++number%8).toString()+'.png';
  $('#welcome-pic2').attr('src',welcome2);
  setTimeout('changewelcome()',3000);

}
