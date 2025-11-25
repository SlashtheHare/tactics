const commentary = [
  "The user clicked the door. Was this the correct choice?",
  "Ah, yes. Another tactic. Another illusion of control.",
  "The end is never the end is never the end...",
  "You thought this page would help. Perhaps it will. Perhaps it won’t."
];

const tactics = {
  "Noise-Cancelling Headphones": "When overstimulated, put these on to reduce sensory input.",
  "Deep Breathing": "Slow, deliberate breaths to calm the nervous system.",
  "Movement Break": "Stretch, walk, or pace to release energy and reset focus."
};

function randomCommentary() {
  const msg = commentary[Math.floor(Math.random() * commentary.length)];
  document.getElementById("narrator").innerText = msg;
}

document.querySelectorAll(".door").forEach(door => {
  door.addEventListener("click", () => {
    const roomName = door.dataset.room;
    document.getElementById("room-content").innerHTML = `
      <h2>${roomName}</h2>
      <p>${tactics[roomName]}</p>
    `;
    randomCommentary();
  });
});

// Show a random narrator line on first load
window.onload = randomCommentary;
