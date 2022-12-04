
function devicef(){
	var varUA = navigator.userAgent.toLowerCase();

	function detectIE() {
		var ua = window.navigator.userAgent;
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

	// user agent
	if (varUA.match('android') != null) {
		$('body').addClass('mobile android');
	  } else if (varUA.indexOf('iphone')>-1||varUA.indexOf('ipad')>-1||varUA.indexOf('ipod')>-1) {
		$('body,html').addClass('mobile iphone');
	  } else if (!detectIE() && (varUA.match('mobile') != null || varUA.match('tablet') != null ||varUA.match('phone') != null) ) {
		$('body').addClass('mobile');
	  } else {
		//아이폰, 안드로이드 외 처리
	
	  }
}

//gnb
function gnbf(){
	var tagHeader	=	$('#header');
	var tagGnb	=	$('.gnb');
	var	taggnbLi	=	$('.gnb > li');
	var	taggnbLidep02	=	$('.gnb .submenu-wrap a');
	var	taggnbLidep03	=	$('.munu-depth01 > li > a')
	var	lastLst	=	$(this).find('.gnb > li:last-child li');
	taggnbLi.each(function(){
		var tagDepth01 = $(this).find('.a-depth01 a');
		tagDepth01.on('mouseenter , focusin',function(){
			var thisList = $(this).parents("li");
			var lindex = thisList.index();
			taggnbLi.removeClass('on');
			taggnbLidep03.parent('li').removeClass('on');
			thisList.addClass('on');
			tagHeader.addClass('header-on');
		});
		
		if(lastLst.length > 0){
			$(this).find('.munu-depth01 > li:last-child ul > li:last-child').focusout(function(){
				taggnbLi.removeClass('on');
				tagHeader.removeClass('header-on');
			});
		} else {
			$(this).find('.munu-depth01 > li:last-child').focusout(function(){
				taggnbLi.removeClass('on');
				tagHeader.removeClass('header-on');
			});
		}
	});
	taggnbLidep02.each(function(){
		$(this).on('mouseenter , focusin',function(){
			taggnbLi.removeClass('on');
			$(this).parents('.submenu-wrap').parents('li').addClass('on');
		});
	});
	taggnbLidep03.each(function(){
		$(this).on('mouseenter , focusin',function(){
			taggnbLidep03.parent('li').removeClass('on');
			$(this).parent('li').addClass('on');
		});
	});
	$(tagGnb).on('mouseleave',function(){
		taggnbLidep03.parent('li').removeClass('on');
		taggnbLi.removeClass('on');
		tagHeader.removeClass('header-on');	
	});
}

//layer popup
function layerOpen(type){
	$(type).addClass('pop-on');
	$('body').addClass('body-noscroll');
	setTimeout( function() {
        $(type).attr('tabindex', 0).focus();
    }, 50);
	var heightCalc = function(){
		var pHeaderHeight = 0;
		var pFooterHeight = 0;
		var winHeight = $(window).height();

		// 팝업 타이틀 높이값 체크
		if($(type).find('.laypop-head').length) {
			var pHeaderHeight = $(type).find('.laypop-head').innerHeight();
		}
		// 팝업 하단 높이값 체크
		if($(type).find('.laypop-foot').length) {
			var pFooterHeight = $(type).find('.laypop-foot').innerHeight();
		}
		var popHeight = winHeight - pHeaderHeight - pFooterHeight -40;
		$(type).find('.laypop-body').css({
			'max-height': popHeight
		});
	}
	heightCalc();
	$(window).resize(function(){
		heightCalc();
	});
}

function layerClose(type, clickBtn){
	var layerNum = $('.layerpop-wrap:visible').length;
	$(type).removeClass('pop-on');
	$(clickBtn).focus();
	if(layerNum < 2){
		$('body').removeClass('body-noscroll');
	}
}

//tab
function tabonoff(){
	$('.tab-type01 a, .tab-type02 a, .tab-type03 a').on('click', function(e){
		var targetsb = $(this).parent().siblings();
		targetsb.each(function(){
			$(this).removeClass('on');
		});
		$(this).parent().addClass('on');
		moscrolltab();
	});
}
function tabView(){
	$('.tabview-link').on('click', function(e){
		var target = $(this).attr('href');
		var targetsb = $(this).parent().siblings();
		targetsb.each(function(){
			var target2 = $(this).find('.tabview-link').attr('href');
			$(target2).hide();
		});
		$(target).show();
		e.preventDefault();
	});
};
function moscrolltab(){
	var tab_idx = 0;
	var tabbox = $('.mo-scrolltab');

	if( tabbox.length > 0 ){
		tabbox.find('li').each(function(index){
			if($(this).hasClass("on"))
				tab_idx = index;
		});
		var tab_left = tabbox.find('li').eq(tab_idx).offset().left;
	tabbox.scrollLeft(tab_left);
	}
}

// tooltip
function tooltipf(){
    $('.tooltip-wrap .btn-tipview').click(function(){
        if($(this).parents('.tooltip-wrap').is('.on')){
            $(this).parents('.tooltip-wrap').removeClass('on');
        }else{
            $('.tooltip-wrap').removeClass('on');
            $(this).parents('.tooltip-wrap').addClass('on');
        }
        toolpositionf();
    });
    $(document).click(function(e){
        if(!$(e.target).hasClass('btn-tipview') && !$(e.target).hasClass('tip-box')){
            $('.tooltip-wrap').removeClass('on');
        }
    });
}
function toolpositionf(){
    var winWidth = $(window).width();
    var target = $('.tooltip-wrap');
    target.each(function(){
        // left 위치 값  변경
        var toolWidth = $(this).find('.tip-box').outerWidth();
        var offsetlNum = $(this).offset().left;
        var gapNum = winWidth - (offsetlNum + toolWidth);
        if (offsetlNum > (winWidth - toolWidth)){
            $(this).find('.tip-box').css('left', gapNum - 20);
        }else{
            $(this).find('.tip-box').css('left', 0);
        }
        
        // top 위치 값
        var offsettNum = $(this).offset().top;
        var dHeight = $(document).height();
        if(offsettNum > (dHeight * 0.7)){
            $(this).addClass('uptop');
        }else{
            $(this).removeClass('uptop');
        }
    });
}

// 관련사이트
function siteopenf(){
	$('.btn-sopen').on('click', function(){
		if($(this).is('.on')){
			$(this).removeClass("on");
            $(this).parents('.footer-site').removeClass("open");
        }else{
			$(this).addClass("on");
            $(this).parents('.footer-site').addClass("open");
        }
	});
}

// top 버튼
function wintopf(){
	$('.btn-wintop').on('click', function(){
		$('html').animate({
			scrollTop: 0
			}, 100);  // 탑 이동 스크롤 속도
		return false;
	});
}

// 화면 확대 축소
function zoomControl() {
	var txtNum = 1;
	var	btnPlus = $('.sccontrol-box .zoom-plus');
	var	btnMinus = $('.sccontrol-box .zoom-minus');
	var btnReset = $('.sccontrol-box .zoom-reset');
	var	bd = $('body');

	btnPlus.click(function () {
		txtNum = txtNum + 0.1;
		if (txtNum > 1.4) {
			alert('더이상증가할수없습니다');
			return;
		}
		bd.css({
			'transform-origin': '50% 0'
			, 'transform': 'scale(' + txtNum + ')'
		});
	});

	btnMinus.click(function () {
		txtNum = txtNum - 0.1;
		
		if (txtNum < 1) {
			alert('더이상감소할수없습니다');
			return;
		}
		bd.css({
			'transform-origin': '50% 0'
			, 'transform': 'scale(' + txtNum + ')'
		});
		if(txtNum == 1){
			bd.css({
				'transform': 'none'
			});
		}
	});

	/*btnReset.click(function () {
		txtNum = 1;
		bd.css({
			'transform': 'scale(1)'
		});
		setTimeout( function() {
			bd.css({
				'transform': 'none'
			});
		}, 100);
	});*/
}

// role button keyboard 
function rolebuttonf(){
	$('li[role="button"]').on('keydown', function(e){
		const keyD = e.key !== undefined ? e.key : e.keyCode;
		// e.key && e.keycode have mixed support - keycode is deprecated but support is greater than e.key
		// I tested within IE11, Firefox, Chrome, Edge (latest) & all had good support for e.key
	
		if ( (keyD === 'Enter' || keyD === 13) || (['Spacebar', ' '].indexOf(keyD) >= 0 || keyD === 32)) {
		// In IE11 and lower, e.key will equal "Spacebar" instead of ' '
	
		// Default behavior is prevented to prevent the page to scroll when "space" is pressed
		//e.preventDefault();
		this.click();
		}
	});
}

// animation motion
function setVisible(type){
	if( $(type).length > 0 ){
		var stdPos = $(window).scrollTop() + $(window).height();
		$(type).each(function(){
			if( stdPos >  $(this).offset().top ){
				$(this).addClass('on');
				$('.dclog-wrap .ani-motion.on .dclogslide-for').slick('slickPlay');
			}
		});
	}
}
// table scroll
function tblscf(){
	var boxwrap = $('.tbl-inbox');
	boxwrap.each(function(){
		$(this).on("scroll", function(){
			var leftNum = $(this).scrollLeft();
			$(this).find("thead, tfoot").css("left",-leftNum);
		});
	});	
}

// common
function commonf(){
	tabView(); //tab
	tabonoff(); //tab
	moscrolltab(); //스크롤 탭 위치
	devicef(); // device 구분
	gnbf(); // gnb
	tooltipf(); // tooltip
	siteopenf(); // 관련사이트
	wintopf(); // top 버튼
	zoomControl(); // 화면 확대 축소
	tblscf();// table scroll
}

$(function() {
	commonf();
});

$(window).resize(function(){
	//tooltip
    if($('.tip-box:visible').length) {
		toolpositionf();
	}
});

$(window).scroll(function(){
	//header
	var winSCT = $(this).scrollTop();

	var topnoticeH = 0;
	if($('.topnotice-wrap:visible').length) {
		var topnoticeH = $('.topnotice-wrap:visible').outerHeight();
	}

	if(winSCT > topnoticeH + 10){
		$('#header').addClass('header-fixed');
	}else{
		$('#header').removeClass('header-fixed');
	}

	//top 버튼
	setTimeout( function() {
		if($('.main-wrap .visual-wrap:visible').length) {
			var visualH = $(this).outerHeight();
			var offsetlNum = $('.main-wrap #content').offset().top;
			if(winSCT > (offsetlNum - visualH + topnoticeH)){
				$('.btn-wintop').fadeIn(400);
			}else{
				$('.btn-wintop').fadeOut(100);
			}
		}
    }, 200);

	setVisible('.ani-motion');

});

