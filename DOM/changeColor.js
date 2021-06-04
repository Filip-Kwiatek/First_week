function Color() {
  if ((document.getElementById("blue").style.color = "blue")) {
    document.getElementById("square").style.backgroundColor = "blue";
  } else if ((document.getElementById("red").style.color = "red")) {
    document.getElementById("square").style.backgroundColor = "red";
  } else if ((document.getElementById("yellow").style.color = "yellow")) {
    document.getElementById("square").style.backgroundColor = "yellow";
  } else if ((document.getElementById("green").style.color = "green")) {
    document.getElementById("square").style.backgroundColor = "green";
  } else {
    document.getElementById("square").style.color = "black";
  }
}
