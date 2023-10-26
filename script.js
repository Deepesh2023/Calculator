let initialNumber = 0;
let finalNumber = 0;
let operation;
let displayNumber = "";

$("h1").append(displayNumber);

buttonResponse();

function buttonResponse() {
  $(".zero").click(function () {
    checkDisplayLength(displayNumber);
    displayNumber += "0";
    $("h1").empty();
    $("h1").append(displayNumber);
  });
  $(".one").click(function () {
    checkDisplayLength(displayNumber);
    displayNumber += "1";
    $("h1").empty();
    $("h1").append(displayNumber);
  });
  $(".two").click(function () {
    checkDisplayLength(displayNumber);
    displayNumber += "2";
    $("h1").empty();
    $("h1").append(displayNumber);
  });
  $(".three").click(function () {
    checkDisplayLength(displayNumber);
    displayNumber += "3";
    $("h1").empty();
    $("h1").append(displayNumber);
  });
  $(".four").click(function () {
    checkDisplayLength(displayNumber);
    displayNumber += "4";
    $("h1").empty();
    $("h1").append(displayNumber);
  });
  $(".five").click(function () {
    checkDisplayLength(displayNumber);
    displayNumber += "5";
    $("h1").empty();
    $("h1").append(displayNumber);
  });
  $(".six").click(function () {
    checkDisplayLength(displayNumber);
    displayNumber += "6";
    $("h1").empty();
    $("h1").append(displayNumber);
  });
  $(".seven").click(function () {
    checkDisplayLength(displayNumber);
    displayNumber += "7";
    $("h1").empty();
    $("h1").append(displayNumber);
  });
  $(".eight").click(function () {
    checkDisplayLength(displayNumber);
    displayNumber += "8";
    $("h1").empty();
    $("h1").append(displayNumber);
  });
  $(".nine").click(function () {
    checkDisplayLength(displayNumber);
    displayNumber += "9";
    $("h1").empty();
    $("h1").append(displayNumber);
  });

  //   operations
  $("#A").click(function () {
    displayNumber += "+";
    $("h1").empty();
    $("h1").append(displayNumber);
    operation = "A";
  });
  $("#S").click(function () {
    displayNumber += "-";
    $("h1").empty();
    $("h1").append(displayNumber);
    operation = "S";
  });
  $("#M").click(function () {
    displayNumber += "x";
    $("h1").empty();
    $("h1").append(displayNumber);
    operation = "M";
  });
  $("#D").click(function () {
    displayNumber += "/";
    $("h1").empty();
    $("h1").append(displayNumber);
    operation = "D";
  });

  // clearing the numbers
  $("#backspace").click(function () {
    displayNumber = displayNumber.slice(0, -1);
    $("h1").empty();
    $("h1").append(displayNumber);
    checkDisplayLength(displayNumber);
  });

  $("#allClear").click(function () {
    displayNumber += "9";
    $("h1").empty();
    displayNumber = "";
    initialNumber = 0;
    finalNumber = 0;
  });
}

// checking the string length
function checkDisplayLength(text) {
  if (text.length == 7) {
    $(".button").off("click");
  }
}
