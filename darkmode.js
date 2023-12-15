let body = document.body;
let skyBtn = document.querySelector(".btn");
let textDM = document.querySelector(".text-lm");
let txtMode = document.getElementById("mode");
let textC = "LIGHT MODE";
txtMode.textContent = textC;

function darkMode() {
  console.log("berhasil di klik");
  body.classList.toggle("dark");
  skyBtn.classList.toggle("sky");
  textDM.classList.toggle("text-dm");

  textC = body.classList.contains("dark") ? "DARK MODE" : "LIGHT MODE";
  // jika dengan if-else
  // *
  // if (body.classList.contains('dark')) {
  //     textC = 'DARK MODE';
  //   } else {
  //     textC = 'LIGHT MODE';
  //   }
  txtMode.textContent = textC;
  return;
}
