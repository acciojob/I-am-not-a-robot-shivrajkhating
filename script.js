//your code here
// IMAGE CLASSES
let classes = ["img1", "img2", "img3", "img4", "img5"];

// PICK RANDOM IMAGE TO DUPLICATE
let duplicate = classes[Math.floor(Math.random() * classes.length)];

// FINAL 6 IMAGES (5 unique + 1 duplicate)
let finalImages = [...classes, duplicate];

// SHUFFLE
finalImages.sort(() => Math.random() - 0.5);

const container = document.getElementById("image-container");
const resetBtn = document.getElementById("reset");
const verifyBtn = document.getElementById("verify");
const para = document.getElementById("para");

// TRACKING
let selectedImgs = [];
let selectedElements = [];

// LOAD IMAGES ON PAGE
finalImages.forEach((cls, index) => {
  let img = document.createElement("img");
  img.classList.add(cls);

  img.addEventListener("click", function () {
    handleClick(this, cls);
  });

  container.appendChild(img);
});

// HANDLE CLICK
function handleClick(imgElement, imgClass) {
  resetBtn.style.display = "inline-block";

  // Prevent clicking the same image twice
  if (selectedElements.includes(imgElement)) return;

  // Prevent more than 2 selections
  if (selectedElements.length === 2) return;

  imgElement.classList.add("selected");
  selectedElements.push(imgElement);
  selectedImgs.push(imgClass);

  // Show verify only after 2 clicks
  if (selectedElements.length === 2) {
    verifyBtn.style.display = "inline-block";
  }
}

// RESET BUTTON
resetBtn.addEventListener("click", () => {
  selectedElements.forEach(img => img.classList.remove("selected"));
  selectedElements = [];
  selectedImgs = [];

  verifyBtn.style.display = "none";
  resetBtn.style.display = "none";
  para.textContent = "";
});

// VERIFY BUTTON
verifyBtn.addEventListener("click", () => {
  verifyBtn.style.display = "none";

  if (selectedImgs[0] === selectedImgs[1]) {
    para.textContent = "You are a human. Congratulations!";
    para.style.color = "green";
  } else {
    para.textContent = "We can't verify you as a human. You selected the non-identical tiles.";
    para.style.color = "red";
  }
});
