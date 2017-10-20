$('#user_input, #pass_input, #v_pass_input, #email').bind('keyup', function() {
    if(allFilled()) $('#register').removeAttr('disabled');
});

function allFilled() {
    var filled = true;
    $('body input').each(function() {
        if($(this).val() == '') filled = false;
    });
    return filled;
}
