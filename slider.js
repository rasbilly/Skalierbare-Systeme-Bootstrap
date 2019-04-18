$(document).on('input change', '#inputProzess', function() {
    $('#percentage').html( $(this).val()+'%' );
});