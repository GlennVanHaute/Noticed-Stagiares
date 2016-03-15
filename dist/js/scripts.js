// detect IE
var IEversion = detectIE();

if (IEversion !== false) {

        $(".logo-static").css("display", "block");
        location.href = "#popup1";


} else {
        $(".logo-animated").css("display", "block");
}

// add details to debug result

/**
 * detect IE
 * returns version of IE or false, if browser is not Internet Explorer
 */
function detectIE() {
  var ua = window.navigator.userAgent;

  // Test values; Uncomment to check result …

  // IE 10
  // ua = 'Mozilla/5.0 (compatible; MSIE 10.0; Windows NT 6.2; Trident/6.0)';

  // IE 11
  // ua = 'Mozilla/5.0 (Windows NT 6.3; Trident/7.0; rv:11.0) like Gecko';

  // IE 12 / Spartan
  // ua = 'Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/39.0.2171.71 Safari/537.36 Edge/12.0';

  // Edge (IE 12+)
  // ua = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/46.0.2486.0 Safari/537.36 Edge/13.10586';

  var msie = ua.indexOf('MSIE ');
  if (msie > 0) {
    // IE 10 or older => return version number
    return parseInt(ua.substring(msie + 5, ua.indexOf('.', msie)), 10);
  }

  var trident = ua.indexOf('Trident/');
  if (trident > 0) {
    // IE 11 => return version number
    var rv = ua.indexOf('rv:');
    return parseInt(ua.substring(rv + 3, ua.indexOf('.', rv)), 10);
  }

  var edge = ua.indexOf('Edge/');
  if (edge > 0) {

    // Edge (IE 12+) => return version number
    return parseInt(ua.substring(edge + 5, ua.indexOf('.', edge)), 10);

  }

  // other browser

  return false;
}
(function($){

    /**
     * Copyright 2012, Digital Fusion
     * Licensed under the MIT license.
     * http://teamdf.com/jquery-plugins/license/
     *
     * @author Sam Sehnert
     * @desc A small plugin that checks whether elements are within
     *       the user visible viewport of a web browser.
     *       only accounts for vertical position, not horizontal.
     */
    var $w = $(window);
    $.fn.visible = function(partial,hidden,direction){

        if (this.length < 1)
            return;

        var $t        = this.length > 1 ? this.eq(0) : this,
            t         = $t.get(0),
            vpWidth   = $w.width(),
            vpHeight  = $w.height(),
            direction = (direction) ? direction : 'both',
            clientSize = hidden === true ? t.offsetWidth * t.offsetHeight : true;

        if (typeof t.getBoundingClientRect === 'function'){

            // Use this native browser method, if available.
            var rec = t.getBoundingClientRect(),
                tViz = rec.top    >= 0 && rec.top    <  vpHeight,
                bViz = rec.bottom >  0 && rec.bottom <= vpHeight,
                lViz = rec.left   >= 0 && rec.left   <  vpWidth,
                rViz = rec.right  >  0 && rec.right  <= vpWidth,
                vVisible   = partial ? tViz || bViz : tViz && bViz,
                hVisible   = partial ? lViz || rViz : lViz && rViz;

            if(direction === 'both')
                return clientSize && vVisible && hVisible;
            else if(direction === 'vertical')
                return clientSize && vVisible;
            else if(direction === 'horizontal')
                return clientSize && hVisible;
        } else {

            var viewTop         = $w.scrollTop(),
                viewBottom      = viewTop + vpHeight,
                viewLeft        = $w.scrollLeft(),
                viewRight       = viewLeft + vpWidth,
                offset          = $t.offset(),
                _top            = offset.top,
                _bottom         = _top + $t.height(),
                _left           = offset.left,
                _right          = _left + $t.width(),
                compareTop      = partial === true ? _bottom : _top,
                compareBottom   = partial === true ? _top : _bottom,
                compareLeft     = partial === true ? _right : _left,
                compareRight    = partial === true ? _left : _right;

            if(direction === 'both')
                return !!clientSize && ((compareBottom <= viewBottom) && (compareTop >= viewTop)) && ((compareRight <= viewRight) && (compareLeft >= viewLeft));
            else if(direction === 'vertical')
                return !!clientSize && ((compareBottom <= viewBottom) && (compareTop >= viewTop));
            else if(direction === 'horizontal')
                return !!clientSize && ((compareRight <= viewRight) && (compareLeft >= viewLeft));
        }
    };

})(jQuery);

!function(t){var i=t(window);t.fn.visible=function(t,e,o){if(!(this.length<1)){var r=this.length>1?this.eq(0):this,n=r.get(0),f=i.width(),h=i.height(),o=o?o:"both",l=e===!0?n.offsetWidth*n.offsetHeight:!0;if("function"==typeof n.getBoundingClientRect){var g=n.getBoundingClientRect(),u=g.top>=0&&g.top<h,s=g.bottom>0&&g.bottom<=h,c=g.left>=0&&g.left<f,a=g.right>0&&g.right<=f,v=t?u||s:u&&s,b=t?c||a:c&&a;if("both"===o)return l&&v&&b;if("vertical"===o)return l&&v;if("horizontal"===o)return l&&b}else{var d=i.scrollTop(),p=d+h,w=i.scrollLeft(),m=w+f,y=r.offset(),z=y.top,B=z+r.height(),C=y.left,R=C+r.width(),j=t===!0?B:z,q=t===!0?z:B,H=t===!0?R:C,L=t===!0?C:R;if("both"===o)return!!l&&p>=q&&j>=d&&m>=L&&H>=w;if("vertical"===o)return!!l&&p>=q&&j>=d;if("horizontal"===o)return!!l&&m>=L&&H>=w}}}}(jQuery);

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
    function msieversion() {

    var ua = window.navigator.userAgent;
    var msie = ua.indexOf("MSIE ");

    if (msie > 0 || !!navigator.userAgent.match(/Trident.*rv\:11\./))  // If Internet Explorer, return version number
    {
    	    	$(".logo-static").css("display", "block");

    } 
    else  // If another browser, return 0
    {
    	    	$(".logo-animate").css("display", "block");


    }

    return false;
}
 msieversion()
})(jQuery);
