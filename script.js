let initialNumber = 0;
let finalNumber = 0;
let operator;
let displayNumber = "";
const maxDisplayLength = 7;

$("h1").append(displayNumber);

buttonResponse();

// once any of the operation is performed
// the displayNumber is stored on initialNumber
// and the next displayNumber is stored on finalNumber

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

  $("#decimal").click(function () {
    if (displayNumber.length == maxDisplayLength) {
      return;
    }
    displayNumber += ".";
    $("h1").empty();
    $("h1").append(displayNumber);
  });

  //   operations
  $("#A").click(function () {
    if (displayNumber.length == maxDisplayLength) {
      return;
    }
    initialNumber = +displayNumber;
    operator = "A";
    $("h1").empty();
    displayNumber = "";
  });
  $("#S").click(function () {
    if (displayNumber.length == maxDisplayLength) {
      return;
    }
    initialNumber = +displayNumber;
    operator = "S";
    $("h1").empty();
    displayNumber = "";
  });
  $("#M").click(function () {
    if (displayNumber.length == maxDisplayLength) {
      return;
    }
    initialNumber = +displayNumber;
    operator = "M";
    $("h1").empty();
    displayNumber = "";
  });
  $("#D").click(function () {
    if (displayNumber.length == maxDisplayLength) {
      return;
    }
    initialNumber = +displayNumber;
    operator = "D";
    $("h1").empty();
    displayNumber = "";
  });
  $("#result").click(function () {
    // if (displayNumber.length == maxDisplayLength) {
    //   return;
    // }
    finalNumber = +displayNumber;
    $("h1").empty();
    performingOperation(initialNumber, finalNumber, operator);
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

function performingOperation(value1, value2, operation) {
  switch (operation) {
    case "A":
      initialNumber = value1 + value2;
      break;
    case "S":
      initialNumber = value1 - value2;
      break;
    case "M":
      initialNumber = value1 * value2;
      break;
    case "D":
      initialNumber = value1 / value2;
      break;
  }
  displayNumber = initialNumber;
  $("h1").append(displayNumber);
  return;
}
