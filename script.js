const commentary = [
  "The user clicked the door. Was this the correct choice?",
  "Ah, yes. Another tactic. Another illusion of control.",
  "The end is never the end is never the end...",
  "You thought this page would help. Perhaps it will. Perhaps it won’t."
];

const tactics = {
  "Dancing": "Works for both over and understimulation; put on a song you like (rec: Aphex Twin) and just dance to it till you feel better.",
  "Shaking": "Lay down on the bed with your legs halfway off it, then start shaking your legs up and down. The rhythmic movement can help release tension.",
  "Drawing Vent Art": "Just get anything that you can draw on and draw whatever you can to take the energy out, no matter if it's good or not."
};

function randomCommentary() {
  const msg = commentary[Math.floor(Math.random() * commentary.length)];
  document.getElementById("narrator").innerText = msg;
}

document.querySelectorAll(".door").forEach(door => {
  door.addEventListener("click", () => {
    const roomName = door.dataset.room;
    const roomBox = document.getElementById("room-content");

    // Insert tactic content + close button
    roomBox.innerHTML = `
      <h2>${roomName}</h2>
      <p>${tactics[roomName]}</p>
      <button id="close-room">Close</button>
    `;
    roomBox.style.display = "inline-block";

    // Add event listener for close button
    document.getElementById("close-room").addEventListener("click", () => {
      roomBox.style.display = "none";
      roomBox.innerHTML = ""; // clear content
    });

    randomCommentary();
  });
});

// Show a random narrator line on first load
window.onload = randomCommentary;
