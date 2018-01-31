jQuery(function() {
	var $toc = $("#toc");

	if ($toc.length) {
		$(window).on("scroll", function() {
			throttle(function(){
				if ($(this).scrollTop() > $toc.offset().top) {
					$('.go-top').fadeIn(200);
				} else {
					$('.go-top').fadeOut(200);
				}
			}, 100)();
		});
	}

	hashChange();
	$(window).on('hashchange',function(){
		hashChange();
	});
});

function throttle (callback, limit) {

	var wait = false;
	return function () {
		if (!wait) {
			callback.apply(null, arguments);
			wait = true;
			setTimeout(function () {
				wait = false;
			}, limit);
		}
	};
}

function hashChange() {
	var hash = window.location.hash.substr(1);
	if (hash == "print-book") {
		window.print();
		window.location.hash = '';
	}
}