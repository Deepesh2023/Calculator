let initialNumber = 0;
let finalNumber = 0;
let operation;
let displayNumber = "";
const maxDisplayLength = 7;

$("h1").append(displayNumber);

if (displayNumber.length == 6) {
  $(".button").off("click");
}

buttonResponse();

// button functionalities
function buttonResponse() {
  // the numbers
  $(".zero").click(function () {
    if (displayNumber.length == maxDisplayLength) {
      return;
    }
    displayNumber += "0";
    $("h1").empty();
    $("h1").append(displayNumber);
  });
  $(".one").click(function () {
    if (displayNumber.length == maxDisplayLength) {
      return;
    }
    displayNumber += "1";
    $("h1").empty();
    $("h1").append(displayNumber);
  });
  $(".two").click(function () {
    if (displayNumber.length == maxDisplayLength) {
      returnmaxDisplayLength;
    }
    displayNumber += "2";
    $("h1").empty();
    $("h1").append(displayNumber);
  });
  $(".three").click(function () {
    if (displayNumber.length == maxDisplayLength) {
      return;
    }
    displayNumber += "3";
    $("h1").empty();
    $("h1").append(displayNumber);
  });
  $(".four").click(function () {
    if (displayNumber.length == maxDisplayLength) {
      return;
    }
    displayNumber += "4";
    $("h1").empty();
    $("h1").append(displayNumber);
  });
  $(".five").click(function () {
    if (displayNumber.length == maxDisplayLength) {
      return;
    }
    displayNumber += "5";
    $("h1").empty();
    $("h1").append(displayNumber);
  });
  $(".six").click(function () {
    if (displayNumber.length == maxDisplayLength) {
      return;
    }
    displayNumber += "6";
    $("h1").empty();
    $("h1").append(displayNumber);
  });
  $(".seven").click(function () {
    if (displayNumber.length == maxDisplayLength) {
      return;
    }
    displayNumber += "7";
    $("h1").empty();
    $("h1").append(displayNumber);
  });
  $(".eight").click(function () {
    if (displayNumber.length == maxDisplayLength) {
      return;
    }
    displayNumber += "8";
    $("h1").empty();
    $("h1").append(displayNumber);
  });
  $(".nine").click(function () {
    if (displayNumber.length == maxDisplayLength) {
      return;
    }
    displayNumber += "9";
    $("h1").empty();
    $("h1").append(displayNumber);
  });

  //   operations
  $("#A").click(function () {
    if (displayNumber.length == maxDisplayLength) {
      return;
    }
    displayNumber += "+";
    $("h1").empty();
    $("h1").append(displayNumber);
    operation = "A";
  });
  $("#S").click(function () {
    if (displayNumber.length == maxDisplayLength) {
      return;
    }
    displayNumber += "-";
    $("h1").empty();
    $("h1").append(displayNumber);
    operation = "S";
  });
  $("#M").click(function () {
    if (displayNumber.length == maxDisplayLength) {
      return;
    }
    displayNumber += "x";
    $("h1").empty();
    $("h1").append(displayNumber);
    operation = "M";
  });
  $("#D").click(function () {
    if (displayNumber.length == maxDisplayLength) {
      return;
    }
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
  });

  $("#allClear").click(function () {
    $("h1").empty();
    displayNumber = "";
    initialNumber = 0;
    finalNumber = 0;
  });
}
