const weeks = Array.from(Array(52).keys());
let weekslived = [];
// let alter = prompt("gebe dein Alter ein");

let alter;
let blockRow = document.querySelector(".block-row")

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

let now = new Date()
let bd = new Date("1992-03-31")


/**
 * create a Row containing 13 X 4 Weeks Block
 */
const createYearBlockRow = () => {
    let faktor = 13 // 1 Year = 13 Weeks
    let blocks = (now.getFullYear() - bd.getFullYear()) * faktor
    let weeks = Math.round(blocks * 4)
    for (let i = 0; i < weeks; i++) {
        weekslived.push(i)
    }

    for (let i = 0; i < blocks; i++) {
        createBlock()
    }
    fillWeeks(blocks)
}

const fillWeeks = (blocks) => {
    let fields = document.querySelectorAll(".field")

    for (let i = 0; i <= blocks; i++) {

        weekslived.forEach(week => {
            fields[week].classList.add("filled")
        })
    }
};

createYearBlockRow()