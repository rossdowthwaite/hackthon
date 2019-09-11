const frame = "Usage";
let toggleGrap = true;
console.log();

function toggleGraph() {
  console.log("toggleGraph");
  const element = document.getElementById(frame);
  toggleGrap = !toggleGrap;
  if (toggleGrap) {
    element.classList.remove("graph--graph");
    element.classList.add("graph--billing");
  } else {
    element.classList.add("graph--graph");
    element.classList.remove("graph--billing");
  }
}
