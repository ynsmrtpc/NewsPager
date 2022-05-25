const articleNew = document.getElementById('articleNews');

for (let i=0; i<10; i++) {
 articleNew.innerHTML += `
  <article class="brick entry format-standard animate-this">
                     <div class="entry-thumb">
                         <a href="#" class="thumb-link">
                             <img src="https://static5.depositphotos.com/1011728/537/i/450/depositphotos_5372095-stock-photo-3d-render-of-baloon.jpg">
                         </a>
                     </div>
                     <div class="entry-text">
                         <div class="entry-header">
                             <div class="entry-meta">
                                 <span class="cat-links">
                                     <a href="#">Red</a>
                                     <a href="#">Baloon</a>
                                 </span>
                             </div>
                             <h1 class="entry-title"><a href="#">Red Baloon</a></h1>
                         </div>
                         <div class="entry-excerpt">
                             <p >Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus assumenda ea,
                                 eaque eius illum impedit nisi rerum ullam. Aspernatur aut eius facilis fugiat illum
                                 laudantium magni maiores neque nostrum odio pariatur quaerat quis quisquam, temporibus ullam.
                                 Consectetur, debitis dignissimos ducimus eaque est ex excepturi facilis fugit illo iusto labore
                                 magni nostrum quae, quidem rem tempore velit. Ab ad alias animi consequuntur cumque deserunt dignissimos
                                 dolor earum eum ex excepturi id illum, iste iure, maiores molestias necessitatibus nemo nesciunt nulla odio,
                                 quae quaerat qui quod sed tempora totam velit vitae? Ad excepturi expedita fuga id nam nulla praesentium quae
                                 soluta voluptatem.</p>
                         </div>
                     </div>
                 </article>`;
}
(function($) {
    "use strict";

    var cfg = {
            defAnimation: "fadeInUp", // default css animation		
            scrollDuration: 800, 
            statsDuration: 4000,
        },

        $WIN = $(window); 
    
    
        var ssPreloader = function() {
            $WIN.on('load', function() {
    
                // will first fade out the loading animation 
                $("#loader").fadeOut("slow", function() {
    
                    // will fade out the whole DIV that covers the website.
                    $("#preloader").delay(300).fadeOut("slow");
    
                });
            });
        };

        var ssMobileNav = function() {

            var toggleButton = $('.menu-toggle'),
                nav = $('.main-navigation');
    
            toggleButton.on('click', function(event) {
                event.preventDefault();
    
                toggleButton.toggleClass('is-clicked');
                nav.slideToggle();
            });
    
            if (toggleButton.is(':visible')) nav.addClass('mobile');
    
            $WIN.resize(function() {
                if (toggleButton.is(':visible')) nav.addClass('mobile');
                else nav.removeClass('mobile');
            });
    
            $('#main-nav-wrap li a').on("click", function() {
                if (nav.hasClass('mobile')) {
                    toggleButton.toggleClass('is-clicked');
                    nav.fadeOut();
                }
            });
    
        };

        var ssSearch = function() {

            var searchWrap = $('.search-wrap');
            var searchField = searchWrap.find('.search-field');
            var closeSearch = $('#close-search');
            var searchTrigger = $('.search-trigger');
            var body = $('body');
    
            searchTrigger.on('click', function(e) {
    
                e.preventDefault();
                e.stopPropagation();
                var $this = $(this);
    
                body.addClass('search-visible');
                setTimeout(function() {
                    $('.search-wrap').find('.search-field').focus();
                }, 100);
    
            });
    
    
            closeSearch.on('click', function() {
                var $this = $(this);
    
                if (body.hasClass('search-visible')) {
                    body.removeClass('search-visible');
                    setTimeout(function() {
                        $('.search-wrap').find('.search-field').blur();
                    }, 100);
                }
            });
    
            searchWrap.on('click', function(e) {
                if (!$(e.target).is('.search-field')) {
                    closeSearch.trigger('click');
                }
            });
    
            searchField.on('click', function(e) {
                e.stopPropagation();
            });
    
            searchField.attr({ placeholder: 'Type Your Keywords', autocomplete: 'off' });
    
        };

        var ssSmoothScroll = function() {

            $('.smoothscroll').on('click', function(e) {
                var target = this.hash,
                    $target = $(target);
    
                e.preventDefault();
                e.stopPropagation();
    
                $('html, body').stop().animate({
                    'scrollTop': $target.offset().top
                }, cfg.scrollDuration, 'swing').promise().done(function() {
    
                    // check if menu is open
                    if ($('body').hasClass('menu-is-open')) {
                        $('#header-menu-trigger').trigger('click');
                    }
    
                    window.location.hash = target;
                });
            });
    
        };

    var ssPlaceholder = function() {
        $('input, textarea, select').placeholder();
    };


    var ssAjaxChimp = function() {

        $('#mc-form').ajaxChimp({
            language: 'es',
            url: cfg.mailChimpURL
        });

        // Mailchimp translation
        //
        //  Defaults:
        //	 'submit': 'Submitting...',
        //  0: 'We have sent you a confirmation email',
        //  1: 'Please enter a value',
        //  2: 'An email address must contain a single @',
        //  3: 'The domain portion of the email address is invalid (the portion after the @: )',
        //  4: 'The username portion of the email address is invalid (the portion before the @: )',
        //  5: 'This email address looks fake or invalid. Please enter a real email address'

        $.ajaxChimp.translations.es = {
            'submit': 'Submitting...',
            0: '<i class="fa fa-check"></i> We have sent you a confirmation email',
            1: '<i class="fa fa-warning"></i> You must enter a valid e-mail address.',
            2: '<i class="fa fa-warning"></i> E-mail address is not valid.',
            3: '<i class="fa fa-warning"></i> E-mail address is not valid.',
            4: '<i class="fa fa-warning"></i> E-mail address is not valid.',
            5: '<i class="fa fa-warning"></i> E-mail address is not valid.'
        }

    };
    var ssBackToTop = function() {

        var pxShow = 500, // height on which the button will show
            fadeInTime = 400, // how slow/fast you want the button to show
            fadeOutTime = 400, // how slow/fast you want the button to hide
            scrollSpeed = 300, // how slow/fast you want the button to scroll to top. can be a value, 'slow', 'normal' or 'fast'
            goTopButton = $("#go-top")

        // Show or hide the sticky footer button
        $(window).on('scroll', function() {
            if ($(window).scrollTop() >= pxShow) {
                goTopButton.fadeIn(fadeInTime);
            } else {
                goTopButton.fadeOut(fadeOutTime);
            }
        });
    };

        (function ssInit() {

            ssPreloader();
            ssMobileNav()
            ssSearch();
            ssSmoothScroll()
            ssPlaceholder();
            ssAjaxChimp();
            ssBackToTop();
    
        })();
    
    })(jQuery);