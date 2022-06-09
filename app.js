let hr = document.querySelector("#hr");
let mn = document.querySelector("#mn");
let sc = document.querySelector("#sc");

const clock = () => {
  let day = new Date();
  let hh = day.getHours() * 30;
  let mm = day.getMinutes() * 6;
  let ss = day.getSeconds() * 6;

  //prettier-ignore
  hr.style.transform = `rotateZ(${hh + (mm/12)}deg)`;

  mn.style.transform = `rotateZ(${mm}deg)`;
  sc.style.transform = `rotateZ(${ss}deg)`;

  //Digital Clock counter

  let hours = document.querySelector("#hours");
  let minutes = document.querySelector("#minutes");
  let seconds = document.querySelector("#seconds");
  let ampm = document.querySelector("#ampm");

  let h = day.getHours();
  let m = day.getMinutes();
  let s = day.getSeconds();

  let am = h >= 12 ? "PM" : "AM";

  //convert to 12h format
  if (h > 12) {
    h = h - 12;
  }

  //display "0" in front of single digits
  if (h < 10) {
    h = "0" + h;
  }
  if (m < 10) {
    m = "0" + m;
  }
  if (s < 10) {
    s = "0" + s;
  }

  hours.innerHTML = h;
  minutes.innerHTML = m;
  seconds.innerHTML = s;
  ampm.innerHTML = am;
};

setInterval(clock, 1000);
