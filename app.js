let hue = "0deg";
let bri = "100%";
let sat = "100%";
let con = "100%";
let inv = "0";
let lgImage = document.getElementById("lgImage");

function hueFunction(val) {
  hue = val + "deg";
  setIamageStyle();
}
function brightFunction(val) {
  bri = val + "%";
  setIamageStyle();
}
function satFunction(val) {
  sat = val + "%";
  setIamageStyle();
}
function conFunction(val) {
  con = val + "%";
  setIamageStyle();
}
function invFunction(val) {
  inv = val;
  setIamageStyle();
}
function setIamageStyle() {
  let style = "";
  let filter = "filter:";
  if (hue !== "0deg") {
    filter = filter + ` hue-rotate(${hue})`;
  }
  if (bri !== "100%") {
    filter = filter + ` brightness(${bri})`;
  }
  if (sat !== "100%") {
    filter = filter + ` saturate(${sat})`;
  }
  if (con !== "100%") {
    filter = filter + ` contrast(${con})`;
  }
  filter = filter + ` invert(${inv})`;
  style = filter;
  lgImage.setAttribute("style", style);
}
