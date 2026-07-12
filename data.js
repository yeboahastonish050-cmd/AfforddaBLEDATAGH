document.getElementById("menu").addEventListener("click", function () {
  document.getElementById("menu1").style.display = "block";
});
document.getElementById("menu").addEventListener("click", function () {
  document.getElementById("menu2").style.display = "block";
});
document.getElementById("main").addEventListener("click", function () {
  document.getElementById("menu1").style.display = "none";
});
document.getElementById("menu").addEventListener("click", function () {
  document.getElementById("menu2").style.display = "block";
});
document.getElementById("menu").addEventListener("click", function () {
  document.getElementById("menu3").style.display = "block";
});
document.getElementById("contain1").addEventListener("click", function () {
  document.getElementById("menu3").style.display = "none";
});
document.getElementById("menu").addEventListener("click", function () {
  document.getElementById("menu4").style.display = "block";
});
document.getElementById("contain2").addEventListener("click", function () {
  document.getElementById("menu4").style.display = "none";
});

document.getElementById("MTN1").addEventListener("click", function () {
  document.getElementById("one").style.display = "none";
  document.getElementById("two").style.display = "block";
});
document.getElementById("TELECEL").addEventListener("click", function () {
  document.getElementById("one").style.display = "none";
  document.getElementById("three").style.display = "block";
});
document.getElementById("AIRTELTIGO").addEventListener("click", function () {
  document.getElementById("one").style.display = "none";
  document.getElementById("four").style.display = "block";
});
document.getElementById("home").addEventListener("click", function () {
  document.getElementById("one").style.display = "block";
  document.getElementById("two").style.display = "none";
  document.getElementById("three").style.display = "none";
  document.getElementById("four").style.display = "none";
});
card = document.getElementById("cart");
card.forEach((cards) => {
  document.getElementById("one").style.display = "block";
});
