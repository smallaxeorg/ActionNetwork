    $(document).ready(function() {
    
   
    

    $('#sticky-button').click(function() {
      $('html, body').animate({scrollTop:$('form').position().top - 100 }, 'slow');
    });
    
    $(document).on('can_embed_loaded', function() {
        // do your work here, after the widget is loaded
        $('input[name="subscription[group]"]').click(function() {
            if($(this).val() == 'invalid'){
                $('#modal').show();

            }
        });
        
        $('#opt-in-sure button.subscribe').click(function() {
            $('input[name="subscription[group]"]:first').prop("checked", true);
            $('#modal').hide();
        });
        $('#opt-in-sure .close-button').click(function() {
            $('#modal').hide();
        });
        
        $(document).on('keydown', function(event) {
           if (event.key == "Escape") {
               $('#modal').hide();
           }
        });
        
    });

    
});
