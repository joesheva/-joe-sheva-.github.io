
window.onscroll = function() {scrollFunction()};





function scrollFunction() {
  if (document.body.scrollTop > 105 || document.documentElement.scrollTop > 105) {
    document.getElementById("header").style.backgroundColor = "";
   
  

  
    document.getElementById("text").style.color = "#0f0f10";
    document.getElementById("text1").style.color = "#0f0f10";
    document.getElementById("text2").style.color = "#0f0f10";
    document.getElementById("text3").style.color = "#0f0f10";
  } else {

    document.getElementById("text").style.color = "#f6ecde";
    document.getElementById("text1").style.color = "#f6ecde";
    document.getElementById("text2").style.color = "#f6ecde";
    document.getElementById("text3").style.color = "#f6ecde";

    document.getElementById("header").style.backgroundColor = "#0f0f10";
  }
}


var today = new Date();
var time = today.getHours();
var greet;

if (time > 16) {
  greet = 'Good Evening!Iam Joseph Hughes A self taught web designer';
} else if (time > 11) {
  greet = 'Good afternoon!Iam Joseph Hughes A self taught web designer';
} else if (time >= 0) {
  greet = 'Good morning! Iam Joseph Hughes A self taught web designer';
} else {
  greet = 'yo shits broken yo!';
}

var show = document.getElementById('message');
show.textContent = greet;

var show = document.getElementById('message');
show.textContent = greet;
const divs = document.querySelectorAll(".back-chang");
const toolbar = document.querySelector(".toolbar");
const backDrop = document.querySelector("#back-drop");

function changeBG(div) {
  const img = div.target.src;
  backDrop.style.background = "url('" + img + "')";
  backDrop.style.backgroundRepeat = "no-repeat";
  backDrop.style.backgroundSize = "100% 100%"
  toolbar.classList.add("active")
}

divs.forEach((i) => {
  i.addEventListener("mousedown", changeBG)
});


var spanWidth = $('#text span').width();
$('#text').animate( { width: spanWidth }, 3000 );



