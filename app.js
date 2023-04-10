const box1 = document.querySelector("#box1");
const bri_val = document.querySelector("#bri_val");
const changed = document.querySelector("#changed");
const code = document.querySelector("#code");
const color_picker1 = document.querySelector("#color_picker1");
const color_picker2 = document.querySelector("#color_picker2");
const con_val = document.querySelector("#con_val");
const hue_val = document.querySelector("#hue_val");
const inp_bri = document.querySelector("#inp_bri");
const inp_con = document.querySelector("#inp_con");
const inp_hue = document.querySelector("#inp_hue");
const inp_inv = document.querySelector("#inp_inv");
const inp_sat = document.querySelector("#inp_sat");
const sat_val = document.querySelector("#sat_val");
const btn_reset_hue = document.querySelector("#btn_reset_hue");

let bri = "100%";
let con = "100%";
let hue = "0deg";
let inv = "0";
let sat = "100%";

const colorPicked1 = (e) => {
  box0.style.backgroundColor = e.target.value;
};
color_picker1.addEventListener("input", colorPicked1, false);
const colorPicked2 = (e) => {
  box1.style.backgroundColor = e.target.value;
};
color_picker2.addEventListener("input", colorPicked2, false);

const setImgStyle = () => {
  let style = "";
  let filter = "filter:";
  if (bri !== "100%") {
    filter += ` brightness(${bri})`;
  }
  if (con !== "100%") {
    filter += ` contrast(${con})`;
  }
  if (hue !== "0deg") {
    filter += ` hue-rotate(${hue})`;
  }
  if (inv !== "0") {
    filter += ` invert(${inv})`;
  }
  if (sat !== "100%") {
    filter += ` saturate(${sat})`;
  }
  style = filter;
  changed.setAttribute("style", style);
  code.innerHTML = style;
};

const briFn = (e) => {
  bri = e.target.value + "%";
  bri_val.innerHTML = bri;
  setImgStyle();
};
const conFn = (e) => {
  con = e.target.value + "%";
  con_val.innerHTML = con;
  setImgStyle();
};
const hueFn = (e) => {
  hue = e.target.value + "deg";
  hue_val.innerHTML = hue;
  setImgStyle();
};
const invFn = (e) => {
  inv = e.target.value;
  setImgStyle();
};
const satFn = (e) => {
  sat = e.target.value + "%";
  sat_val.innerHTML = sat;
  setImgStyle();
};

inp_bri.addEventListener("input", briFn, false);
inp_con.addEventListener("input", conFn, false);
inp_hue.addEventListener("input", hueFn, false);
inp_inv.addEventListener("input", invFn, false);
inp_sat.addEventListener("input", satFn, false);

const briReset = (e) => {
  inp_bri.value = "100";
  briFn({ target: { value: "100" } });
};
btn_reset_bri.addEventListener("click", briReset, false);
const conReset = (e) => {
  inp_con.value = "100";
  conFn({ target: { value: "100" } });
};
btn_reset_con.addEventListener("click", conReset, false);
const hueReset = (e) => {
  inp_hue.value = "0";
  hueFn({ target: { value: "0" } });
};
btn_reset_hue.addEventListener("click", hueReset, false);
const satReset = (e) => {
  inp_sat.value = "100";
  satFn({ target: { value: "100" } });
};
btn_reset_sat.addEventListener("click", satReset, false);
