$(document).ready(function() {

	$("#click").hover(
  function() {
    $("#hover_gallery").css({
			"background": "url(images/index/click.gif)",
			"background-repeat": "no-repeat",
			"background-position": "center",
			"background-size": "cover",
			"transition": "background 0.5s"
		});
  }, function() {
		$("#hover_gallery").css({
			"background": "url(images/index/click.gif)",
			"background-repeat": "no-repeat",
			"background-position": "center",
			"background-size": "cover",
		});
  }
	);

	$("#scroll").hover(
  function() {
    $("#hover_gallery").css({
			"background": "url(images/index/scroll.gif)",
			"background-repeat": "no-repeat",
			"background-position": "center",
			"background-size": "cover",
			"transition": "background 0.5s"
		});
  }, function() {
		$("#hover_gallery").css({
			"background": "url(images/index/scroll.gif)",
			"background-repeat": "no-repeat",
			"background-position": "center",
			"background-size": "cover",
		});
  }
	);

	$("#resize").hover(
  function() {
    $("#hover_gallery").css({
			"background": "url(images/index/resize.gif)",
			"background-repeat": "no-repeat",
			"background-position": "center",
			"background-size": "cover",
			"transition": "background 0.5s"
		});
  }, function() {
		$("#hover_gallery").css({
			"background": "url(images/index/resize.gif)",
			"background-repeat": "no-repeat",
			"background-position": "center",
			"background-size": "cover",
		});
  }
	);

});
