$(document).ready(function ()
{
    slider();
});

function slider()
{
    var btnNext = $('.next');
    var btnPrev = $('.prev');
    var images = $('.images img');
    var circle = $('.nav .fas');

    btnNext.click(function ()
    {
        if (images.hasClass('active') && circle.hasClass('active'))
        {
            images.removeClass('active').siblings('.images img:first').addClass('active');
            circle.removeClass('active').siblings('.nav .fas:first').addClass('active');
        }
    });

    btnPrev.click(function ()
    {
        if (images.hasClass('active') && circle.hasClass('active'))
        {
            images.removeClass('active').prev('.images img:first').addClass('active');
            circle.removeClass('active').prev('.nav .fas:first').addClass('active');
        }
    });
    
}

