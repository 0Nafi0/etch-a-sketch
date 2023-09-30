let grid = 16;
const parentContainer = document.querySelector(".parent");
const body = document.querySelector("body");
function createNewDiv() {
    const newDiv = document.createElement("div");
    const side = (640 / grid).toString() + "px";
    newDiv.style.width = side;
    newDiv.style.height = side;
    newDiv.addEventListener("mouseover", (event) => {
        if (event.buttons > 0)
        newDiv.style.background = "#001524";
    })
    parentContainer.appendChild(newDiv);
}

function divCreation(grid) {
    for (let i = 0; i < (grid ** 2); i++)
    {
        createNewDiv();
    }
}

divCreation(grid);

const gridButton = document.querySelector("button");

gridButton.addEventListener("click", () => {
    grid = parseInt(prompt("Enter the number of grid you want on each row: "));
    const childDivs = document.querySelectorAll(".parent > div");
    childDivs.forEach((childDiv) => {
        parentContainer.removeChild(childDiv);
    })
    divCreation(grid);
})