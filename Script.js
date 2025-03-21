// Live Clock
function updateClock() {
    const clock = document.getElementById('liveClock');
    const now = new Date();
    const timeString = now.toLocaleTimeString();
    clock.textContent = `Live Time: ${timeString}`;
}
setInterval(updateClock, 1000);

// Profile Button Action
const profileButton = document.getElementById('profileButton');
profileButton.addEventListener('click', function() {
    alert('Chat coming soon!');
});

// Finalized Button Action
const finalizedButton = document.getElementById('finalizedButton');
const scriptSection = document.getElementById('scriptSection');

finalizedButton.addEventListener('click', function() {
    scriptSection.style.display = scriptSection.style.display === 'block' ? 'none' : 'block';
});
