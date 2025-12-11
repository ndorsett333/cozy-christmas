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

// snowflakes
const maxSnowflakes = 20;
let snowflakeCount = 0;

function createSnowflake() {
    if (snowflakeCount >= maxSnowflakes) return;
    
    const snowflake = document.createElement('div');
    snowflake.className = 'snowflake';
    snowflake.textContent = '❄️';
    
    // horizontal
    const randomX = Math.random() * 470;
    snowflake.style.left = randomX + 'px';
    
    // disappear point
    const randomDisappear = 250 + Math.random() * 280;
    snowflake.style.setProperty('--fall-end', randomDisappear + 'px');
    
    // fall duration
    // const fallDuration = 3 + Math.random() * 5;
    const fallDuration = 7;
    snowflake.style.animationDuration = fallDuration + 's';
    
    christmasBox.appendChild(snowflake);
    snowflakeCount++;
    
    // remove snowflake
    snowflake.addEventListener('animationend', () => {
        snowflake.remove();
        snowflakeCount--;
        createSnowflake(); // create new
    });
}

function startSnowfall() {
    // innit snowflakes
    for (let i = 0; i < maxSnowflakes; i++) {
        setTimeout(() => createSnowflake(), i * 1000); // stagger
    }
}

function startChristmasAnimations() {
    console.log('animations started!');
    startSnowfall();
}