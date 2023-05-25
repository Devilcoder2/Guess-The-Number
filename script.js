console.log(document.querySelector(".message").textContent);

const x = Math.floor(Math.random() * 20) + 1;

if (!localStorage.getItem("highScore")) {
  localStorage.setItem("highScore", 0);
}

document.querySelector(
  ".highscore"
).textContent = `Highest Score: ${localStorage.getItem("highScore")}`;

let z = 20;
document.querySelector(".check").addEventListener("click", () => {
  const y = Number(document.querySelector(".guess").value);
  if (!y) {
    document.querySelector(".message").textContent = "No number";
    return;
  }

  if (x === y) {
    document.querySelector(".message").textContent = "You won";
    document.querySelector(".target").textContent = x;
    localStorage.setItem("highScore", z);
    document.querySelector("body").style.backgroundColor = "#eee";
    document.querySelector(".para").style.color = "black";
    document.querySelector(".scores").style.color = "black";
    document.querySelector(
      ".highscore"
    ).textContent = `Highest Score: ${localStorage.getItem("highScore")}`;
  } else if (x > y) {
    document.querySelector(".message").textContent = "Too low";
    z = z - 1;
    document.querySelector(".score").textContent = `Score: ${z}`;
  } else {
    document.querySelector(".message").textContent = "Too high";
    z = z - 1;
    document.querySelector(".score").textContent = `Score: ${z}`;
  }
});

document.querySelector(".again").addEventListener("click", () => {
  location.reload();
});
