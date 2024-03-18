var bg_text = String.fromCharCode(Math.floor(Math.random() * 917631) + 1);

var bg_div = document.getElementById("bg_img");

function textFill(text) {
  while (bg_div.offsetHeight < window.innerHeight + 100) {
    bg_div.innerHTML += " " + text + " ";
  }
}

textFill(bg_text);

$(window).resize(function () {
  textFill(bg_text);
});
