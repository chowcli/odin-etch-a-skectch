const gridContainer = document.querySelector(".grid-container");
const rangeSlider = document.getElementById("rangeSlider");
const clearBtn = document.getElementById("clearBtn");

function buildGrid(numSquare) {
  let squareSize = document.querySelector(".grid-container").clientWidth / numSquare;

  for (let i = 0; i < numSquare ** 2; i++) {
    let square = document.createElement("div");
    square.classList.add("square");
    square.style.width = squareSize + "px";
    square.style.height = squareSize + "px";
    gridContainer.appendChild(square);
  }
}

buildGrid(rangeSlider.value);

rangeSlider.addEventListener("input", updateSliderValue);

function updateSliderValue() {
  // rangeSlider trigger the 'input' event so 'this' is set to the element that triggered it
  document.getElementById("rangeValue").textContent = this.value;
  clearContainer();
  buildGrid(this.value);
}

// only use for changing number of grid squares
function clearContainer() {
  gridContainer.innerHTML = "";
}

function changeGridColors(event) {
  if (event.target.classList.contains("square")) {
    event.target.style.backgroundColor = "black";
  }
}

function removeContainerColor() {
  let square = document.querySelectorAll(".square");
  square.forEach(square => {
    square.style.backgroundColor = "white";
  });
}

gridContainer.addEventListener("mouseover", changeGridColors);

clearBtn.addEventListener("click", removeContainerColor);
