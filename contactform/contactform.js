$(function() {
    $("#contact .button").click(function() {
        var name = $("#name").val();
        var email = $("#email").val();
        var subject = $("#subject").val();
        var message = $("#message").val();
        $.ajax({
            type: "POST",
            url: "contactform/contactform.php",
            data: dataString,
            success: function(){
            $('.success').fadeIn(1000);
            }
        });

        return false;
    });
});
