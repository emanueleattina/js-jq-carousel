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

        if(images.hasClass('last'))
        {
            images.removeClass('active');
            $('.images img.first').addClass('active');
        }
        else 
        {
            images.next('img').addClass('active');
        }

        if(circle.hasClass('last'))
        {
            circle.removeClass('active');
            $('.nav i.first').addClass('active');
        }
        else 
        {
            circle.next('img').addClass('active');
        }
    });

    btnPrev.click(function ()
    {
        var images = $('.images img.active');
        var circle = $('.nav i.active');

        console.log(images);

        images.removeClass('active').prev('img').addClass('active');
        circle.removeClass('active').prev('i').addClass('active');
    });
    
}