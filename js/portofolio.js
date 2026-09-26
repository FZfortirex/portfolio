// Navigasi Link Portofolio
const waroengdjoglo = document.getElementById('waroengdjoglo');
const profile = document.getElementById('profile');
const breadlover = document.getElementById('breadlover');
const healthyliving = document.getElementById('healthy-living');
const sekolah = document.getElementById('sekolah');
const ordermenu = document.getElementById('ordermenu');
const pomodoro = document.getElementById('pomodoro');
const waitingroom = document.getElementById('waitingroom');
const skilvul = document.getElementById('skilvul');
const bootcampSkilvul = document.getElementById('bootcamp-skilvul');
const techcomfest = document.getElementById('techcomfest');

if (waroengdjoglo) {
    waroengdjoglo.addEventListener('click', () => {
        window.open("https://fzfortirex.github.io/waroengdjoglo/", "_blank");
    });
}

if (profile) {
    profile.addEventListener('click', () => {
        window.open("https://fzfortirex.github.io/profile-card/", "_blank");
    });
}

if (breadlover) {
    breadlover.addEventListener('click', () => {
        window.open("https://fzfortirex.github.io/bakery-bread/", "_blank");
    });
}

if (healthyliving) {
    healthyliving.addEventListener('click', () => {
        window.open("https://fzfortirex.github.io/healthy-living/", "_blank");
    });
}

if (ordermenu) {
    ordermenu.addEventListener('click', () => {
        window.open("https://kampoengsawah.rplrus.com/", "_blank");
    });
}

if (sekolah) {
    sekolah.addEventListener('click', () => {
        window.open("http://sekolahzain.rplrus.com/", "_blank");
    });
}

if (pomodoro) {
    pomodoro.addEventListener('click', () => {
        window.open("https://pomodoro.rplrus.com/", "_blank");
    });
}

if (waitingroom) {
    waitingroom.addEventListener('click', () => {
        window.open("http://waitingroom.rplrus.com/", "_blank");
    });
}

if (skilvul) {
    skilvul.addEventListener('click', () => {
        window.open("https://i.ibb.co/hxd8GnRf/image.png", "_blank");
    });
}

if (bootcampSkilvul) {
    bootcampSkilvul.addEventListener('click', () => {
        window.open("https://i.ibb.co/6RFNbRxK/image.png", "_blank");
    });
}

if (techcomfest) {
    techcomfest.addEventListener('click', () => {
        window.open("https://i.ibb.co/rGxYW2c8/image.png", "_blank");
    });
}

if (techcomfest2) {
    techcomfest.addEventListener('click', () => {
        window.open("https://ibb.co.com/qM3RDYTb", "_blank");
    });
}

// Kontrol Modal Box & Floating Button
function closeDemoModal() {
    const demoModal = document.getElementById('demoModal');
    const floatingBtn = document.getElementById('floatingChannelBtn');
    
    if (demoModal) {
        demoModal.style.display = 'none';
    }
    if (floatingBtn) {
        floatingBtn.style.display = 'flex';
    }
}