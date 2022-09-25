const D = 20;

const btn = document.getElementById("no");
btn.addEventListener("mouseover", teleport);

const random = (l, h) => l + Math.round(Math.random() * (h - l));

const getNew = (wW, eW, pos) => {
  const newPos = eW + Math.round(Math.random() * (wW - eW - eW))
  if (newPos > pos) return Math.max(pos + D, newPos);
  return Math.min(pos - D, newPos);
};

let clicksLeft = random(3, 10);

function teleport() {
  const { top, left, width, height } = btn.getBoundingClientRect();
  const newLeft = getNew(window.innerWidth - D, width, left);
  const newTop = random(window.innerHeight - D, height, top);
  
  delete btn.style.transform;
  btn.style.left = newLeft + "px";
  btn.style.top = newTop + "px";
  --clicksLeft;
  if (clicksLeft === 0) {
    btn.removeEventListener("mouseover", teleport);
    btn.addEventListener("click", loser);
    btn.innerHTML = "Yes!";
  }
}

function loser() {
  const h1 = document.getElementById("h");
  alert("I KNOW!!!!! HAHAHAHHA");
  setTimeout(() => window.location = "https://youtu.be/dQw4w9WgXcQ", 1300);
}
