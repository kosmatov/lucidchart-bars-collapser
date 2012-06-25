(function ($) {

    $(function () {

        var act = function () {

            if (! $('div.gui-container > div.option-bar').length) {

                setTimeout(act, 1000);
                return;
            }

            var collapse = function () {

                $('.menu-bar, .tab-bar, .gui-footer').hide();
                $('.gui-bottom-container').css({top: 25, bottom: 0});
            }

            var expand = function () {

                $('.gui-bottom-container').css({top: 85, bottom: 25});
                $('.menu-bar, .tab-bar, .gui-footer').show();
            }

            $('div.gui-container > div.option-bar').after(

                $('<div class="option-bar-input"></div>').append(

                    $('<div class="button-bar"></div>').append(

                        $('<div class="button-bar-item"></div>').html('&equiv;').click(function () {

                            if ($(this).hasClass('cllpsd')) {

                                expand();
                                $(this).removeClass('cllpsd');
                            }

                            else {

                                collapse();
                                $(this).addClass('cllpsd');
                            }

                        }).click()
                    )
                ).css({position: 'absolute', top: 1, right: 5, display: 'block', textAlign: 'center', cursor: 'pointer'})
            );

            setTimeout(function () {$('div.ubergrowl-container').remove()}, 1000);
        }

        setTimeout(act, 1000);
    })
})(jQuery);
