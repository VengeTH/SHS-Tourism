function animationerz(url) {
    // Zoom in effect
    document.querySelector('.tourismLearnMore').style.transform = 'scale(1.2)';

    // Delay navigating to another page to allow time for the zoom effect
    setTimeout(function() {
        // Navigate to another page
        window.location.href = url; // Replace with your desired URL
    }, 300); // Adjust the delay (in milliseconds) to match the duration of the zoom effect
}