(function ($) {
        $(window).scroll(function() {
            var $height = $(window).scrollTop();
            if($height > 300) {
                $('.skyscraper').addClass('is--fixed');
            } else {
                $('.skyscraper').removeClass('is--fixed');
            }
        });
    
    
	// Efeito abrir e fechar do menu mobile
	$('#nav-icon3').click(function(){
		$(this).toggleClass('open');
		$('.navbar-main-menu').toggleClass('header-opened');
	});
	$('.navbar-main-menu li a').click(function(){
		if($('header').hasClass('header-opened')) {
			$('header').toggleClass('header-opened');
			$('#nav-icon3').toggleClass('open');
		}
	});
    
    
    
    
    $('.navbar-toggle').click(function() {
        $('ul.nav li.dropdown').addClass('menu-mobile');
    });
    
    $('ul.nav li.dropdown').hover(function() {
        if (!$('ul.nav li.dropdown').hasClass('menu-mobile')) {
            $(this).find('.dropdown-menu').stop(true, true).delay(50).fadeIn(200);
        }
    });
    
    $('ul.nav li.dropdown').mouseleave(function() {
        if (!$('ul.nav li.dropdown').hasClass('menu-mobile')) {
            $(this).find('.dropdown-menu').stop(true, true).delay(50).fadeOut(200);
        }
    });
    
    $("#btnBusca").click(function(){
        var key = $("#campoBusca").val().replace(" ", "+");
        $(location).attr('href', './busca?keys='+key);
    });
    
    $("#campoBusca").keypress(function(e){
        if(e.which == 13){
            var key = $("#campoBusca").val().replace(" ", "+");
            $(location).attr('href', './busca/?keys='+key);
        }
    });
    
    $("#btnBuscaNavbar").click(function(){
        var key = $("#campoBuscaNavbar").val().replace(" ", "+");
        $(location).attr('href', './busca?keys='+key);
    });
    
    $("#campoBuscaNavbar").keypress(function(e){
        if(e.which == 13){
            var key = $("#campoBuscaNavbar").val().replace(" ", "+");
            $(location).attr('href', './busca/?keys='+key);
        }
    });
        
}(jQuery));