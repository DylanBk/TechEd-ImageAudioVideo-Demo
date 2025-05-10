var dir = './assets/media/images';
var imgs = [
    {
        src: "".concat(dir, "/pexels-pixabay-41162.webp"),
        alt: 'A spaceman on the Moon',
    },
    {
        src: "".concat(dir, "/pexels-felixmittermeier-956981.webp"),
        alt: 'A field of stars with a blue hint'
    },
    {
        src: "".concat(dir, "/pexels-francesco-ungaro-998641.webp"),
        alt: 'A black sky dusted with stars',
    },
    {
        src: "".concat(dir, "/pexels-pixabay-2150.webp"),
        alt: 'A swirling galaxy',
    },
    {
        src: "".concat(dir, "/pexels-pixabay-2156.webp"),
        alt: 'A spaceman with the Earth in the background',
    },
    {
        src: "".concat(dir, "/pexels-pixabay-41953.webp"),
        alt: 'The Earth from space',
    },
    {
        src: "".concat(dir, "/pexels-pixabay-2159.webp"),
        alt: 'A rocket launching into space',
    },
    {
        src: "".concat(dir, "/pexels-pixabay-2166.webp"),
        alt: 'A rocket taking off from a launch pad',
    },
    {
        src: "".concat(dir, "/pexels-brunoscramgnon-596132.webp"),
        alt: 'The moon from space'
    }
];
var vid = document.querySelector('video');
window.addEventListener('scroll', function () {
    if (vid.getBoundingClientRect().top < -200) {
        vid.pause();
    }
    else {
        vid.play();
    }
});
var sfx = document.querySelector('#sfx');
var music = document.querySelector('#music');
window.addEventListener('load', function () {
    vid.play();
    sfx.play();
    music.play();
});
sfx.volume = 0.3;
music.volume = 0.5;
var isSfxPlaying = true;
var isMusicPlaying = true;
var sfxBtn = document.querySelector('#sfx-btn');
var musicBtn = document.querySelector('#music-btn');
sfxBtn.addEventListener('click', function () {
    if (isSfxPlaying) {
        sfx.pause();
        sfxBtn.querySelector('img').src = '/assets/media/icons/volume_off.svg';
        sfxBtn.querySelector('img').alt = 'Mute SFX';
    }
    else {
        sfx.play();
        sfxBtn.querySelector('img').src = '/assets/media/icons/volume_on.svg';
        sfxBtn.querySelector('img').alt = 'Unmute SFX';
    }
    ;
    isSfxPlaying = !isSfxPlaying;
});
musicBtn.addEventListener('click', function () {
    if (isMusicPlaying) {
        music.pause();
        musicBtn.querySelector('img').src = '/assets/media/icons/music_off.svg';
        musicBtn.querySelector('img').alt = 'Mute Music';
    }
    else {
        music.play();
        musicBtn.querySelector('img').src = '/assets/media/icons/music_on.svg';
        musicBtn.querySelector('img').alt = 'Unmute Music';
    }
    ;
    isMusicPlaying = !isMusicPlaying;
});
var carousel = document.querySelector('#carousel');
var focusedImg = document.querySelector('#focused-img');
focusedImg.src = imgs[0].src;
focusedImg.alt = imgs[0].alt;
var focusImg = function (e) {
    focusedImg.src = e.target.src;
    focusedImg.alt = e.target.alt;
};
document.addEventListener('DOMContentLoaded', function () {
    imgs.map(function (img) {
        var el = document.createElement('img');
        el.src = img.src;
        el.alt = img.alt;
        el.loading = 'lazy';
        el.addEventListener('click', focusImg);
        carousel.appendChild(el);
    });
});
