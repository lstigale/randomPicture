function block() {
 var inputNum = document.getElementById("userNumber").value;
 var divWidth = 300 / inputNum;
 var divHeight = 300 / inputNum;
 document.getElementById("inputValue").innerHTML = "(Currently " + inputNum + " by " + inputNum + ")";

 for (var i = 0, i < (inputNum * inputNum), i++) {
     inputNum[i] = document.createElement('div');
     inputNum[i].style.width = divWidth;
     inputNum[i].style.width = divHeight;
     inputNum[i].className = 'box';
     inputNum[i].id = (i + 1);
     mainContainer.appendChild(inputNum[i]);
 }
}

function picture() {
  var deg =  Math.floor( Math.random() * 360); /*360*/
  var r = Math.floor( Math.random() * 256);
  var g = Math.floor( Math.random() * 256);
  var b = Math.floor( Math.random() * 256);
  var r2 = Math.floor( Math.random() * 256);
  var g2 = Math.floor( Math.random() * 256);
  var b2 = Math.floor( Math.random() * 256);
  console.log(deg, r,g,b, r2,g2,b2);
 document.body.style.background = "linear-gradient(" + deg + "deg, rgb("+ r + ", " + g + ", " + b + "), rgb("+ r2 + ", " + g2 + ", " + b2 + "))";
 document.getElementById('colorNum').innerHTML = "linear-gradient(" + deg + "deg, rgb(" + r + ", " + g + ", " + b + "), rgb("+ r2 + ", " + g2 + ", " + b2 + "));";
 }


  for (i = 0; i < blocks.length; i++) {
    var roll = Math.floor(Math.random() * 2);
    if (roll == 1) {
      document.getElementsByClassName(blocks[i])[0].style.backgroundColor = "#00000000";
      document.getElementsByClassName(blocks[i])[1].style.backgroundColor = "#00000000";
    } else {
      document.getElementsByClassName(blocks[i])[0].style.backgroundColor = "#00000050";
      document.getElementsByClassName(blocks[i])[1].style.backgroundColor = "#00000050";
    }
  }
}

function save() {


}
