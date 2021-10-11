(function ($) {
	"use strict";

	new WOW().init();

	/*---background image---*/
	function dataBackgroundImage() {
		$('[data-bgimg]').each(function () {
			var bgImgUrl = $(this).data('bgimg');
			$(this).css({
				'background-image': 'url(' + bgImgUrl + ')', // + meaning concat
			});
		});
	}

	$(window).on('load', function () {
		dataBackgroundImage();
	});

	/*---stickey menu---*/
	$(window).on('scroll load resize', function () {
		var scroll = $(window).scrollTop();
		if (scroll < 100) {
			$(".sticky-header").removeClass("sticky");
		} else {
			$(".sticky-header").addClass("sticky");
		}
	});

	/*---jQuery MeanMenu---*/
	$('.mobile-menu nav').meanmenu({
		meanScreenWidth: "9901",
		meanMenuContainer: ".mobile-menu",
		onePage: true,
	});

	/*---slider activation---*/
	$('.slider_area .single_slider').each(function ($index) {
		$(this).attr('data-slide', $index);
	});

	$('.slider_area').owlCarousel({
		animateOut: 'fadeOut',
		autoplay: true,
		autoplayTimeout: 6000,
		loop: true,
		rtl: true,
		nav: false,
		items: 1,
		dots: true,
	});

	$('.slider_area').on('drag.owl.carousel', function () {
		var $active_slide = $(this).find('.owl-item.active');
		var $slide = $active_slide.find('.single_slider').attr('data-slide');
		$(this).find('.slider_content').removeClass('show_content');
		$(this).find('.single_slider[data-slide="' + $slide + '"] .slider_content').addClass('show_content');
	});

	$('.slider_area').on('translated.owl.carousel', function () {
		$(this).find('.slider_content').removeClass('show_content');
	});

	/*---product column5 activation---*/
	$('.product_column5').on('changed.owl.carousel initialized.owl.carousel', function (event) {
		$(event.target).find('.owl-item').removeClass('last').eq(event.item.index + event.page.size - 1).addClass('last')
	}).owlCarousel({
		loop: true,
		rtl: true,
		nav: true,
		autoplay: false,
		autoplayTimeout: 8000,
		items: 5,
		margin: 20,
		dots: false,
		navText: ['<i class="ion-ios-arrow-right"></i>', '<i class="ion-ios-arrow-left"></i>'],
		responsiveClass: true,
		responsive: {
			0: {
				items: 1,
			},
			576: {
				items: 2,
			},
			768: {
				items: 3,
			},
			992: {
				items: 4,
			},
			1200: {
				items: 5,
			},


		}
	});

	/*---product slick column5 activation---*/
	$('.product_slick_column5').slick({
		rtl: true,
		centerPadding: '0',
		slidesToShow: 5,
		slidesToScroll: 5,
		speed: 800,
		rows: 2,
		prevArrow: '<button class="prev_arrow"><i class="ion-ios-arrow-right"></i></button>',
		nextArrow: '<button class="next_arrow"><i class="ion-ios-arrow-left"></i></button>',
		responsive: [
			{
				breakpoint: 576,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					speed: 400,
				}
            },
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2,
					speed: 500,
				}
            },
			{
				breakpoint: 992,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 3,
					speed: 600,
				}
            },
			{
				breakpoint: 1200,
				settings: {
					slidesToShow: 4,
					slidesToScroll: 4,
					speed: 700,
				}
            },
        ]
	});

	/*---product slick column4 activation---*/
	$('.product_slick_column4').slick({
		rtl: true,
		centerPadding: '0',
		slidesToShow: 4,
		slidesToScroll: 4,
		speed: 700,
		rows: 2,
		prevArrow: '<button class="prev_arrow"><i class="ion-ios-arrow-right"></i></button>',
		nextArrow: '<button class="next_arrow"><i class="ion-ios-arrow-left"></i></button>',
		responsive: [
			{
				breakpoint: 576,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					speed: 400,
				}
            },
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2,
					speed: 500,
				}
            },
			{
				breakpoint: 1200,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 3,
					speed: 600,
				}
            },
        ]
	});

	/*---product column4 activation---*/
	$('.product_column4').on('changed.owl.carousel initialized.owl.carousel', function (event) {
		$(event.target).find('.owl-item').removeClass('last').eq(event.item.index + event.page.size - 1).addClass('last')
	}).owlCarousel({
		loop: true,
		rtl: true,
		nav: true,
		autoplay: false,
		autoplayTimeout: 8000,
		items: 5,
		margin: 20,
		dots: false,
		navText: ['<i class="ion-ios-arrow-right"></i>', '<i class="ion-ios-arrow-left"></i>'],
		responsiveClass: true,
		responsive: {
			0: {
				items: 1,
			},
			576: {
				items: 2,
			},
			768: {
				items: 3,
			},
			992: {
				items: 3,
			},
			1200: {
				items: 4,
			},


		}
	});


	/*---product deals column4 activation---*/
	$('.product_deals_column4').on('changed.owl.carousel initialized.owl.carousel', function (event) {
		$(event.target).find('.owl-item').removeClass('last').eq(event.item.index + event.page.size - 1).addClass('last')
	}).owlCarousel({
		loop: true,
		rtl: true,
		nav: true,
		autoplay: false,
		autoplayTimeout: 8000,
		dots: false,
		navText: ['قبلی', 'بعدی'],
		responsiveClass: true,
		responsive: {
			0: {
				items: 1,
			},
			576: {
				items: 2,
			},
			768: {
				items: 3,
			},
			992: {
				items: 3,
			},
			1200: {
				items: 4,
			},


		}
	});

	/*---product column1 activation---*/
	$('.product_column1').on('changed.owl.carousel initialized.owl.carousel', function (event) {
		$(event.target).find('.owl-item').removeClass('last').eq(event.item.index + event.page.size - 1).addClass('last')
	}).owlCarousel({
		loop: true,
		rtl: true,
		nav: true,
		autoplay: false,
		autoplayTimeout: 8000,
		items: 1,
		margin: 20,
		dots: false,
		navText: ['<i class="ion-ios-arrow-right"></i>', '<i class="ion-ios-arrow-left"></i>'],
		responsiveClass: true,
		responsive: {
			0: {
				items: 1,
			},
			576: {
				items: 2,
			},
			768: {
				items: 3,
			},
			992: {
				items: 1,
			},

		}
	});


	/*---category column5 activation---*/
	$('.category_column5').on('changed.owl.carousel initialized.owl.carousel', function (event) {
		$(event.target).find('.owl-item').removeClass('last').eq(event.item.index + event.page.size - 1).addClass('last')
	}).owlCarousel({
		loop: true,
		rtl: true,
		nav: false,
		autoplay: false,
		autoplayTimeout: 8000,
		items: 5,
		dots: false,
		responsiveClass: true,
		responsive: {
			0: {
				items: 1,
			},
			400: {
				items: 2,
			},
			768: {
				items: 3,
			},
			992: {
				items: 4,
			},
			1200: {
				items: 5,
			},

		}
	});


	/*---featured column3 activation---*/
	$('.featured_column3').slick({
		rtl: true,
		centerPadding: '0',
		slidesToShow: 3,
		slidesToScroll: 3,
		speed: 800,
		rows: 2,
		prevArrow: '<button class="prev_arrow"><i class="ion-ios-arrow-right"></i></button>',
		nextArrow: '<button class="next_arrow"><i class="ion-ios-arrow-left"></i></button>',
		responsive: [
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					speed: 400,
				}
            },
			{
				breakpoint: 992,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2,
					speed: 600,
				}
            },
        ]
	});

	/*---small product activation---*/
	$('.small_product_active').slick({
		rtl: true,
		centerPadding: '0',
		slidesToShow: 1,
		slidesToScroll: 1,
		speed: 400,
		rows: 3,
		prevArrow: '<button class="prev_arrow"><i class="ion-ios-arrow-right"></i></button>',
		nextArrow: '<button class="next_arrow"><i class="ion-ios-arrow-left"></i></button>',
		responsive: [
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					speed: 400,
				}
            },
			{
				breakpoint: 992,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2,
					speed: 600,
				}
            },
        ]
	});


	/*---testimonial active activation---*/
	$('.testimonial_active').owlCarousel({
		loop: true,
		rtl: true,
		nav: false,
		autoplay: false,
		autoplayTimeout: 8000,
		items: 1,
		dots: true,
	})


	/*---blog column4 activation---*/
	$('.blog_column4').owlCarousel({
		loop: true,
		rtl: true,
		nav: true,
		autoplay: false,
		autoplayTimeout: 8000,
		items: 4,
		dots: false,
		navText: ['<i class="ion-ios-arrow-right"></i>', '<i class="ion-ios-arrow-left"></i>'],
		responsiveClass: true,
		responsive: {
			0: {
				items: 1,
			},
			768: {
				items: 3,
			},
			992: {
				items: 3,
			},
			1200: {
				items: 4,
			},
		}
	});

	/*---blog column1 activation---*/
	$('.blog_column1').owlCarousel({
		loop: true,
		rtl: true,
		nav: true,
		autoplay: false,
		autoplayTimeout: 8000,
		items: 1,
		dots: false,
		margin: 20,
		navText: ['<i class="ion-ios-arrow-right"></i>', '<i class="ion-ios-arrow-left"></i>'],
		responsiveClass: true,
		responsive: {
			0: {
				items: 1,
			},
			768: {
				items: 3,
				margin: 30,
			},
			992: {
				items: 1,
			},
		}
	});

	/*---blog thumb activation---*/
	$('.blog_thumb_active').owlCarousel({
		loop: true,
		rtl: true,
		nav: true,
		autoplay: false,
		autoplayTimeout: 8000,
		items: 1,
		navText: ['<i class="ion-ios-arrow-right"></i>', '<i class="ion-ios-arrow-left"></i>'],
	});

	/*---brand container activation---*/
	$('.brand_container').on('changed.owl.carousel initialized.owl.carousel', function (event) {
		$(event.target).find('.owl-item').removeClass('last').eq(event.item.index + event.page.size - 1).addClass('last')
	}).owlCarousel({
		loop: true,
		rtl: true,
		nav: true,
		autoplay: false,
		autoplayTimeout: 8000,
		items: 5,
		dots: false,
		navText: ['<i class="ion-ios-arrow-right"></i>', '<i class="ion-ios-arrow-left"></i>'],
		responsiveClass: true,
		responsive: {
			0: {
				items: 1,
			},
			480: {
				items: 2,
			},
			768: {
				items: 3,
			},
			992: {
				items: 4,
			},
			1200: {
				items: 5,
			},

		}
	});

	/*---single product activation---*/
	$('.single-product-active').owlCarousel({
		loop: true,
		rtl: true,
		nav: true,
		autoplay: false,
		autoplayTimeout: 8000,
		items: 4,
		margin: 15,
		dots: false,
		navText: ['<i class="fa fa-angle-right"></i>', '<i class="fa fa-angle-left"></i>'],
		responsiveClass: true,
		responsive: {
			0: {
				items: 1,
			},
			320: {
				items: 2,
			},
			992: {
				items: 3,
			},
			1200: {
				items: 4,
			},


		}
	});

	/*---product navactive activation---*/
	$('.product_navactive').owlCarousel({
		loop: true,
		rtl: true,
		nav: true,
		autoplay: false,
		autoplayTimeout: 8000,
		items: 4,
		dots: false,
		navText: ['<i class="fa fa-angle-right"></i>', '<i class="fa fa-angle-left"></i>'],
		responsiveClass: true,
		responsive: {
			0: {
				items: 1,
			},
			250: {
				items: 2,
			},
			480: {
				items: 3,
			},
			768: {
				items: 4,
			},

		}
	});

	$('.modal').on('shown.bs.modal', function (e) {
		$('.product_navactive').resize();
	})

	$('.product_navactive a').on('click', function (e) {
		e.preventDefault();

		var $href = $(this).attr('href');

		$('.product_navactive a').removeClass('active');
		$(this).addClass('active');

		$('.product-details-large .tab-pane').removeClass('active show');
		$('.product-details-large ' + $href).addClass('active show');

	})

	/*--- Tooltip Active---*/
	$('.action_links ul li a,.add_to_cart a,.footer_social_link ul li a,[data-toggle="tooltip"]').tooltip({
		animated: 'fade',
		placement: 'top',
		container: 'body'
	});

	/*--- niceSelect---*/
	$('.select_option, .niceselect_option').niceSelect();

	/*--- counterup activation ---*/
	$('.counter_number').counterUp({
		delay: 10,
		time: 1000
	});

	/*---  ScrollUp Active ---*/
	$.scrollUp({
		scrollText: '<i class="fa fa-angle-double-up"></i>',
		easingType: 'linear',
		scrollSpeed: 900,
		animation: 'fade'
	});

	/*---countdown activation---*/
	$('[data-countdown]').each(function () {
		var $this = $(this),
			finalDate = $(this).data('countdown');
		$this.countdown(finalDate, function (event) {
			$this.html(event.strftime('<div class="countdown_area"><div class="single_countdown"><div class="countdown_number">%D</div><div class="countdown_title">روز</div></div><div class="single_countdown"><div class="countdown_number">%H</div><div class="countdown_title">ساعت</div></div><div class="single_countdown"><div class="countdown_number">%M</div><div class="countdown_title">دقیقه</div></div><div class="single_countdown"><div class="countdown_number">%S</div><div class="countdown_title">ثانیه</div></div></div>'));

		});
	});

	/*---slider-range here---*/
	$("#slider-range").slider({
		range: true,
		min: 0,
		max: 5000000,
		step: 10000,
		values: [700000, 4000000],
		slide: function (event, ui) {
			var $value0 = ui.values[0].toLocaleString();
			var $value1 = ui.values[1].toLocaleString();
			$("#amount").val($value1 + " تومان - " + $value0 + " تومان");
			$("#price-min").val(ui.values[0]);
			$("#price-max").val(ui.values[1]);
		}
	});
	var $value0 = $("#slider-range").slider("values", 0).toLocaleString();
	var $value1 = $("#slider-range").slider("values", 1).toLocaleString();
	$("#amount").val($value1 + " تومان - " + $value0 + " تومان");
	$("#price-min").val($("#slider-range").slider("values", 0));
	$("#price-max").val($("#slider-range").slider("values", 1));

	/*---elevateZoom---*/
	$("#zoom1").elevateZoom({
		gallery: 'gallery_01',
		responsive: true,
		cursor: 'crosshair',
		zoomType: 'inner'
	});

	$(window).on('resize', function () {
		$('.zoomContainer').remove();
		$("#zoom1").elevateZoom({
			gallery: 'gallery_01',
			responsive: true,
			cursor: 'crosshair',
			zoomType: 'inner'
		});
		setTimeout(function () {
			$('.zoomGalleryActive').click();
		}, 10);
	});

	/*---portfolio Isotope activation---*/
	$('.portfolio_gallery').imagesLoaded(function () {

		var $grid = $('.portfolio_gallery').isotope({
			itemSelector: '.gird_item',
			percentPosition: true,
			originLeft: false,
			masonry: {
				columnWidth: '.gird_item'
			}
		});

		/*---ilter items on button click---*/
		$('.portfolio_button').on('click', 'button', function () {
			var filterValue = $(this).attr('data-filter');
			$grid.isotope({
				filter: filterValue
			});

			$(this).siblings('.active').removeClass('active');
			$(this).addClass('active');
		});

	});

	/*---slide toggle activation---*/
	$('.mini_cart_wrapper > a').on('click', function (event) {
		if ($(window).width() < 991) {
			$('.mini_cart').slideToggle('medium');
		}
	});

	/*---categories slideToggle---*/
	$(".categories_title").on("click", function () {
		$(this).toggleClass('active');
		$('.categories_menu_toggle').slideToggle('medium');
	});

	/*---widget sub categories---*/
	$(".widget_sub_categories > a").on("click", function () {
		$(this).toggleClass('active');
		$('.widget_dropdown_categories').slideToggle('medium');
	});

	/*---addClass/removeClass categories---*/
	$("#cat_toggle.has-sub > a").on("click", function () {
		$(this).removeAttr('href');
		$(this).toggleClass('open').next('.categorie_sub').toggleClass('open');
	});

	/*---MailChimp---*/
	$('#mc-form').ajaxChimp({
		language: 'en',
		callback: mailChimpResponse,
		// ADD YOUR MAILCHIMP URL BELOW HERE!
		url: 'http://devitems.us11.list-manage.com/subscribe/post?u=6bbb9b6f5827bd842d9640c82&amp;id=05d85f18ef'

	});

	function mailChimpResponse(resp) {

		if (resp.result === 'success') {
			$('.mailchimp-success').html('' + resp.msg).fadeIn(900);
			$('.mailchimp-error').fadeOut(400);

		} else if (resp.result === 'error') {
			$('.mailchimp-error').html('' + resp.msg).fadeIn(900);
		}
	}

	/*---Category menu---*/
	function categorySubMenuToggle() {
		$('.categories_menu_toggle li.menu_item_children > a').on('click', function () {
			if ($(window).width() < 992) {
				$(this).removeAttr('href');
				var element = $(this).parent('li');
				if (element.hasClass('open')) {
					element.removeClass('open');
					element.find('li').removeClass('open');
					element.find('ul').slideUp();
				} else {
					element.addClass('open');
					element.children('ul').slideDown();
					element.siblings('li').not('.has-sub').children('ul').slideUp();
					element.siblings('li').removeClass('open');
					element.siblings('li').find('li').removeClass('open');
					element.siblings('li').not('.has-sub').find('ul').slideUp();
				}
			}
		});
		$('.categories_menu_toggle li.menu_item_children > a').append('<span class="expand"></span>');
	}
	categorySubMenuToggle();

	/*---shop grid activation---*/
	$('.shop_toolbar_btn > button').on('click', function (e) {

		e.preventDefault();

		$('.shop_toolbar_btn > button').removeClass('active');
		$(this).addClass('active');

		var parentsDiv = $('.shop_wrapper');
		var viewMode = $(this).data('role');


		parentsDiv.removeClass('grid_3 grid_4 grid_5 grid_list').addClass(viewMode);

		if (viewMode == 'grid_3') {
			parentsDiv.children().addClass('col-lg-4 col-md-4 col-sm-6').removeClass('col-xl-3 col-12');
		}

		if (viewMode == 'grid_4') {
			parentsDiv.children().addClass('col-xl-3 col-md-4 col-sm-6').removeClass('col-lg-4 col-12');
		}

		if (viewMode == 'grid_list') {
			parentsDiv.children().addClass('col-12').removeClass('col-xl-3 col-lg-4 col-md-4 col-sm-6');
		}

	});

	/*---Newsletter Popup activation---*/

	/*
	setTimeout(function () {
		if ($.cookie('shownewsletter') == 1) $('.newletter-popup').hide();
		$('#subscribe_pemail').keypress(function (e) {
			if (e.which == 13) {
				e.preventDefault();
				email_subscribepopup();
			}
			var name = $(this).val();
			$('#subscribe_pname').val(name);
		});
		$('#subscribe_pemail').change(function () {
			var name = $(this).val();
			$('#subscribe_pname').val(name);
		});
		//transition effect
		if ($.cookie("shownewsletter") != 1) {
			$('.newletter-popup').bPopup();
		}
		$('#newsletter_popup_dont_show_again').on('change', function () {
			if ($.cookie("shownewsletter") != 1) {
				$.cookie("shownewsletter", '1')
			} else {
				$.cookie("shownewsletter", '0')
			}
		});
	}, 2500);
	*/


	/*---canvas menu activation---*/
	$('.canvas_open').on('click', function () {
		$('.Offcanvas_menu_wrapper,.off_canvars_overlay').addClass('active')
	});

	$('.canvas_close,.off_canvars_overlay').on('click', function () {
		$('.Offcanvas_menu_wrapper,.off_canvars_overlay').removeClass('active')
	});

	/*---Off Canvas Menu---*/
	var $offcanvasNav = $('.offcanvas_main_menu'),
		$offcanvasNavSubMenu = $offcanvasNav.find('.sub-menu');
	$offcanvasNavSubMenu.parent().prepend('<span class="menu-expand"><i class="fa fa-angle-down"></i></span>');

	$offcanvasNavSubMenu.slideUp();

	$offcanvasNav.on('click', 'li a, li .menu-expand', function (e) {
		var $this = $(this);
		if (($this.parent().attr('class').match(/\b(menu-item-has-children|has-children|has-sub-menu)\b/)) && ($this.attr('href') === '#' || $this.hasClass('menu-expand'))) {
			e.preventDefault();
			if ($this.siblings('ul:visible').length) {
				$this.siblings('ul').slideUp('slow');
			} else {
				$this.closest('li').siblings('li').find('ul:visible').slideUp('slow');
				$this.siblings('ul').slideDown('slow');
			}
		}
		$this.closest('.offcanvas_main_menu').find('.menu-open').not($this).not($this.parents()).removeClass('menu-open');
		if ($this.is('a') || $this.is('span') || $this.attr('class').match(/\b(menu-expand)\b/)) {
			$this.parent().toggleClass('menu-open');
			$this.parent().find('ul li .sub-menu').slideUp('slow');
		} else if ($this.is('li') && $this.attr('class').match(/\b('menu-item-has-children')\b/)) {
			$this.toggleClass('menu-open');
			$this.find('ul li .sub-menu').slideUp('slow');
		}
	});

	/*---ajax-mail.js---*/
	$(function () {

		// Get the form.
		var form = $('#contact-form');

		// Get the messages div.
		var formMessages = $('.form-messege');

		// Set up an event listener for the contact form.
		$(form).submit(function (e) {

			// Stop the browser from submitting the form.
			e.preventDefault();

			// Serialize the form data.
			var formData = $(form).serialize();

			// Show sending message
			$(formMessages).text('در حال ارسال ...');

			// Submit the form using AJAX.
			$.ajax({
				type: 'POST',
				url: $(form).attr('action'),
				data: formData
			})
			.done(function (response) {
				
				// Make sure that the formMessages div has the 'success' class.
				$(formMessages).removeClass('error');
				$(formMessages).addClass('success');

				// Set the message text.
				$(formMessages).text(response);

				// Clear the form.
				$('#contact-form input,#contact-form textarea').val('');
			})
			.fail(function (data) {
				
				// Make sure that the formMessages div has the 'error' class.
				$(formMessages).removeClass('success');
				$(formMessages).addClass('error');

				// Set the message text.
				if (data.responseText !== '') {
					$(formMessages).text(data.responseText);
				} else {
					$(formMessages).text('خطایی در ارسال پیام رخ داده است.');
				}
			});
		});

	});

	/*---Custom Contact Form Validation Messages---*/
	$('#contact-form [name="name"]').on('invalid', function () {
		this.setCustomValidity('لطفا نام خود را وارد نمایید');
	});

	$('#contact-form [name="email"]').on('invalid', function () {
		if (this.validity.valueMissing) {
			this.setCustomValidity("لطفا ایمیل خود را وارد نمایید");
		} else if (this.validity.typeMismatch) {
			this.setCustomValidity("لطفا یک ایمیل معتبر وارد نمایید");
		}
	});

	$('#contact-form [name="message"]').on('invalid', function () {
		this.setCustomValidity('لطفا پیام خود را وارد نمایید');
	});

	$('#contact-form').find('input, textarea').on('input', function () {
		this.setCustomValidity('');
	});
	
})(jQuery);
