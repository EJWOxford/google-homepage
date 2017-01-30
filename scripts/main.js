/*var num1 = document.getElementById("num1");
var num2 = document.getElementById("num2");
var addSum = document.getElementById("addSum");

num1.addEventListener("input", add);
num2.addEventListener("input", add);

function add() {
   //console.log(parseFloat(num1.value || 0) + parseFloat(num2.value || 0));
   var sum= parseFloat(num1.value ||0)+parseFloat(num2.value ||0);
   addSum.innerHTML = "your sum is: "+sum
}*/
/*var simon = document.getElementById("simon");
var ben = document.getElementById("ben");
var max = document.getElementById("max");
var simonPic= document.getElementById("simon-pic")

simon.addEventListener("click", picLink);
ben.addEventListener("click", picLink);
max.addEventListener("click", picLink);

function picLink() {
  var allImages= document.querySelectorAll("img");

  for (var i=0; i<allImages.length;i++) {
    allImages[i].className = "hide";
  }
}

var picId = this.attributes["data-img"].value;
var pic= document.getElementById(picId);
if (pic.className === "hide") {
  pic.className = " ";
} else {
  pic.className = "hide";
}
} */
var simon = document.getElementById("simon");
var bruce = document.getElementById("bruce");
var ben = document.getElementById("ben");

function picLink() {
    var allImages = document.querySelectorAll("img");

    for (var i = 0; i < allImages.length; i++) {
    allImages[i].className = "hide";
  }

  var picId = this.attributes["data-img"].value;
  var pic = document.getElementById(picId);
  if (pic.className === "hide") {
    pic.className = "";
  } else {
    pic.className = "hide";
  }
}

simon.addEventListener("click", picLink);
bruce.addEventListener("click", picLink);
ben.addEventListener("click", picLink);


