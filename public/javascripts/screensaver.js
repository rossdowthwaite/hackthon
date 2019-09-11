const screenSaverButtonId = "ScreenSaverButton";
const LiveReading = "LiveReading";
const screenSaverId = "ScreenSaver";
let toggle = false;

function toggleScreenSaver() {
  const screenSaver = document.getElementById(screenSaverId);
  const liveReading = document.getElementById(LiveReading);

  toggle = !toggle;
  if (toggle) {
    screenSaverOn(screenSaver, liveReading);
  } else {
    screenSaverOff(screenSaver, liveReading);
  }
}

function screenSaverOn(screenSaver, liveReading) {
  screenSaver.classList.add("screen-saver--show");
  screenSaver.classList.remove("screen-saver--hide");
  liveReading.classList.add("live-reading--saver");
}

function screenSaverOff(screenSaver, liveReading) {
  screenSaver.classList.add("screen-saver--hide");
  screenSaver.classList.remove("screen-saver--show");
  liveReading.classList.remove("live-reading--saver");
}
