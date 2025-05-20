function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const main = () => {
  const controls = document.querySelector("#controls");
  const input = controls.querySelector("input");
  const createBtn = controls.querySelector("[data-create]");
  const destroyBtn = controls.querySelector("[data-destroy]");
  const boxesContainer = document.getElementById("boxes-container");
  const boxes = document.getElementById("boxes");

  boxesContainer.style.display = "none";

  const createBoxes = (amount) => {
    boxes.innerHTML = "";

    let boxesHTML = "";

    for (let i = 0; i < amount; i++) {
      const size = 30 + i * 10;
      const color = getRandomHexColor();

      boxesHTML += `<div style="width:${size}px; height:${size}px; background-color:${color}; border-radius:4px; margin:5px;"></div>`;
    }

    boxes.innerHTML = boxesHTML;

    boxesContainer.style.display = "block";
    boxesContainer.classList.add("active");
  };

  createBtn.addEventListener("click", () => {
    const amount = Number(input.value);

    if (amount < 1 || amount > 100) {
      alert("Please enter a number between 1 and 100");
      return;
    }

    destroyBoxes();
    createBoxes(amount);
    input.value = "";
  });

  const destroyBoxes = () => {
    boxes.innerHTML = "";

    boxesContainer.style.display = "none";
    boxesContainer.classList.remove("active");
  };
  destroyBtn.addEventListener("click", destroyBoxes);
};

document.addEventListener("DOMContentLoaded", main);
