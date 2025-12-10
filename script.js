const christmasBox = document.getElementById('christmasBox');
const christmasMusic = document.getElementById('christmasMusic');
const overlay = document.getElementById('overlay');

let musicStarted = false;

christmasBox.addEventListener('click', function() {
    if (!musicStarted) {
        // hide overlay
        overlay.style.display = 'none';
        
        // start music
        christmasMusic.play();
        musicStarted = true;
        
        // add animations
        startChristmasAnimations();
    }
});

function startChristmasAnimations() {
    // animation code
    console.log('animations started!');
}