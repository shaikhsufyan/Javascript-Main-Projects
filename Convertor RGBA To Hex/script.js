const firstInpt = document.getElementById("first-input");
const secInpt = document.getElementById("sec-input");
const thirInpt = document.getElementById("th-input");
const button = document.getElementById("btn");

//   WE FIND RGB TO HEX

function hexFindBtn() {
  let r = rgb(firstInpt.value * 1);

  let g = rgb(secInpt.value * 1);
  let b = rgb(thirInpt.value * 1);
  console.log("#" + r + g + b);
  let convertValue = "#" + r + g + b;
  let upper = convertValue.toUpperCase();
  console.log(upper);
  function rgb(rgb) {
    let hex = Number(rgb).toString(16);
    return hex;
  }

  document.getElementById("convert").innerHTML = upper;
}

//  WE FIND HEX TO RGB VALUE

const rgbInput = document.getElementById("rgb-input");

function rgbFindBtn() {
  const color = rgbInput.value;
  let x = color[1] + color[2];
  let y = color[3] + color[4];
  let z = color[5] + color[6];

  let r = parseInt(x, 16);
  console.log(r);
  let g = parseInt(y, 16);
  console.log(g);
  let b = parseInt(z, 16);
  console.log(b);

  document.getElementById("rgb").innerHTML =
    "(" + r + "," + g + "," + b + "" + ")";
}

// RANGE SELECTOR RGB

function Range() {
  let Red = document.getElementById("red").value;
  let Blue = document.getElementById("blue").value;
  let Green = document.getElementById("green").value;

  let colors = "rgb(" + Red + "," + Blue + "," + Green + ")";
  document.getElementById("main-box").value = colors;
  //  document.body.style.backgroundColor=colors;
}
document.getElementById("red").addEventListener("input", Range);
document.getElementById("green").addEventListener("input", Range);
document.getElementById("blue").addEventListener("input", Range);

//   COLOR BY  CODE

let showButton = document.getElementById("show-btn");
showButton.addEventListener("click", showHexColor);

function showHexColor() {
  let hexCode = document.getElementById("hex-code").value;

  if (hexCode.length == 7) {
    document.getElementById("hex-output").style.backgroundColor = hexCode;

    console.log(hexCode.length);
  } else {
    alert("Please Enter 6 number");
  }
}

// COLOR BY RGB

function ColorByRGB() {
  let R = document.getElementById("redV").value;
  let G = document.getElementById("greenV").value;
  let B = document.getElementById("blueV").value;

  let color = "rgb" + "(" + R + "," + G + "," + B + ")";
  console.log(color);
  document.getElementById("rgb-value").style.backgroundColor = color;
}

// WE FIND RANDOM COLOR CODE
let btn = document.getElementById("random");

function randomPickerBtn() {
  let value = "0123456789ABCDEF";
  let cons = "#";
  for (let i = 0; i < 6; i++) {
    cons = cons + value[Math.floor(Math.random() * 16)];
  }
  console.log(cons);
  document.getElementById("random-input").value = cons;
  document.getElementById("random-input").style.backgroundColor = cons;
}
btn.addEventListener("click", randomPickerBtn);
