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

        images.removeClass('active').next('img').addClass('active');
        circle.removeClass('active').next('i').addClass('active');

        if(images.hasClass('active') && images.hasClass('last'))
        {
            images.removeClass('active');
            images.hasClass('first').addClass('active');
        }


        // if (images.hasClass('active') && circle.hasClass('active'))
        // {
        //     images.removeClass('active').siblings('.images img:first').addClass('active');
        //     circle.removeClass('active').siblings('.nav .fas:first').addClass('active');
        // }
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

// se l'elemento con classe last ha la classe active
    // assegno la classe active all'elemento con la classe first