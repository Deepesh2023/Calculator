let initialNumber = 0;
let finalNumber = 0;
let operator;
let displayNumber = "";
const maxDisplayLength = 8;
const displayWidth = $(".calculatorDisplay").width();

$("p").append(displayNumber);

buttonResponse();

// button functionalities
function buttonResponse() {
  // the numbers
  $(".zero").click(function () {
    if (displayNumber.length >= maxDisplayLength) {
      return;
    }

    displayNumber += "0";
    $("p").empty();
    $("p").append(displayNumber);
  });
  $(".one").click(function () {
    if (displayNumber.length >= maxDisplayLength) {
      return;
    }

    displayNumber += "1";
    $("p").empty();
    textResize();
    $("p").append(displayNumber);
  });
  $(".two").click(function () {
    if (displayNumber.length >= maxDisplayLength) {
      return;
    }

    displayNumber += "2";
    $("p").empty();
    textResize();
    $("p").append(displayNumber);
  });
  $(".three").click(function () {
    if (displayNumber.length >= maxDisplayLength) {
      return;
    }

    displayNumber += "3";
    $("p").empty();
    textResize();
    $("p").append(displayNumber);
  });
  $(".four").click(function () {
    if (displayNumber.length >= maxDisplayLength) {
      return;
    }

    displayNumber += "4";
    $("p").empty();
    textResize();
    $("p").append(displayNumber);
  });
  $(".five").click(function () {
    if (displayNumber.length >= maxDisplayLength) {
      return;
    }

    displayNumber += "5";
    $("p").empty();
    textResize();
    $("p").append(displayNumber);
  });
  $(".six").click(function () {
    if (displayNumber.length >= maxDisplayLength) {
      return;
    }

    displayNumber += "6";
    $("p").empty();
    textResize();
    $("p").append(displayNumber);
  });
  $(".seven").click(function () {
    if (displayNumber.length >= maxDisplayLength) {
      return;
    }

    displayNumber += "7";
    $("p").empty();
    textResize();
    $("p").append(displayNumber);
  });
  $(".eight").click(function () {
    if (displayNumber.length >= maxDisplayLength) {
      return;
    }

    displayNumber += "8";
    $("p").empty();
    textResize();
    $("p").append(displayNumber);
  });
  $(".nine").click(function () {
    if (displayNumber.length >= maxDisplayLength) {
      return;
    }

    displayNumber += "9";
    $("p").empty();
    textResize();
    $("p").append(displayNumber);
  });

  $("#decimal").click(function () {
    if (displayNumber.length >= maxDisplayLength) {
      return;
    }

    displayNumber += ".";
    $("p").empty();
    textResize();
    $("p").append(displayNumber);
  });

  //   operations
  $("#A").click(function () {
    initialNumber = +displayNumber;
    operator = "A";
    $("p").empty();
    displayNumber = "";
  });
  $("#S").click(function () {
    initialNumber = +displayNumber;
    operator = "S";
    $("p").empty();
    displayNumber = "";
  });
  $("#M").click(function () {
    initialNumber = +displayNumber;
    operator = "M";
    $("p").empty();
    displayNumber = "";
  });
  $("#D").click(function () {
    initialNumber = +displayNumber;
    operator = "D";
    $("p").empty();
    displayNumber = "";
  });

  $("#result").click(function () {
    // if (displayNumber.length == maxDisplayLength) {
    //   return;
    // }
    finalNumber = +displayNumber;
    $("p").empty();
    performingOperation(initialNumber, finalNumber, operator);
    finalNumber = 0;
  });

  // clearing the numbers
  $("#backspace").click(function () {
    displayNumber = displayNumber.slice(0, -1);
    $("p").empty();
    $("p").append(displayNumber);
  });

  $("#allClear").click(function () {
    $("p").empty();
    displayNumber = "";
    initialNumber = 0;
    finalNumber = 0;
    operator = "";
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
  displayNumber = initialNumber.toString();
  $("p").append(displayNumber);
  textResize();
  return;
}

// resizing the text to acomedate the length
function textResize() {
  let textWidth = $("p").width();
  if (textWidth > (180 / 100) * displayWidth) {
    displayNumber = "";
    alert("Cannot display such large numbers.");
    location.reload();
  } else if (textWidth > (150 / 100) * displayWidth) {
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

