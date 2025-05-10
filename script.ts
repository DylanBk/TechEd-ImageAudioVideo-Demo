const dir = './assets/media/images';

type Img = {
    src: string,
    alt: string
};

const imgs: Img[] = [
    {
        src: `${dir}/pexels-pixabay-41162.webp`,
        alt: 'A spaceman on the Moon',
    },
    {
        src: `${dir}/pexels-felixmittermeier-956981.webp`,
        alt: 'A field of stars with a blue hint'
    },
    {
        src: `${dir}/pexels-francesco-ungaro-998641.webp`,
        alt: 'A black sky dusted with stars',
    },
    {
        src: `${dir}/pexels-pixabay-2150.webp`,
        alt: 'A swirling galaxy',
    },
    {
        src: `${dir}/pexels-pixabay-2156.webp`,
        alt: 'A spaceman with the Earth in the background',
    },
    {
        src: `${dir}/pexels-pixabay-41953.webp`,
        alt: 'The Earth from space',
    },
    {
        src: `${dir}/pexels-pixabay-2159.webp`,
        alt: 'A rocket launching into space',
    },
    {
        src: `${dir}/pexels-pixabay-2166.webp`,
        alt: 'A rocket taking off from a launch pad',
    },
    {
        src: `${dir}/pexels-brunoscramgnon-596132.webp`,
        alt: 'The moon from space'
    }
];

const vid = document.querySelector('video') as HTMLVideoElement;

window.addEventListener('scroll', () => {
    if (vid.getBoundingClientRect().top < -200) {
        vid.pause();
    } else {
        vid.play();
    }
});

const sfx = document.querySelector('#sfx') as HTMLAudioElement;
const music = document.querySelector('#music') as HTMLAudioElement;

window.addEventListener('load', () => {
    vid.play();
    sfx.play();
    music.play();
});

sfx.volume = 0.3;
music.volume = 0.5;

let isSfxPlaying = true;
let isMusicPlaying = true;

const sfxBtn = document.querySelector('#sfx-btn') as HTMLButtonElement;
const musicBtn = document.querySelector('#music-btn') as HTMLButtonElement;

sfxBtn.addEventListener('click', () => {
    if (isSfxPlaying) {
        sfx.pause();
        (sfxBtn.querySelector('img') as HTMLImageElement).src = '/assets/media/icons/volume_off.svg';
        (sfxBtn.querySelector('img') as HTMLImageElement).alt = 'Mute SFX';
    } else {
        sfx.play();
        (sfxBtn.querySelector('img') as HTMLImageElement).src = '/assets/media/icons/volume_on.svg';
        (sfxBtn.querySelector('img') as HTMLImageElement).alt = 'Unmute SFX';
    };

    isSfxPlaying = !isSfxPlaying;
});

musicBtn.addEventListener('click', () => {
    if (isMusicPlaying) {
        music.pause();
        (musicBtn.querySelector('img') as HTMLImageElement).src = '/assets/media/icons/music_off.svg';
        (musicBtn.querySelector('img') as HTMLImageElement).alt = 'Mute Music';
    } else {
        music.play();
        (musicBtn.querySelector('img') as HTMLImageElement).src = '/assets/media/icons/music_on.svg';
        (musicBtn.querySelector('img') as HTMLImageElement).alt = 'Unmute Music';
    };

    isMusicPlaying = !isMusicPlaying;
});

const carousel = document.querySelector('#carousel') as HTMLDivElement;
const focusedImg = document.querySelector('#focused-img') as HTMLImageElement;

focusedImg.src = imgs[0].src;
focusedImg.alt = imgs[0].alt;

const focusImg = (e: Event) => {
    focusedImg.src = (e.target as HTMLImageElement).src;
    focusedImg.alt = (e.target as HTMLImageElement).alt;
};

document.addEventListener('DOMContentLoaded', () => {
    imgs.map((img) => {
        const el = document.createElement('img') as HTMLImageElement;
        el.src = img.src;
        el.alt = img.alt;
        el.loading = 'lazy';

        el.addEventListener('click', focusImg)

        carousel.appendChild(el);
    });
});