document.addEventListener("DOMContentLoaded", function () {
    const snowflakesContainer = document.querySelector('.snowflakes');

    function createSnowflake() {
        const snowflake = document.createElement('div');
        snowflake.classList.add('snowflake');
        snowflake.style.left = `${Math.random() * window.innerWidth}px`; // Random left position
        snowflake.style.animationDuration = `${Math.random() * 3 + 2}s`; // Random duration
        snowflake.style.opacity = Math.random(); // Random opacity
        snowflakesContainer.appendChild(snowflake);
        setTimeout(() => {
            snowflake.remove(); // Remove snowflake after animation ends
        }, 5000); // Adjust duration to match animation duration
    }

    function generateSnowflakes() {
        setInterval(createSnowflake, 300); // Generate snowflakes every 300 milliseconds
    }

    generateSnowflakes();
});
