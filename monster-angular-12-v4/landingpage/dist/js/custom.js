/* -------------------------------
Template Name: Monster Admin
Author: Wrappixel
Email: niravjoshi87@gmail.com
File: js
------------------------------- */

$(function () {
  "use strict";
  $(function () {
    $(".preloader").fadeOut();
  });
  $(".dm-btn").on("click", function (event) {
    var $anchor = $(this);
    $("html, body")
      .stop()
      .animate(
        {
          scrollTop: $($anchor.attr("href")).offset().top - 90,
        },
        1000
      );
    event.preventDefault();
  });
});
