function showOverlay(card) {
    const overlay = card.querySelector('.overlay');
    overlay.classList.add('show');
}

function hideOverlay(card) {
    const overlay = card.querySelector('.overlay');
    setTimeout(() => {
        if (!overlay.matches(':hover')) {
            overlay.classList.remove('show');
        }
    }, 200);
}

function keepOverlayVisible(overlay) {
    overlay.classList.add('show');
}