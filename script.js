let initialNumber = 0;
let finalNumber = 0;
let operator;
let displayNumber = "";
const maxTextLength = 8;
const displayWidth = $(".calculatorDisplay").width();
let decimalButtonPressedOnce = false;
const reDot = /[.]/;

$("p").append(displayNumber);

buttonResponse();

// button functionalities
function buttonResponse() {
  // the numbers
  $(".zero").click(function () {
    if (displayNumber.length >= maxTextLength) {
      return;
    }

    displayNumber += "0";
    $("p").empty();
    textResize();
    $("p").append(displayNumber);
  });
  $(".one").click(function () {
    if (displayNumber.length >= maxTextLength) {
      return;
    }

    displayNumber += "1";
    $("p").empty();
    textResize();
    $("p").append(displayNumber);
  });
  $(".two").click(function () {
    if (displayNumber.length >= maxTextLength) {
      return;
    }

    displayNumber += "2";
    $("p").empty();
    textResize();
    $("p").append(displayNumber);
  });
  $(".three").click(function () {
    if (displayNumber.length >= maxTextLength) {
      return;
    }

    displayNumber += "3";
    $("p").empty();
    textResize();
    $("p").append(displayNumber);
  });
  $(".four").click(function () {
    if (displayNumber.length >= maxTextLength) {
      return;
    }

    displayNumber += "4";
    $("p").empty();
    textResize();
    $("p").append(displayNumber);
  });
  $(".five").click(function () {
    if (displayNumber.length >= maxTextLength) {
      return;
    }

    displayNumber += "5";
    $("p").empty();
    textResize();
    $("p").append(displayNumber);
  });
  $(".six").click(function () {
    if (displayNumber.length >= maxTextLength) {
      return;
    }

    displayNumber += "6";
    $("p").empty();
    textResize();
    $("p").append(displayNumber);
  });
  $(".seven").click(function () {
    if (displayNumber.length >= maxTextLength) {
      return;
    }

    displayNumber += "7";
    $("p").empty();
    textResize();
    $("p").append(displayNumber);
  });
  $(".eight").click(function () {
    if (displayNumber.length >= maxTextLength) {
      return;
    }

    displayNumber += "8";
    $("p").empty();
    textResize();
    $("p").append(displayNumber);
  });
  $(".nine").click(function () {
    if (displayNumber.length >= maxTextLength) {
      return;
    }

    displayNumber += "9";
    $("p").empty();
    textResize();
    $("p").append(displayNumber);
  });

  $("#decimal").click(function () {
    if (displayNumber.length >= maxTextLength) {
      return;
    }
    if (decimalButtonPressedOnce == true) {
      return;
    }

    decimalButtonPressedOnce = true;

    displayNumber += ".";
    $("p").empty();
    textResize();
    $("p").append(displayNumber);
  });

  //   operations
  $("#A").click(function () {
    operator = "A";
    setInitialValue();
  });
  $("#S").click(function () {
    operator = "S";
    setInitialValue();
  });
  $("#M").click(function () {
    operator = "M";
    setInitialValue();
  });
  $("#D").click(function () {
    operator = "D";
    setInitialValue();
  });

  $("#result").click(function () {
    performingOperation(initialNumber, operator);
  });

  // clearing the numbers
  $("#backspace").click(function () {
    displayNumber = displayNumber.slice(0, -1);
    $("p").empty();
    $("p").append(displayNumber);
    checkForDecimalPoints();
  });

  $("#allClear").click(function () {
    $("p").empty();
    displayNumber = "";
    initialNumber = 0;
    finalNumber = 0;
    operator = "";
    decimalButtonPressedOnce = false;
  });
}

function setInitialValue() {
  initialNumber = +displayNumber;
  $("p").empty();
  displayNumber = "";
  decimalButtonPressedOnce = false;
}

function performingOperation() {
  finalNumber = +displayNumber;
  $("p").empty();
  switch (operator) {
    case "A":
      initialNumber = initialNumber + finalNumber;
      break;
    case "S":
      initialNumber = initialNumber - finalNumber;
      break;
    case "M":
      initialNumber = initialNumber * finalNumber;
      break;
    case "D":
      initialNumber = initialNumber / finalNumber;
      break;
  }
  displayNumber = initialNumber.toString();
  finalNumber = 0;
  if (displayNumber.length > 20) {
    alert("Cannot display such large numbers.");
    location.reload();
    return;
  }
  checkForDecimalPoints();
  $("p").append(displayNumber);
  textResize();
  return;
}

// resizing the text to acomedate the length
function textResize() {
  let textWidth = $("p").width();
  if (textWidth > (150 / 100) * displayWidth) {
    $(".calculatorDisplay").css("fontSize", "2em");
    return;
  } else if (textWidth > (120 / 100) * displayWidth) {
    $(".calculatorDisplay").css("fontSize", "2.5em");
    return;
  } else if (textWidth > displayWidth) {
    $(".calculatorDisplay").css("fontSize", "3em");
    return;
  }

  $(".calculatorDisplay").css("fontSize", "4em");
  return;
}

function checkForDecimalPoints() {
  if (displayNumber.search(reDot) == -1) {
    decimalButtonPressedOnce = false;
    return;
  }
  decimalButtonPressedOnce = true;
  return;
}
