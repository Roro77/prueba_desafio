$(function(){
    $('a').click(function(event) {
        if (this.hash !== "") {
            event.preventDefault();

            var move = this.hash;

            $('html, body').animate({
                scrollTop: $(move).offset().top
            }, 800, function(){
                window.location.hash = move;
            });
        }       
    });
    $('[data-toggle="popover"]').popover();
});