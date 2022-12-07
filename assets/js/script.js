$( document ).ready(function() {

  $(".saveBtn").click(function () {
   var value = $(this).siblings(".description").val();
   var time = $(this).parent().attr("id")
   localStorage.setItem(time, value);
  });
  
  $(".time-block").each(function () {
    var currentHour = parseInt(dayjs().format("H"));
    var plannerHour = parseInt($(this).attr("id"));
    if (currentHour < plannerHour) {
      $(this).addClass("future");
     } else if (currentHour === plannerHour) {
      $(this).removeClass("future");
      $(this).addClass("present");
    } else {
      $(this).removeClass("present");
      $(this).removeClass("future");
      $(this).addClass("past");
    }
  });

  $("#9 .description").val(localStorage.getItem("9"));
  $("#10 .description").val(localStorage.getItem("10"));
  $("#11 .description").val(localStorage.getItem("11"));
  $("#12 .description").val(localStorage.getItem("12"));
  $("#13 .description").val(localStorage.getItem("13"));
  $("#14 .description").val(localStorage.getItem("14"));
  $("#15 .description").val(localStorage.getItem("15"));
  $("#16 .description").val(localStorage.getItem("16"));
  $("#17 .description").val(localStorage.getItem("16"));

  // BUTTON TO CLEAR INPUT ITEMS AND LOCAL STORAGE
$("#clearItemsBtn").click(function (event) {
  event.preventDefault;
  $("textarea").val("");
  localStorage.clear();
});

  var today = dayjs();
  $("#currentDay").text(today.format("dddd, MMMM D, YYYY h:mm A"))
});
