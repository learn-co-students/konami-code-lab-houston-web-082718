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

let index = 0;

function init() {
  // your code here
  const bod = document.body;

  bod.addEventListener('keydown', function(e) {
    if (e.key === codes[index]) {
      index++;
   
      if (index === codes.length) {
        alert("Yay!");
   
        index = 0;
      }

    } else {
      index = 0;
    }

  });

}
