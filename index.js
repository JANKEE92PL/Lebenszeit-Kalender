const weeks = Array.from(Array(52).keys());
let weekslived = [];

let blockRow = document.querySelector(".block-row")

let lifetime = document.querySelector(".lifetime")
let lifetimeYears = document.querySelector(".years")
let lifetimeWeeks = document.querySelector(".weeks")
let lifetimeDays = document.querySelector(".days")

/**
 * create a block of 4 Weeks in a Single Iteration
 ** [1 Year contains 13 Blocks]
 */
const createBlock = () => {
    let div = document.createElement("DIV"); // 1x
    blockRow.insertAdjacentElement("beforeend", div) //1x
    div.classList.add("block"); //1x
    for (let i = 0; i < 4; i++) {
        let span = document.createElement("SPAN"); // 4x
        div.insertAdjacentElement("beforeend", span) //4x
        span.classList.add("field"); //4x
    }
}
// let alter = new Date("1999-03-31")
// let age = prompt("Gebe dein Alter ein >>YYYY-MM-DD<<");
const datepicker = document.getElementById("datepicker");
datepicker.addEventListener("change", (e) => {
    clearFields()
    const date = new Date(datepicker.value);
    console.info(date.getFullYear())
    createYearBlockRow(date)
    renderLifeTime()
})

const clearFields = () => {
    let targets = document.querySelectorAll(".block");
    targets.forEach((target) => {
        blockRow.removeChild(target)
    })
}


/**
 * create a Row containing 13 X 4 Weeks Block
 * @date picked date value from Datepicker
 */
const createYearBlockRow = (date) => {
    let faktor = 13 // 1 Year = 13 Weeks
    const now = new Date()
    let blocks = (now.getFullYear() - date.getFullYear()) * faktor
    let weeks = Math.round(blocks * 4)
    for (let i = 0; i < weeks; i++) {
        weekslived.push(i)
    }
    for (let i = 0; i < blocks; i++) {
        createBlock()
    }
    fillWeeks(blocks)
}
/**
 * fill all fields created from Funktion #createBlock with black color using css class ".filled"
 * @param 1 Block contains 4 Weeks
 */
const fillWeeks = (blocks) => {
    let fields = document.querySelectorAll(".field")
    for (let i = 0; i <= blocks; i++) {
        weekslived.forEach(week => {
            fields[week].classList.add("filled")
        })
    }
};


const renderLifeTime = () => {
    let years = calcLifeTime();
    lifetimeYears.textContent = years;
    lifetimeWeeks.textContent = Math.round( years *52)
    lifetimeDays.textContent =  Math.round( years *365)
}
const calcLifeTime = () => {
    let rowIndex = document.querySelectorAll(".block").length
    return rowIndex / 13
}
