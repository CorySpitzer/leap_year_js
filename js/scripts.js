var leapYear = function(year) {
  if ((year % 4 === 0) && (year % 100 !== 0)) {
    return true;
  } else {
    return false;
  };
};

$(document).ready(function() {
  $("form#leap-year").submit(function(event) {
    var year = parseInt($("input#year").val());
    var result = leapYear(year);
    debugger;
    $(".year").text(year);
    if (!result) {
      $(".not").show();
      $(".not").text("not");
    } else {
      $(".not").hide();
    }

    $("#result").show();
    event.preventDefault();
  });
});
