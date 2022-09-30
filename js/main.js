let input = document.querySelector(".query");
let search_btn = document.querySelector(".search_btn");

search_btn.onclick = function () {
  let url = "https://www.google.com/search?q=" + input.value;
  window.open(url, "_self");
};
