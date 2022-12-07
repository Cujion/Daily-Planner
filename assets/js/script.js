$( document ).ready(function() {

//ADDING CLICK EVENT TO SAVE BUTTON 
$(".saveBtn").click(function () {
  // DEFINING VARIABLES FOR TEXT INPUT FIELD AND TIME
  var value = $(this).siblings(".description").val();
  var time = $(this).parent().attr("id")
  // SENDING THESE VARIABLES TO LOCAL STORAGE
  localStorage.setItem(time, value);
});

$(".time-block").each(function () {
  // FORMATTING LOCAL TIME TO ONLY DISPLAY THE HOUR
  var currentHour = parseInt(dayjs().format("H"));
    // GRABBING THE ID FOR EACH PLANNER SECTION TO COMPARE TO LOCAL TIME
  var plannerHour = parseInt($(this).attr("id"));
  // CHANGING THE BACKGROUND COLOR DEPENDING ON PAST, PRESENT OR FUTURE
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

  // GRABBING DATA FROM LOCAL STORAGE AND SENDING IT BACK TO THE PAGE
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

  // USING DAYJS FOR LOCAL TIME, FORMATTING IT, AND THEN DISPLAYING IT IN THE HEADER
  var today = dayjs();
  $("#currentDay").text(today.format("dddd, MMMM D, YYYY h:mm A"))
});
