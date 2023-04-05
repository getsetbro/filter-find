let hue = "0deg";
let bri = "1";

function hueFunction(val) {
  hue = val + "deg";
  setIamageStyle();
}

function brightFunction(val) {
  bri = val / 100 + "";
  setIamageStyle();
}

function setIamageStyle() {
  document
    .getElementById("lgImage")
    .setAttribute(
      "style",
      "filter:hue-rotate(" + hue + ") brightness(" + bri + ")"
    );
}
(() => {
  setIamageStyle();
})();
