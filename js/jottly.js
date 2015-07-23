$(document).ready(function() {
  setUpButtons();
});

// Click a Button
function setUpButtons() {
  $("#btn1").click(function() {
    hideAndDisplay(1);
  });
  $("#btn2").click(function() {
    hideAndDisplay(2);
  });
  $("#btn3").click(function() {
    hideAndDisplay(3);
  });
  $("#btn4").click(function() {
    hideAndDisplay(4);
  });
  $("#btn5").click(function() {
    hideAndDisplay(5);
  });
  $("#btn6").click(function() {
    hideAndDisplay(6);
  });
}

function hideAndDisplay(boxToDisplay) {
  $(".item").removeClass('visible');
  $("#box" + boxToDisplay).addClass('visible');
}