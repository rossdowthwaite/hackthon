const socket = io();
const timeID = "Time";
const LiveValueID = "LiveValue";
const HomeScreen = "HomeScreen";
let time;
let lightConfig = [];
let currentTime = "00:00";

// Ranges
const lowestLevel = 59;
const lowLevel = 159;
const midLevel = 259;
const highLevel = 359;
const highestLevel = 600;

socket.on("dataEvent", function(data) {
  document.getElementById(LiveValueID).innerHTML = data[0].value;
  updateTime(data[0].time);
  updateScreenColor(data[0].value);
  updateLightsColor(data);
  setNextPeriod();
});

function updateTime(time) {
  const currentMnt = "09-09-2019Z" + currentTime + ":00";
  document.getElementById(timeID).innerHTML = moment(currentMnt).format(
    "h:mm A"
  );
  currentTime = time;
}

function updateScreenColor(data) {
  const color = chooseColor(data);
  const screen = document.getElementById(HomeScreen);
  setColor(screen, color);
}

function setColor(element, colorClass) {
  element.classList.remove("light-bar__light--green");
  element.classList.remove("light-bar__light--amber");
  element.classList.remove("light-bar__light--red");
  element.classList.remove("light-bar__light--yellow");
  element.classList.remove("light-bar__light--light-green");
  element.classList.add(colorClass);
}

function updateLightsColor(data) {
  lightConfig = [];
  const values = data.map(d => d.value);
  values.forEach((value, index) => {
    const colorClass = chooseColor(value);
    if (index < 12) {
      const element = document.getElementById(`Light_${index}`);
      setColor(element, colorClass);
    }
    lightConfig.push(colorClass);
  });
}

function chooseColor(value) {
  let colorClass = "light-bar__light--green";

  if (value <= lowestLevel) {
    colorClass = "light-bar__light--green";
  }
  if (value > lowestLevel && value <= lowLevel) {
    colorClass = "light-bar__light--light-green";
  }
  if (value > lowLevel && value <= midLevel) {
    colorClass = "light-bar__light--yellow";
  }
  if (value > midLevel && value <= highLevel) {
    colorClass = "light-bar__light--amber";
  }
  if (value > highLevel) {
    colorClass = "light-bar__light--red";
  }
  return colorClass;
}

function setNextPeriod() {
  const nextPhase = {
    start: "",
    end: "",
    color: "",
  };
  const current = lightConfig[0];
  let foundStart = false;
  let foundEnd = false;
  for (let index = 0; index < lightConfig.length; index++) {
    const currentMnt = "09-09-2019Z" + currentTime + ":00";
    // Find the start time
    if (lightConfig[index] !== current && !foundStart) {
      foundStart = true;
      // Set the color
      nextPhase.color = lightConfig[index];

      // Set the start time
      let startMins = index * 30;
      nextPhase.start = moment(currentMnt)
        .clone()
        .add(startMins, "m")
        .format("h:mm A");
    }

    // Find the end time
    if (
      lightConfig[index + 1] !== lightConfig[index] &&
      foundStart &&
      !foundEnd
    ) {
      foundEnd = true;
      const endMins = (+index + 1) * 30;
      nextPhase.end = moment(currentMnt)
        .clone()
        .add(endMins, "m")
        .format("h:mm A");
    }
  }

  document.getElementById("NextStart").innerHTML = nextPhase.start;
  document.getElementById("NextEnd").innerHTML = nextPhase.end;

  const elementColor = document.getElementById("NextPhaseColor");
  setColor(elementColor, nextPhase.color);
}
