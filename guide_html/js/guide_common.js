var gCom = {
	init : function(){
		this.gAside.init();
		this.gResponsive.init();
	},
	gResponsive : {
		asideW : $('#g-aside').width(),
		init : function(){
			this.action();
			this.event();
		},
		event : function(){
			var _this = this;
			var time = null;
			$(window).on('resize', function(){
				clearTimeout(time);
				time = setTimeout(function(){
					_this.action();
				},300)
			})
		},
		action : function(){
			//Set is-responsive-md
			if ($(window).width() > 819 && $(window).width() < 1024 && !$('body').hasClass('is-responsive-md')){
				$('body').addClass('is-responsive-md');
			} else if ($(window).width() > 1023 && $('body').hasClass('is-responsive-md')){
				$('body').removeClass('is-responsive-md');
			}

			//Set is-responsive-sm
			if ($(window).width() < 820 && !$('body').hasClass('is-responsive-sm')){
				$('body').addClass('is-responsive-sm');
				$('body').removeClass('is-responsive-md');
				if ($('.g-lnb > .g-node-title').length == 0){
					var noteTitle = $('.g-lnb > ul > li.is-current > a').text();
					$('.g-lnb > ul').before('<button type="button" class="g-node-title"></button>');
					$('.g-lnb > .g-node-title').text(noteTitle);

					//Event
					$('.g-node-title').on('click', function(){
						$(this).parent().toggleClass('is-visible');
					})
				}
			} else if ($(window).width() > 819 && $('body').hasClass('is-responsive-sm')){
				$('body').removeClass('is-responsive-sm');
				$('body').addClass('is-responsive-md');
				$('.g-lnb > .g-node-title').remove();
			}

			//Set is-aside-closed
			if ($(window).width() < 1024 && !$('body').hasClass('is-aside-closed') && !$('body').hasClass('is-aside-opened')){
				$('body').addClass('is-aside-closed');
			} else if ($(window).width() > 1023 && $('body').hasClass('is-aside-closed')){
				$('body').removeClass('is-aside-closed');
			}
		}
	},
	gAside : {
		asideEl : '#g-aside',
		anbBtnEl : '.g-btn-aside',
		maskEl : '.g-mask',
		asideWid : null,
		init : function(){
			
			this.asideWid = $(this.asideEl).width();
			this.setInit();
			this.event();
		},
		
		setInit : function(){
			var _this = this;
			var path = location.pathname.split('/');
			$(this.asideEl).find('.g-snb a[href*="'+path[path.length-1]+'"]').parent().addClass('is-current');
			$(this.asideEl).find('.g-snb a[href*="'+path[path.length-1]+'"]').parents("li").addClass('is-current');
		},

		event : function(){
			$('.g-snb .plus > a').on('click', function(){
				$(this).parent().toggleClass('is-current');
				return false;
			})
			//펼치기
			$(this.anbBtnEl).not('.is-clickEvent').on('click', function(e){
				if (!$('body').hasClass('is-aside-closed')){
					$('body').removeClass('is-aside-opened');
					$('body').addClass('is-aside-closed');
				} else {
					$('body').addClass('is-aside-opened');
					$('body').removeClass('is-aside-closed');
				}
			}).addClass('is-clickEvent');

			//숨기기
			$(this.maskEl).not('.is-clickEvent').on('click', function(e){
				$('body').removeClass('is-aside-opened').addClass('is-aside-closed');
			}).addClass('is-clickEvent');
		}
	}
}


$(document).ready(function(){
	gCom.init();
})
