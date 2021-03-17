
  $("#js-body .container")
  .first()
  .prepend(
    '<div class="col-md-12"><h2 id="clock-title">Masterclass Starts In:<\/h2><div id="clock"><\/div><\/div>'
  );

var webbyDate = new Date($("#js_date_1").text().trim());

if (webbyDate < new Date()) {
  var analyticsCheck = setInterval(function () {
    if (window.ga && ga.create) {
      window.location = $("#js_live_link_1").html();
    }
  }, 1000);
} else {
  $("#clock").countdown({
    until: new Date($("#js_date_1").text().trim()),
    padZeroes: true,
    expiryUrl: $("#js_live_link_1").html(),
  });

  $(".webinar-url").hide();
}