$(document).ready(function () {
	// Показать fix-menu
	window.addEventListener("scroll", function () {
		const fixMenu = document.querySelector(".fix-menu");
		if (this.pageYOffset > 50) {
			fixMenu.classList.add("active");
		} else {
			fixMenu.classList.remove("active");
		}
	});
	//  PAGE NAV

	$("#page-nav").onePageNav({
		currentClass: "active",
		changeHash: false,
		scrollSpeed: 750,
		scrollIhreshold: 0.5,
		filter: "",
		easing: "swing",
		begin: function () {},
		end: function () {},
		scrollChange: function ($currentListItem) {},
	});

	// 1. получить кнопку по которой будет клик
	// 2. получить мобильное меню
	// 3. прослушать клик по кнопке и по клику то добавлять, то удалять класс active у мобил.меню
	// 4.то добавлять, то удалять класс active у кнопки, по которой кликаем
	// 5. получить оверлей
	// 6.при клике по кнопке, то добавлять, то удалять класс active

	// 1.прослушать событие резайз у окна
	// 2. у всех дивов убрать класс active

	let mobileMenuToggle = document.querySelector(".toggle-menu");
	let mobMenu = document.querySelector(".header-menu");
	let overlay = document.querySelector("#overlay");

	mobileMenuToggle.addEventListener("click", function () {
        console.log("click togle!")
		mobMenu.classList.toggle("active");
		this.classList.toggle("active");
		overlay.classList.toggle("active");
	});
	window.addEventListener("resize", function () {
		mobMenu.classList.remove("active");
		mobileMenuToggle.classList.remove("active");
		overlay.classList.remove("active");
	});

	//-фильтрация проектов
	let containerEl = document.querySelector("#portfolio-projects");

	let mixer = mixitup(containerEl, {
		classNames: {
			block: "",
		},
	});

	// - выравниваем   ширину карточек при фильтрации
	const filterToggles = document.querySelectorAll(".portfolio-works-toggle button"); // все кнопки-переключатели
	const portfolioBigCards = document.querySelectorAll(".portfolio-works__item "); // вс карточки  работ

	for (let i = 0; i < filterToggles.length; i++) {
		filterToggles[i].addEventListener("click", function () {
			if (i == 0) {
				for (let j = 0; j < 2; j++) {
					portfolioBigCards[j].classList.add("portfolio-works__item--big");
				}
			} else {
				for (let j = 0; j < 2; j++) {
					portfolioBigCards[j].classList.remove("portfolio-works__item--big");
				}
			}
		});
	}
});
// fake-placeholder

const formInputs = document.querySelectorAll(".form-field");

for (let item of formInputs) {
	const inputPlaceholder = item.nextElementSibling;

	item.addEventListener("focus", function () {
		inputPlaceholder.classList.add("active");
	});

	item.addEventListener("blur", function () {
		if (this.value == "") {
			inputPlaceholder.classList.remove("active");
		}
	});
}
// FORM VALIDATE
if ($("#contacts-form")) {
	$("#contacts-form").validate({
		rules: {
			email: {
				required: true,
				email: true,
			},
			theme: {
				required: true,
			},
			message: {
				required: true,
			},
		},
		messages: {
			email: {
				required: "Введите Ваш email",
				email: "Отсутствует символ @",
			},
			theme: {
				required: "Введите тему сообщения",
			},
			message: {
				required: "Введите текст сообщения",
			},
		},
		submitHandler: function (form) {
			ajaxFormSubmit();
		},
	});
}

// Функция AJAX запроса на сервер
function ajaxFormSubmit() {
	let string = $("#contacts-form").serialize(); // Сохраняем  данные, введенные в форму в строку.

	// Формируем ajax запрос
	$.ajax({
		type: "POST", // тип запроса - POST
		url: "php/mail.php", // куда отправляем запрос
		data: string, // Какие данные отправляем, в данном случае отправляем переменную string

		// Функция, если все прошло успешно
		success: function (html) {
			$("#contacts-form").slideUp(800);
			$("#answer").html(html);
		},
	});

	// Чтобы по submit больше ничего не выполнялось- делаем возврат false,  чтобы прервать цепочку срабатывания остальных функций
	return false;
}
//  Иконка Вверх top button
$("#backTop").hide();
$(window).scroll(function () {
	if ($(this).scrollTop() > 200) {
		$("#backTop").fadeIn();
	} else {
		$("#backTop").fadeOut();
	}
});

//::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
//planning animate
// $(function() {
//   if ($("#pc4-anim").length === 0) return;
//   $(document).ready(function() {
//     var typed = new Typed("#pc4-anim i", {
//       strings: [
//         "Привет...",
//         "Здесь этап создания блоков и не только...",
//         "Медленно, но верно, я проделаю всё..."
//       ],
//       typeSpeed: 40,
//       loop: true,
//       loopCount: Infinity,
//       showCursor: false
//     });
//   });
// });
// //planning scroll
// $(function() {
//   if ($(".planning").length === 0) return;
//   $(function() {
//     $(window).scroll(function() {
//       var scroll = $(window).scrollTop() + $(window).height() / 1.8;
//       var pc1Offset = $("#pc1").offset().top + $("#pc1").height() / 2;
//       var pc2Offset = $("#pc2").offset().top + $("#pc2").height() / 2;
//       var pc3Offset = $("#pc3").offset().top + $("#pc3").height() / 2;
//       var pc4Offset = $("#pc4").offset().top + $("#pc4").height() / 2;
//       var pc5Offset = $("#pc5").offset().top + $("#pc5").height() / 2;

//       if (scroll > pc1Offset && scroll < pc2Offset) {
//         $("#pc1").addClass("planning-act");
//       } else {
//         $("#pc1").removeClass("planning-act");
//       }
//       if (scroll > pc2Offset && scroll < pc3Offset) {
//         $("#pc2").addClass("planning-act");
//         $("#pc2").addClass("hover");
//       } else {
//         $("#pc2").removeClass("planning-act");
//         $("#pc2").removeClass("hover");
//       }
//       if (scroll > pc3Offset && scroll < pc4Offset) {
//         $("#pc3").addClass("planning-act");
//       } else {
//         $("#pc3").removeClass("planning-act");
//       }
//       if (scroll > pc4Offset && scroll < pc5Offset) {
//         $("#pc4").addClass("planning-act");
//         $("#pc4").addClass("hover");
//       } else {
//         $("#pc4").removeClass("planning-act");
//         $("#pc4").removeClass("hover");
//       }
//       if (scroll > pc5Offset && scroll < pc5Offset + 200) {
//         $("#pc5").addClass("planning-act");
//       } else {
//         $("#pc5").removeClass("planning-act");
//       }
//     });
//   });
// });

