/*
$(document).ready(function() {
	$('#fullpage').pagepiling({
	    menu: null,
        direction: 'vertical',
        verticalCentered: true,
        sectionsColor: ['#f2f2f2', '#4BBFC3', '#7BAABE', 'whitesmoke', '#000'],
        anchors: [],
        scrollingSpeed: 200,
        easing: 'swing',
        loopBottom: false,
        loopTop: false,
        css3: true,
        navigation: {
            'textColor': '#000',
            'bulletsColor': '#000',
            'position': 'right',
            'tooltips': ['section1', 'section2', 'section3', 'section4']
        },
       	normalScrollElements: null,
        normalScrollElementTouchThreshold: 5,
        touchSensitivity: 5,
        keyboardScrolling: true,
        sectionSelector: '.section',
        animateAnchor: false,

		//events
		onLeave: function(index, nextIndex, direction){},
		afterLoad: function(anchorLink, index){},
		afterRender: function(){},
	});
});
*/



$('.mainbag').viewScroller({
	
	animSpeedMainView: 700, // Animation speed of mainviews: 0 - fastest
	animSpeedSubView: 700, // Animation speed of subviews: 0 - fastest
	animEffectMainView: 'easeInOutCubic', // Animation effect of mainviews change - jQuery (easing)
	animEffectSubView: 'easeInOutCubic', // Animation effect of subviews change - jQuery (easing)
	animEffectMainViewCss3: 'ease', // Animation effect of mainviews change - CSS3 (easing)
	animEffectSubViewCss3: 'ease', // Animation effect of subviews change - CSS3 (easing)

	// Steering
	useKeyboard: true, // Use keyboard to change views
	useScrollbar: false, // Use scrollbar to change views
	changeWhenAnim: true, // Change views when they are changing
	loopMainViews: false, // Change horizontal views (mainviews) in loop mode
	loopSubViews: false, // Change vertical views (subviews) in loop mode
	fitToView: true, // Will the browser fit to the closest view (works if the useScrollbar option is true)
	timeToFit: 1000, // Time between stop scrolling and start fitting to the closest view

	

	});



$(".modal-trigger").click(function(e){
  e.preventDefault();
  dataModal = $(this).attr("data-modal");
  $("#" + dataModal).css({"display":"block"});
  // $("body").css({"overflow-y": "hidden"}); //Prevent double scrollbar.
});

$(".close-modal, .modal-sandbox").click(function(){
  $(".modal").css({"display":"none"});
  // $("body").css({"overflow-y": "auto"}); //Prevent double scrollbar.
});
