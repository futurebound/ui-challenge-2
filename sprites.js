'use strict';

$( () => {
    let $textInput = $(`input[name='text-input-validation']`);
    let $divWarn = $(`.invalid-warn`);
    $textInput.on('keyup', event => {
        if(e.target.value.length > 4 && $textInput.hasClass('invalid-input')) {
            $textInput.removeClass('invalid-input');
            $divWarn.toggle();
        } else if(event.target.value.length < 5 && !$textInput.hasClass('invalid-input')) {
            $divWarn.toggle();
        }
    })
});