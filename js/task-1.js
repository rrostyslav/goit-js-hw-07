const main = () => {
  const categoryItems = document.querySelectorAll("#categories .item");

  console.log(`Number of categories: ${categoryItems.length}`);

  categoryItems.forEach((item) => {
    const categoryTitle = item.querySelector("h2").textContent;
    const categoryElements = item.querySelectorAll("ul > li");

    console.log(`Category: ${categoryTitle}`);
    console.log(`Elements: ${categoryElements.length}`);
  });
};

document.addEventListener("DOMContentLoaded", main);
