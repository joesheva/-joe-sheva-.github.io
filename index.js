//Get elements from the DOM 
const slider = document.querySelector(".circular-slider");
const image = document.querySelector(".slider .img");
const indicator = document.querySelector(".indicator");
const menuItems = document.querySelectorAll(".menu span");
const descriptions = document.querySelectorAll(".text");

//Rotation value for each menu item
const rotationValues = [-65, -40, -20, 0, 20, 40, 65];



//image names to add for each menu item
const images = [
    'taskcopy', 'kitcopy', "reciepecopy", "ordercopy","Untitled-1", "Untitled-5copy", "budgetcopy"
];

//current menu item index
let itemIndex = 2;

//function gfor rotating the slider 
function rotate(rotationValue) {
    /*rotate the image using the value we 
    pass when this function is called */
    image.style.transform = `rotate(${rotationValue}deg)`;
    /* rotate the indicatorusing the value we pass when this fucntion is called */
    indicator.style.transform = `translate(-50%, -50%) rotate(${rotationValue}deg)`;
}

//loop through each meny item
menuItems.forEach((menuItem, i) => {
    //add a click event to each menu item
    menuItem.addEventListener("click", () => {
        //add the image url to the image for each menu tiem
        image.style.backgroundImage ="url('" + img + "')";
        //add the colors for each menu item

        /*create the short counter-rotation
        before the actual rotation*/
        /*if the menu item you click has a 
        greater index value than the previous one */
        if(i > itemIndex) {
            //make the counter-rotation counter-clockwise
            rotate(rotationValues[itemIndex] - 50);
        } else if (i < itemIndex) {
            //make the counter-rotation clockwise
            rotate(rotationValues[itemIndex] + 50);
        } else {
            return "";
        }

        //wait for the counter-rotation to finish 
        setTimeout(() => {
            //rotate using the rotationvalues array
            //assign each array value to the corresspnding menu item
            rotate(rotationValues[i]);
        }, 300);

        //hide all descritptions
        descriptions.forEach(text => {
            text.style.display = "none";
        });
        //show only the corresponding descrption
        descriptions[i].style.display = "block";
        //update the itemindex variable to the current menu item index
        itemIndex = i;
    });
});
window.onscroll = function() {scrollFunction()};





function scrollFunction() {
  if (document.body.scrollTop > 105 || document.documentElement.scrollTop > 105) {
    document.getElementById("header").style.backgroundColor = "";
    document.getElementById("navbar").style.padding = "20px 10px";
  
    document.getElementById("text").style.fontSize = "1rem";
    document.getElementById("text1").style.fontSize = "1rem";
    document.getElementById("text2").style.fontSize = "1rem";
    document.getElementById("text3").style.fontSize = "1rem";
    document.getElementById("text").style.color = "#0f0f10";
    document.getElementById("text1").style.color = "#0f0f10";
    document.getElementById("text2").style.color = "#0f0f10";
    document.getElementById("text3").style.color = "#0f0f10";
  } else {
    document.getElementById("navbar").style.padding = "50px 10px";
    document.getElementById("text").style.color = "#f6ecde";
    document.getElementById("text1").style.color = "#f6ecde";
    document.getElementById("text2").style.color = "#f6ecde";
    document.getElementById("text3").style.color = "#f6ecde";
    document.getElementById("text").style.fontSize = "1rem";
    document.getElementById("text1").style.fontSize = "1rem";
    document.getElementById("text2").style.fontSize = "1rem";
    document.getElementById("text3").style.fontSize = "1rem";
    document.getElementById("header").style.backgroundColor = "#0f0f10";
  }
}


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
