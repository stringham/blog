$(function(){
	logo = new Logo($('#logo').get(0), 60);

	logo.animate();
	$('#logo,.nav li').click(function(){
		logo.animate();
	});

	var updateSection = function(){
		if(window.location.hash){
			var section = window.location.hash.substr(1);
			section = sections[section];
			if(section){
				logo.color = section.color;
				logo.animate();
				$('.accent-color').css('color', section.color);
				$('section').hide();
				$(section.id).show();
			}
		}
	}
	updateSection();

	$(window).bind('hashchange', function() {
		updateSection();
	});
});
