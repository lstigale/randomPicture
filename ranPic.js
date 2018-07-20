 var blocks = [];
 var inputNum;

 function block() {
   inputNum = Math.floor(document.getElementById("userNumber").value);
   if (inputNum < 0) {
     document.getElementById("inputValue").innerHTML = "(Please choose a number 1 or higher!)";
   } else if (inputNum > 500) {
     document.getElementById("inputValue").innerHTML = "(Please choose a number less than 500!)";
   } else {
     document.getElementById("inputValue").innerHTML = "(Currently " + inputNum + " by " + inputNum + ")";
     var divWidth = (300 / inputNum);
     var divHeight = (300 / inputNum);
     var mainContainer = document.getElementById('bgColor');
     var divNum = [];

     var myNode = document.getElementById("bgColor");
     while (myNode.firstChild) {
       myNode.removeChild(myNode.firstChild);
       blocks = [];
     }

     for (var i = 0; i < (inputNum * inputNum); i++) {
       divNum[i] = document.createElement('div');
       divNum[i].style.width = divWidth + "px";
       divNum[i].style.height = divHeight + "px";
       divNum[i].className = 'block';
       divNum[i].id = (i + 1);
       mainContainer.appendChild(divNum[i]);
       blocks.push(i + 1);
     }
   }
 }

 function picture() {
   var deg = Math.floor(Math.random() * 360); /*360*/
   var r = Math.floor(Math.random() * 256);
   var g = Math.floor(Math.random() * 256);
   var b = Math.floor(Math.random() * 256);
   var r2 = Math.floor(Math.random() * 256);
   var g2 = Math.floor(Math.random() * 256);
   var b2 = Math.floor(Math.random() * 256);
   console.log(deg, r, g, b, r2, g2, b2);
   document.getElementById("fullBackground").style.background = "linear-gradient(" + deg + "deg, rgb(" + r + ", " + g + ", " + b + "), rgb(" + r2 + ", " + g2 + ", " + b2 + "))";
   document.getElementById("bgColor").style.background = "linear-gradient(" + deg + "deg, rgb(" + r2 + ", " + g2 + ", " + b2 + "), rgb(" + r + ", " + g + ", " + b + "))";

   var fullBlocks = blocks.length;
   var halfBlocks = blocks.length / 2;
   for (i = 0; i < halfBlocks; i++) {

     //This code calculates the new row so that the random blocks reflect.
     var roll = Math.floor(Math.random() * 2);
     var col = Math.floor((blocks[i] - 1) / inputNum);
     var row = (blocks[i] - 1) % inputNum;
     var newCol = inputNum - 1 - col;

     if (roll === 1) {
       document.getElementById(blocks[i]).style.backgroundColor = "#00000000";
       document.getElementById(blocks[(newCol * inputNum) + row]).style.backgroundColor = "#00000000";
     } else {
       document.getElementById(blocks[i]).style.backgroundColor = "#00000050";
       document.getElementById(blocks[(newCol * inputNum) + row]).style.backgroundColor = "#00000050";
     }
   }
   console.log(blocks)
 }
