(function($){
	//initialize vars, give
	var $window,
		$socialHover;

	

	// Trigger ON SCROLL
	function showAnimations(e) {
		//select detection type
		var $detectPartial = $('#detect_type').val() == 'partial',
			$pizza = $('.pizza'),
			$cactus = $('.cactus'),
			$kitchen = $('.kitchen'),
			$aap = $('.aap'),
			$eiland = $('.eiland'),
			$fifa = $('.fifa'),
			$beans = $('.beans'),
			$bets = $('.bets'),
			$activeElement = null,
			elementObject = {};

		// CHECK IF ELEMENT IS VISIBLE - returns true or false. Object looks like this:
		// 'key' : value
		/* {
		 *	'pizza' : false,
		 *	'cactus' : false,
		 *  ...
		 * }
		*/
		elementObject = {
			'pizza' : $pizza.visible($detectPartial),
			'cactus' : $cactus.visible($detectPartial),
			'kitchen' : $kitchen.visible($detectPartial),
			'aap' : $aap.visible($detectPartial),
			'eiland' : $eiland.visible($detectPartial),
			'fifa' : $fifa.visible($detectPartial),
			'beans' : $beans.visible($detectPartial),
			'bets' : $bets.visible($detectPartial)
		};
		//console.log(elementArray);

		//loop over each element - when the value is true add active class to it
		$.each(elementObject, function(key, value) {
			if (value) {
				$activeElement = $('.steps .image1 div.' + key);
				// console.log($activeElement);
				$activeElement.addClass('active')
			}
		});
	};

	//social hover
    function onSocialHover(e){
		var $this = $(this);

		//find 'g' on current hovered element
        $this.find('g').css({fill: "#F6F6F6" });
    }

	//social hover leave
	function onSocialLeave(e){
		var $this = $(this)

		//find 'g' on current leave element
		$this.find('g').css({fill: "#0FB8A4" });
	}

    $('a[href*="#"]:not([href="#"])').click(function() {
    	if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      		var target = $(this.hash);
      		target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
		    if (target.length) {
		        $('html, body').animate({
		          scrollTop: target.offset().top
			    }, 1000);
		        return false;
		    }
    	}
    });

	//event bindings
	function bindings() {
		//social icons is hovered
		$socialHover.on('mouseenter', onSocialHover);
		//social icon not hovered anymore
		$socialHover.on('mouseleave', onSocialLeave);
		//on scroll
		$window.on('scroll', showAnimations);
	}

	$(document).ready(function () {
	    // variable definitions
	    $window = $(window);
	    $socialHover = $('.social-icons a');

	    //call bindings when document is ready
	    bindings();
    });
/*    function msieversion() {

    var ua = window.navigator.userAgent;
    var msie = ua.indexOf("MSIE ");

    if (msie > 0 || !!navigator.userAgent.match(/Trident.*rv\:11\./))  // If Internet Explorer, return version number
    {
    	    	$(".logo-animated").css("display", "block");
    	    	$(".logo-static").css("display", "block");

    } 
    else  // If another browser, return 0
    {
    	    	$(".logo-static").css("display", "block");


    }

    return false;
}
 msieversion()*/
})(jQuery);
