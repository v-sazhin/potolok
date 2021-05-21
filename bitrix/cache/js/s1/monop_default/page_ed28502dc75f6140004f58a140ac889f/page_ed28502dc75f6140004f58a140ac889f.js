
; /* Start:"a:4:{s:4:"full";s:97:"/bitrix/templates/monop_default/components/bitrix/news.list/small_banners/script.js?1554115032729";s:6:"source";s:83:"/bitrix/templates/monop_default/components/bitrix/news.list/small_banners/script.js";s:3:"min";s:0:"";s:3:"map";s:0:"";}"*/
$(document).ready(function () {
    'use strict';

    var $owlSmallBanners = $(".owlslider.smallbanners");
    var defaultMargin = $owlSmallBanners.data('margin') || 35;
    var sliderParams = {
        nav: false,
        items: 3,
        loop: true,
        margin: defaultMargin,
        autoplaySpeed: $owlSmallBanners.data('changespeed') || 2000,
        autoplayTimeout: $owlSmallBanners.data('changedelay') || 8000,
        smartSpeed: $owlSmallBanners.data('changespeed') || 2000,
        responsive: {
            0: {
                items: 1,
                margin: 0,
                autoWidth: false
            },
            420: {
                items: 1,
                autoWidth: true,
                margin: 2
            },
            768: {
                items: 2
            },
            991: {
                item: 3
            }
        }
    };

    owlInit($owlSmallBanners, sliderParams);
});
/* End */
;
; /* Start:"a:4:{s:4:"full";s:87:"/bitrix/templates/monop_default/components/bitrix/news.list/faq/script.js?1554115032657";s:6:"source";s:73:"/bitrix/templates/monop_default/components/bitrix/news.list/faq/script.js";s:3:"min";s:0:"";s:3:"map";s:0:"";}"*/
$(document).ready(function(){

    $(document).on('click','.faq .filter .btn',function(){
        var filter = $(this).data('filter');
        $('.faq .filter .btn').addClass('btn-default').removeClass('btn-primary');
        $(this).addClass('btn-primary').removeClass('btn-default')
        $('.faq').find('.panel-group .item .panel-heading').find('a').addClass('collapsed');
        $('.faq').find('.panel-group .item .panel-body').parent().removeClass('in');
        if( filter=='' ) {
            $('.faq').find('.panel-group').find('.item').show();
        } else {
            $('.faq').find('.panel-group').find('.item').hide();
            $('.faq').find('.panel-group').find('.item.filter'+filter).show();
        }
    });

});
/* End */
;; /* /bitrix/templates/monop_default/components/bitrix/news.list/small_banners/script.js?1554115032729*/
; /* /bitrix/templates/monop_default/components/bitrix/news.list/faq/script.js?1554115032657*/