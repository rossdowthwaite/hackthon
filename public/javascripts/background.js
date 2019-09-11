const CaseID = "Case";
let bgIndex = 0;
const bgClasses = [
  "screen-wrapper--bg-0",
  "screen-wrapper--bg-1",
  "screen-wrapper--bg-2",
  "screen-wrapper--bg-3",
  "screen-wrapper--bg-4",
  "screen-wrapper--bg-5",
  "screen-wrapper--bg-6",
];

function updateBackground() {
  const element = document.getElementById(CaseID);
  bgIndex++;
  if (bgIndex > bgClasses.length) bgIndex = 0;
  setBg(element, bgClasses[bgIndex]);
}

function setBg(element, imageClass) {
  element.classList.remove("screen-wrapper--bg-0");
  element.classList.remove("screen-wrapper--bg-5");
  element.classList.remove("screen-wrapper--bg-6");
  element.classList.remove("screen-wrapper--bg-1");
  element.classList.remove("screen-wrapper--bg-2");
  element.classList.remove("screen-wrapper--bg-3");
  element.classList.remove("screen-wrapper--bg-4");
  element.classList.add(imageClass);
}
