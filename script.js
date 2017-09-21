// Change background color on click
// document.body.onclick = function() {
//   this.style.backgroundColor = "red";
// };

// Constantly change background color to random color;
document.body.onclick = function() {
  var r = Math.round(Math.random() * 255);
  var g = Math.round(Math.random() * 255);
  var b = Math.round(Math.random() * 255);
  var a = 1;
  //   console.log(r);
  //   console.log(g);
  //   console.log(b);
  //   console.log(`rgba(${r}, ${g}, ${b}, ${a})`);
  this.style.backgroundColor = `rgba(${r}, ${g}, ${b}, ${a})`;
};

// // hovering over the main title should change its size
// var img = document.querySelector("img");
// var width = window.getComputedStyle(img).width;
// img.onmouseover = function() {
//   this.style.width = "50px";
// };

// img.onmouseout = function() {
//   this.style.width = width;
// };

// // for every link: clicking should trigger an alert stating that you clicked that link
// var links = document.querySelectorAll("a");
// for (var i = 0; i < links.length; i++) {
//   links[i].onclick = function() {
//     var nameLink = this.innerText;
//     var message = `I clicked on ${nameLink}`;
//     alert(message);
//   };
// }

// // try to submit a form. By default the submission is send to the back-end,
// // but in this case you'll need to "hijack" the submission somehow.
// var searchButton = document.getElementById("searchButton");
// searchButton.onclick = function() {
//   var searchValue = document.getElementById("searchInput").value;
//   alert(searchValue);
// };

// // have a div ( or another block element) dissapear and reappear by clicking a button/hovering over it
// var poof = document.getElementById("poof");
// var hideButton = document.getElementById("hideButton");
// hideButton.onclick = function() {
//   if (this.style.visibility === "hidden") {
//     poof.style.visibility = "visible";
//   } else {
//     poof.style.visibility = "hidden";
//   }
// };
