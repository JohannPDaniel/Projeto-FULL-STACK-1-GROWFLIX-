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

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("topBtn").style.display = "block";
    } else {
        document.getElementById("topBtn").style.display = "none";
    }
}

function topFunction() {
    document.body.scrollTop = 0; 
    document.documentElement.scrollTop = 0; 
}