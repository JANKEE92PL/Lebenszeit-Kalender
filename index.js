const weeks = Array.from(Array(52).keys());
// const weekBlock = weeks / 13;
// let alter = prompt("gebe dein Alter ein");

let alter = 18;

const weeksRow = document.querySelector(".row");

const button = document.querySelector(".button");

console.log(weeks);
console.log(alter);
console.log(weeksRow);

const createWeek = () => {
  weeks.forEach((week) => {
    let td = document.createElement("td");
    let input = document.createElement("input");
    input.setAttribute("type", "checkbox");
    drawWeeks(td, input);
  });
};

const drawWeeks = (parent, child) => {
  weeksRow.appendChild(parent);
  parent.appendChild(child);
};

button.addEventListener("click", () => {
  createWeek();
});
