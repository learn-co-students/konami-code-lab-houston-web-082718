const codes = [
  "ArrowUp",
  "ArrowUp",
  "ArrowDown",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight",
  "ArrowLeft",
  "ArrowRight",
  "b",
  "a"
];

function init() {
  let index = 0;

  document.body.addEventListener("keydown", function(x) {
    if (x.key === codes[index]) {
      index++;
    } else {
      index = 0;
    }

    if (index === codes.length) {
      alert("Neeeeeeerrrrrrrddd!");
      console.log("Test");
      index = 0;
    }
  })
}
