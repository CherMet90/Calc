$(function() {
	// alert ('jQuery подключен и отлично работает!');
	var h;
	var tariffCost;
	var sum;
	h = $(".sliders-column--items").css('height');
	$(".img-column--items").css('height', h);
	$(window).resize(function(){
		h = $(".sliders-column--items").css('height');
		$(".img-column--items").css('height', h);
	});

	// $('#comp_num').change(function(){
 //  	alert('Элемент foo был изменен.');
	// });

	$("#comp_sl").on('input', function () {
		sum = tariffCost + (Number($("#serv_num").val()) + Number($("#comp_num").val()))*490;
		// alert (sum);
		$("#sum").html(sum);
	});

	$("#serv_sl").on('input', function () {
		sum = tariffCost + (Number($("#serv_num").val()) + Number($("#comp_num").val()))*490;
		// alert (sum);
		$("#sum").html(sum);
	});

	$("input[type=radio]").click(function(e) {
		n = $("input[type=radio]").index(e.target);
		$(".selectors--title").css({'background-color' : '#00a7d6', 'color' : '#fff'});
		$(".selectors--title").eq(n).css({'background-color' : '#ffffff', 'color' : '#00a7d6'});
		if (n>=1) {
			if ($(".content-tariffs--wrap").children().eq(0).hasClass("active")) {
				setStandartTariff();
			}
			$(".content-tariffs--wrap").children("span").eq(0).attr("class", "inactive");
			$(".content-tariffs--wrap").children("span").eq(0).css('background-color', '#cccccc');
			$(".content-tariffs--wrap").children("span").eq(0).css('color', '#fff');
			} else {
				$(".content-tariffs--wrap").children("span").eq(0).attr("class", "");
				$(".content-tariffs--wrap").children("span").eq(0).css({'background-color': '#fff',
																		'color': 'rgb(0,167,214)'});
			}

	});

	$(".content-tariffs--wrap").children().click(function(e) {
		n = $(".content-tariffs--wrap").children().index(e.target);
		if ($(".content-tariffs--wrap").children().eq(0).hasClass("inactive") && n==0) {
			
		} else {
			if (!$(".content-tariffs--wrap").children().eq(0).hasClass("inactive")) {
				$(".content-tariffs--wrap").children().css({'background-color' : '#fff', 'color' : 'rgb(0,167,214)'});
				$(".content-tariffs--wrap").children().attr("class", "");
				$(".content-tariffs--wrap").children().eq(n).css({'background-color' : '#00a7d6', 'color' : '#fff'});
				$(".content-tariffs--wrap").children().eq(n).attr("class", "active");
	        } else {
	        	$(".content-tariffs--wrap").children(":not(.inactive)").css({'background-color' : '#fff', 'color' : 'rgb(0,167,214)'});
				$(".content-tariffs--wrap").children().eq(n).css({'background-color' : '#00a7d6', 'color' : '#fff'});
	        }
	    }
	});

	$(".content-tariffs--wrap").children().eq(0).click(function() {
		if (!$(".content-tariffs--wrap").children().eq(0).hasClass("inactive")) {
		$(".content-tariffs--wrap").children("span").eq(0).attr("class", "active");
		$(".tariffs__cost").html("1990 руб.");
		tariffCost = 1990;
		$("tr").eq(0).html("<td>Плановые выезды</td><td>1</td>");
		$("tr").eq(1).html("<td>Экстренные выезды</td><td>2</td>");
		$("tr").eq(2).html("<td>Время реакции</td><td>72 часа</td>");
		$("tr").eq(3).html("<td>Время решения проблемы</td><td>24 часа</td>");
		$("tr").eq(4).html("<td>Рабочее время</td><td>9:00-18:00</td>");
		$("tr").eq(5).html("<td>Коэффициент удаленности</td><td>1-3,4</td>");
		$("tr").eq(6).html("<td>Количество техники</td><td>10 шт.*</td>");
		$("tr").eq(7).html("<td>Обслуживание сервера</td><td>1 300 руб</td>");
		$("tr").eq(8).html("<td>Проектный мониторинг</td><td>-</td>");
		$("tr").eq(9).html("<td>Закрепленный инженер</td><td>-</td></td>");
		sum = tariffCost + (Number($("#serv_num").val()) + Number($("#comp_num").val()))*490;
		$(".footer__items").children("span").css('visibility', 'visible');
		$("#sum").html(sum);
		};
	});	

	$(".content-tariffs--wrap").children().eq(1).click(function() {
		$(".tariffs__cost").html("2990 руб.");
		tariffCost = 2990;
		$("tr").eq(0).html("<td>Плановые выезды</td><td>2</td>");
		$("tr").eq(1).html("<td>Экстренные выезды</td><td>3</td>");
		$("tr").eq(2).html("<td>Время реакции</td><td>24 часа</td>");
		$("tr").eq(3).html("<td>Время решения проблемы</td><td>48 часов</td>");
		$("tr").eq(4).html("<td>Рабочее время</td><td>9:00-20:00</td>");
		$("tr").eq(5).html("<td>Коэффициент удаленности</td><td>1-2,3</td>");
		$("tr").eq(6).html("<td>Количество техники</td><td>20 шт.*</td>");
		$("tr").eq(7).html("<td>Обслуживание сервера</td><td>1 300 руб</td>");
		$("tr").eq(8).html("<td>Проектный мониторинг</td><td>-</td>");
		$("tr").eq(9).html("<td>Закрепленный инженер</td><td>-</td></td>");
		sum = tariffCost + (Number($("#serv_num").val()) + Number($("#comp_num").val()))*490;
		$(".footer__items").children("span").css('visibility', 'visible');
		$("#sum").html(sum);
	});	

	$(".content-tariffs--wrap").children().eq(2).click(function() {
		$(".tariffs__cost").html("4490 руб.");
		tariffCost = 4490;
		$("tr").eq(0).html("<td>Плановые выезды</td><td>3</td>");
		$("tr").eq(1).html("<td>Экстренные выезды</td><td>5</td>");
		$("tr").eq(2).html("<td>Время реакции</td><td>8 часов</td>");
		$("tr").eq(3).html("<td>Время решения проблемы</td><td>24 часа</td>");
		$("tr").eq(4).html("<td>Рабочее время</td><td>9:00-20:00</td>");
		$("tr").eq(5).html("<td>Коэффициент удаленности</td><td>1-1,5</td>");
		$("tr").eq(6).html("<td>Количество техники</td><td>30 шт.*</td>");
		$("tr").eq(7).html("<td>Обслуживание сервера</td><td>1 300 руб</td>");
		$("tr").eq(8).html("<td>Проектный мониторинг</td><td>есть</td>");
		$("tr").eq(9).html("<td>Закрепленный инженер</td><td>-</td></td>");
		sum = tariffCost + (Number($("#serv_num").val()) + Number($("#comp_num").val()))*490;
		$(".footer__items").children("span").css('visibility', 'visible');
		$("#sum").html(sum);
	});	

	$(".content-tariffs--wrap").children().eq(3).click(function() {
		$(".tariffs__cost").html("6990 руб.");
		tariffCost = 6990;
		$("tr").eq(0).html("<td>Плановые выезды</td><td>4</td>");
		$("tr").eq(1).html("<td>Экстренные выезды</td><td>неограничено</td>");
		$("tr").eq(2).html("<td>Время реакции</td><td>8 часов</td>");
		$("tr").eq(3).html("<td>Время решения проблемы</td><td>24 часа</td>");
		$("tr").eq(4).html("<td>Рабочее время</td><td>круглосуточно</td>");
		$("tr").eq(5).html("<td>Коэффициент удаленности</td><td>1</td>");
		$("tr").eq(6).html("<td>Количество техники</td><td>40 шт.*</td>");
		$("tr").eq(7).html("<td>Обслуживание сервера</td><td>1 300 руб</td>");
		$("tr").eq(8).html("<td>Проектный мониторинг</td><td>есть</td>");
		$("tr").eq(9).html("<td>Закрепленный инженер</td><td>есть</td></td>");
		sum = tariffCost + (Number($("#serv_num").val()) + Number($("#comp_num").val()))*490;
		$(".footer__items").children("span").css('visibility', 'visible');
		$("#sum").html(sum);
	});	

	function setStandartTariff() {
		$(".tariffs__cost").html("2990 руб.");
		tariffCost = 2990;
		$("tr").eq(0).html("<td>Плановые выезды</td><td>2</td>");
		$("tr").eq(1).html("<td>Экстренные выезды</td><td>3</td>");
		$("tr").eq(2).html("<td>Время реакции</td><td>24 часа</td>");
		$("tr").eq(3).html("<td>Время решения проблемы</td><td>48 часов</td>");
		$("tr").eq(4).html("<td>Рабочее время</td><td>9:00-20:00</td>");
		$("tr").eq(5).html("<td>Коэффициент удаленности</td><td>1-2,3</td>");
		$("tr").eq(6).html("<td>Количество техники</td><td>20 шт.*</td>");
		$("tr").eq(7).html("<td>Обслуживание сервера</td><td>1 300 руб</td>");
		$("tr").eq(8).html("<td>Проектный мониторинг</td><td>-</td>");
		$("tr").eq(9).html("<td>Закрепленный инженер</td><td>-</td></td>");
		sum = tariffCost + (Number($("#serv_num").val()) + Number($("#comp_num").val()))*490;
		$(".footer__items").children("span").css('visibility', 'visible');
		$("#sum").html(sum);
		$(".content-tariffs--wrap").children().eq(1).css({'background-color' : '#00a7d6', 'color' : '#fff'});
	};

	// $("#sum").html(function () {
	// 	// var sum = tariffCost + $("comp_num").attr("value") + $("serv_num").attr("value");
	// 	var sum = $("#serv_num").val() + $("#comp_num").val();
	// 	// alert (sum);
	// 	return sum;
	// })

});