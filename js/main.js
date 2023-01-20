$(function() {

  var siteSticky = function() {
		$(".js-sticky-header").sticky({topSpacing:0});
	};
	siteSticky();

	var siteMenuClone = function() {

		$('.js-clone-nav').each(function() {
			var $this = $(this);
			$this.clone().attr('class', 'site-nav-wrap').appendTo('.site-mobile-menu-body');
		});


		setTimeout(function() {
			
			var counter = 0;
      $('.site-mobile-menu .has-children').each(function(){
        var $this = $(this);
        
        $this.prepend('<span class="arrow-collapse collapsed">');

        $this.find('.arrow-collapse').attr({
          'data-toggle' : 'collapse',
          'data-target' : '#collapseItem' + counter,
        });

        $this.find('> ul').attr({
          'class' : 'collapse',
          'id' : 'collapseItem' + counter,
        });

        counter++;

      });

    }, 1000);

		$('body').on('click', '.arrow-collapse', function(e) {
      var $this = $(this);
      if ( $this.closest('li').find('.collapse').hasClass('show') ) {
        $this.removeClass('active');
      } else {
        $this.addClass('active');
      }
      e.preventDefault();  
      
    });

		$(window).resize(function() {
			var $this = $(this),
				w = $this.width();

			if ( w > 768 ) {
				if ( $('body').hasClass('offcanvas-menu') ) {
					$('body').removeClass('offcanvas-menu');
				}
			}
		})

		$('body').on('click', '.js-menu-toggle', function(e) {
			var $this = $(this);
			e.preventDefault();

			if ( $('body').hasClass('offcanvas-menu') ) {
				$('body').removeClass('offcanvas-menu');
				$this.removeClass('active');
			} else {
				$('body').addClass('offcanvas-menu');
				$this.addClass('active');
			}
		}) 

		// click outisde offcanvas
		$(document).mouseup(function(e) {
	    var container = $(".site-mobile-menu");
	    if (!container.is(e.target) && container.has(e.target).length === 0) {
	      if ( $('body').hasClass('offcanvas-menu') ) {
					$('body').removeClass('offcanvas-menu');
				}
	    }
		});
	}; 
	siteMenuClone();

});
var i = 0;
function move() {
  if (i == 0) {
    i = 1;
    var elem = document.getElementById("myBar");
    var width = 0;
    var id = setInterval(frame, 100);
    function frame() {
      if (width >= 90) {
        clearInterval(id);
        i = 0;
      } else {
        width++;
        // elem.style.width = width + "%";
        elem.innerHTML = width  + "%";
		document.getElementById("rangeValue").innerHTML= width  + "%";
      }
    }
  }
}
move()
//////
var i = 0;
function move1() {
  if (i == 0) {
    i = 1;
    var elem = document.getElementById("myBar1");
    var width = 0;
    var id = setInterval(frame, 100);
    function frame() {
      if (width >= 95) {
        clearInterval(id);
        i = 0;
      } else {
        width++;
        // elem.style.width = width + "%";
        elem.innerHTML = width  + "%";
		document.getElementById("rangeValue1").innerHTML= width  + "%";
      }
    }
  }
}
move1()
var i = 0;
function move2() {
  if (i == 0) {
    i = 1;
    var elem = document.getElementById("myBar2");
    var width = 0;
    var id = setInterval(frame, 100);
    function frame() {
      if (width >= 80) {
        clearInterval(id);
        i = 0;
      } else {
        width++;
        // elem.style.width = width + "%";
        elem.innerHTML = width  + "%";
		document.getElementById("rangeValue2").innerHTML= width  + "%";
      }
    }
  }
}
move2()
///////////

var i = 0;
function move3() {
  if (i == 0) {
    i = 1;
    var width = 3400;
    var id = setInterval(frame, 100);
    function frame() {
      if (width >= 3500) {
        clearInterval(id);
        i = 0;
      } else {
        width++;
        
		document.getElementById("rangeValue3").innerHTML= width  ;
      }
    }
  }
}
move3()
/////
var i = 0;
function move4() {
  if (i == 0) {
    i = 1;
    var width = 2400;
    var id = setInterval(frame, 100);
    function frame() {
      if (width >= 2500) {
        clearInterval(id);
        i = 0;
      } else {
        width++;
        
		document.getElementById("rangeValue4").innerHTML= width  ;
      }
    }
  }
}
move4()
//////
var i = 0;
function move5() {
  if (i == 0) {
    i = 1;
    var width = 1233;
    var id = setInterval(frame, 100);
    function frame() {
      if (width >= 1333) {
        clearInterval(id);
        i = 0;
      } else {
        width++;
        
		document.getElementById("rangeValue5").innerHTML= width  ;
      }
    }
  }
}
move5()
/////
var i = 0;
function move6() {
  if (i == 0) {
    i = 1;
    var width = 300;
    var id = setInterval(frame, 100);
    function frame() {
      if (width >= 400) {
        clearInterval(id);
        i = 0;
      } else {
        width++;
        
		document.getElementById("rangeValue6").innerHTML= width  ;
      }
    }
  }
}
move6()