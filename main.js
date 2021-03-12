$(document).ready(function ()
{
    slider();
});

function slider()
{
    var btnNext = $('.next');
    var btnPrev = $('.prev');
    

    btnNext.click(function ()
    {
        var images = $('.images img.active');
        var circle = $('.nav i.active');

        console.log(images);

        images.removeClass('active');
        circle.removeClass('active').next('i').addClass('active');

        if(images.hasClass('last') && circle.hasClass('last'))
        {
            images.removeClass('active');
            $('.images img.first').addClass('active');

            circle.removeClass('active');
            $('.nav i.first').addClass('active');
        }
        else 
        {
            images.next('img').addClass('active');

            circle.next('img').addClass('active');
        }
    });

    btnPrev.click(function ()
    {
        var images = $('.images img.active');
        var circle = $('.nav i.active');

        console.log(images);

        images.removeClass('active');
        circle.removeClass('active').prev('i').addClass('active');

        if(images.hasClass('first') && circle.hasClass('first'))
        {
            images.removeClass('active');
            $('.images img.last').addClass('active');

            circle.removeClass('active');
            $('.nav i.last').addClass('active');
        }
        else 
        {
            images.prev('img').addClass('active');

            circle.prev('img').addClass('active');
        }
    });
    
}