/*
Author       : AB_Themes
Template Name: Edumate
Version      : 1.0
*/

(function ($) {
    "use strict";

    $(document).ready(function () {

        //>> Mobile Menu Js Start <<//
		const hamburger = document.querySelector('.hamburger');
		const mobileMenu = document.querySelector('.mobile-menu');
		const menuItems = document.querySelectorAll('.mobile-menu a'); // Adjust selector if needed

		function closeMobileMenu() {
			hamburger.classList.remove('active');
			mobileMenu.classList.remove('show');
			mobileMenu.style.maxHeight = null;
		}

		hamburger.addEventListener('click', () => {
			hamburger.classList.toggle('active');
			if (mobileMenu.style.maxHeight) {
				closeMobileMenu();
			} else {
				mobileMenu.classList.add('show');
				mobileMenu.style.maxHeight = mobileMenu.scrollHeight + "px";
			}
		});

		// Close menu when a menu item is clicked
		menuItems.forEach(item => {
			item.addEventListener('click', closeMobileMenu);
		});


		// Listen for screen resize
		window.addEventListener('resize', () => {
			if (window.innerWidth > 768) {
				closeMobileMenu();
			}
		});

		// humberger end

        
        // accordion start
		document.querySelectorAll('.accordion-button').forEach(button => {
			button.addEventListener('click', () => {
				const icon = button.querySelector('.toggle-icon');
				const isOpen = !button.classList.contains('collapsed');
			});
		});
		// accordion end


		// start tetimonial
		$('#categories_slider').owlCarousel({
			loop:true,
			margin:10,
			nav:true,
			navText: ["<i class='fa-solid fa-chevron-left'></i>", "<i class='fa-solid fa-chevron-right'></i>"],
			responsive:{
				0:{
					items:1
				},
				600:{
					items:3
				},
				1000:{
					items:5
				}
			}
		})



		// start tetimonial
		$('#review_slider').owlCarousel({
			loop: true,
			margin: 20,
			autoplay: true,
			autoplayTimeout: 3000,
			autoplaySpeed: 1000,
			autoplayHoverPause: true,
			nav: false,
			responsive: {
				0: {
					items: 1
				},
				600: {
					items: 3
				},
				1000: {
					items: 5
				}
			}
		})
		// end tetimonial


    }); // Closed $(document).ready() properly
	

	// preloader 
	window.addEventListener('load', () => {
		const preloader = document.getElementById('preloader');
		preloader.classList.add('fade-out');
		setTimeout(() => {
			preloader.style.display = 'none';
		}, 500);
	});
	// preloader 
	
	// top btn		
	const btn = document.getElementById('toTopBtn');

	window.addEventListener('scroll', () => {
		btn.style.display = window.scrollY > 200 ? 'flex' : 'none';
	});

	btn.addEventListener('click', () => {
		window.scrollTo({ top: 0, behavior: 'smooth' });
	});
	// top btn


	// wow amimation
	new WOW().init();
	// wow amimation



	// nice select
	$(document).ready(function () {

		// Ensure the select elements exist before applying niceSelect
		$('#myselect, #myselect2, #services').each(function () {
			if ($(this).length) {
				$(this).niceSelect();
			}
		});
		
	});
	// nice select
	 

	 window.addEventListener('scroll', function () {
		const navbar = document.getElementById('mainNavbar');
		if (window.scrollY > 50) {
		navbar.classList.add('sticky');
		} else {
		navbar.classList.remove('sticky');
		}
	});



})(jQuery);



document.addEventListener("DOMContentLoaded", function () {
	const sections = document.querySelectorAll("section[id]");
	const navLinks = document.querySelectorAll(".nav-links a");

	function activateNavLink() {
		let scrollY = window.pageYOffset;

		sections.forEach((current) => {
			const sectionHeight = current.offsetHeight;
			const sectionTop = current.offsetTop - 70; // adjust offset for fixed nav
			const sectionId = current.getAttribute("id");

			if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
				navLinks.forEach((link) => {
					link.classList.remove("active");
					if (link.getAttribute("href").includes(sectionId)) {
						link.classList.add("active");
					}
				});
			}
		});
	}

	window.addEventListener("scroll", activateNavLink);
});


const icon = document.querySelector('.date_icon');
	const dateInput = document.querySelector('.date-input');

	icon.addEventListener('click', () => {
		dateInput.focus();
		if (dateInput.showPicker) {
		dateInput.showPicker();
	}
});





// start tetimonial
