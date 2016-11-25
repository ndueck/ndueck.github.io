$(function() {
    $('.navbar-collapse').click(function(){
    	console.log('clicked!');
    	$('.navbar').addClass('navbar-toggled');
    });

    $('.next-project').on('click', function(){
    	window.location.href = 'indochino-detail.html';
    }).on('mouseover', function(){
    	$(this).css({
    		'cursor' : 'pointer'
    	});
    });

    $('.prev-project').on('click', function(){
    	window.location.href = 'lululemon-detail.html';
    }).on('mouseover', function(){
    	$(this).css({
    		'cursor' : 'pointer'
    	});
    });

});