function sizeReady() {
    var $ = jQuery;
    $('.visiblebox').each(function(){
        $(this).width($('.popover-content').width());
        $(this).height($('.nwp-msg').height());

        $(this).css('top', ($(window).height() / 2) - ($('.nwp-msg').height() / 2) );
        $(this).css('left', ($(window).width() / 2) - ($('.nwp-msg').width() / 2) );
    });

}

jQuery(window).load(sizeReady);