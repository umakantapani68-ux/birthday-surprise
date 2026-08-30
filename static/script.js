/* =========================================
   GLOBAL VARIABLES
========================================= */

let heartsStarted = false;

let balloonsStarted = false;

let typewriterStarted = false;

let fireworksStarted = false;

let musicStarted = false;


/* =========================================
   PAGE NAVIGATION
========================================= */

function showPage(pageId) {

    const pages =
        document.querySelectorAll(".page");


    pages.forEach(page => {

        page.classList.remove("active");

    });


    const selected =
        document.getElementById(pageId);


    if (selected) {

        selected.classList.add("active");

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    }

}


/* =========================================
   START SURPRISE
========================================= */

function startSurprise() {

    startMusic();

    showPage("countdownPage");


    let number = 3;


    const counter =
        document.getElementById("countNumber");


    counter.innerText = number;


    const timer =
        setInterval(() => {

            number--;


            if (number > 0) {

                counter.innerText = number;

            }


            if (number === 0) {

                clearInterval(timer);


                counter.innerText = "❤️";


                setTimeout(() => {

                    showBirthday();

                }, 800);

            }

        }, 1000);

}


/* =========================================
   BIRTHDAY PAGE
========================================= */

function showBirthday() {

    showPage("birthdayPage");

    startHearts();

    startBalloons();

    startConfetti();

}


/* =========================================
   MEMORIES
========================================= */

function showMemories() {

    showPage("memoriesPage");

}


/* =========================================
   LETTER
========================================= */

function showLetter() {

    showPage("letterPage");

    startTypewriter();

}


/* =========================================
   TYPEWRITER
========================================= */

function startTypewriter() {

    if (typewriterStarted) {

        return;

    }


    typewriterStarted = true;


    const element =
        document.getElementById("typewriter");


    /*
       ======================================
       CHANGE YOUR PERSONAL MESSAGE HERE
       ======================================
    */

    const message =

        "Happy Birthday to someone who means " +
        "more to me than words can explain. ❤️ " +

        "I hope today reminds you of how loved, " +
        "appreciated and special you truly are. " +

        "Thank you for all the beautiful memories, " +
        "the smiles and all those little moments " +
        "that make life better. " +

        "I wish you endless happiness, success, " +
        "peace and everything your heart wishes for. " +

        "No matter how many birthdays come and go, " +
        "I hope you always keep that beautiful smile. " +

        "Happy Birthday, my favorite person. ❤️";


    element.innerHTML = "";


    let index = 0;


    function typeNextCharacter() {

        if (index < message.length) {

            element.innerHTML +=
                message.charAt(index);

            index++;


            setTimeout(
                typeNextCharacter,
                35
            );

        }

    }


    typeNextCharacter();

}


/* =========================================
   GIFT PAGE
========================================= */

function showGift() {

    showPage("giftPage");

}


/* =========================================
   OPEN GIFT
========================================= */

function openGift() {

    const gift =
        document.querySelector(".gift-box");


    if (!gift) {

        return;

    }


    if (gift.classList.contains("opened")) {

        return;

    }


    gift.classList.add("opened");


    startConfetti();


    setTimeout(() => {

        showFinal();

    }, 1300);

}


/* =========================================
   FINAL PAGE
========================================= */

function showFinal() {

    showPage("finalPage");


    startHearts();

    startConfetti();

    startFireworks();

}


/* =========================================
   MUSIC
========================================= */

function startMusic() {

    const music =
        document.getElementById(
            "birthdayMusic"
        );


    if (!music) {

        return;

    }


    music.volume = 0.4;


    music.play()
        .then(() => {

            musicStarted = true;

            updateMusicButton();

        })
        .catch(error => {

            console.log(
                "Music could not autoplay:",
                error
            );

        });

}


function toggleMusic() {

    const music =
        document.getElementById(
            "birthdayMusic"
        );


    if (music.paused) {

        music.play()
            .then(() => {

                musicStarted = true;

                updateMusicButton();

            });

    } else {

        music.pause();

        musicStarted = false;

        updateMusicButton();

    }

}


function updateMusicButton() {

    const button =
        document.getElementById(
            "musicButton"
        );


    if (musicStarted) {

        button.innerText = "🔊";

        button.classList.add(
            "playing"
        );

    } else {

        button.innerText = "🎵";

        button.classList.remove(
            "playing"
        );

    }

}


/* =========================================
   FLOATING HEARTS
========================================= */

function startHearts() {

    if (heartsStarted) {

        return;

    }


    heartsStarted = true;


    setInterval(
        createHeart,
        650
    );

}


function createHeart() {

    const container =
        document.getElementById(
            "hearts"
        );


    if (!container) {

        return;

    }


    const heart =
        document.createElement(
            "div"
        );


    heart.className = "heart";


    const symbols = [

        "❤️",
        "💗",
        "💖",
        "💕",
        "💓",
        "💞",
        "✨"

    ];


    heart.innerText =
        symbols[
            Math.floor(
                Math.random() *
                symbols.length
            )
        ];


    heart.style.left =
        Math.random() * 100 + "vw";


    heart.style.fontSize =
        (15 + Math.random() * 25)
        + "px";


    heart.style.animationDuration =
        (5 + Math.random() * 5)
        + "s";


    container.appendChild(
        heart
    );


    setTimeout(() => {

        heart.remove();

    }, 11000);

}


/* =========================================
   FLOATING BALLOONS
========================================= */

function startBalloons() {

    if (balloonsStarted) {

        return;

    }


    balloonsStarted = true;


    setInterval(
        createBalloon,
        1400
    );

}


function createBalloon() {

    const container =
        document.getElementById(
            "balloons"
        );


    if (!container) {

        return;

    }


    const balloon =
        document.createElement(
            "div"
        );


    balloon.className =
        "balloon";


    const colors = [

        "#ff4f9a",
        "#ff77b7",
        "#9b5de5",
        "#f15bb5",
        "#00bbf9",
        "#fee440",
        "#ff6b6b"

    ];


    balloon.style.background =
        colors[
            Math.floor(
                Math.random() *
                colors.length
            )
        ];


    balloon.style.left =
        Math.random() * 100 + "vw";


    balloon.style.animationDuration =
        (8 + Math.random() * 6)
        + "s";


    balloon.style.transform =
        "scale(" +
        (.7 + Math.random() * .5) +
        ")";


    container.appendChild(
        balloon
    );


    setTimeout(() => {

        balloon.remove();

    }, 15000);

}


/* =========================================
   CONFETTI
========================================= */

function startConfetti() {

    const colors = [

        "#ff4f9a",
        "#ffd166",
        "#06d6a0",
        "#4cc9f0",
        "#f72585",
        "#ffffff",
        "#c77dff"

    ];


    for (let i = 0; i < 90; i++) {

        setTimeout(() => {

            createConfettiPiece(
                colors[
                    Math.floor(
                        Math.random() *
                        colors.length
                    )
                ]
            );

        }, i * 15);

    }

}


function createConfettiPiece(color) {

    const piece =
        document.createElement(
            "div"
        );


    piece.className =
        "confetti-piece";


    piece.style.left =
        Math.random() * 100 + "vw";


    piece.style.background =
        color;


    piece.style.transform =
        "rotate(" +
        Math.random() * 360 +
        "deg)";


    const duration =
        2500 +
        Math.random() * 3500;


    piece.animate(

        [

            {
                transform:
                    "translateY(0) rotate(0deg)"
            },

            {
                transform:
                    "translateY(110vh) rotate(720deg)"
            }

        ],

        {

            duration:
                duration,

            easing:
                "cubic-bezier(.2,.7,.3,1)",

            iterations: 1

        }

    );


    document.body.appendChild(
        piece
    );


    setTimeout(() => {

        piece.remove();

    }, duration + 100);

}


/* =========================================
   FIREWORKS
========================================= */

function startFireworks() {

    if (fireworksStarted) {

        return;

    }


    fireworksStarted = true;


    const canvas =
        document.getElementById(
            "fireworks"
        );


    const ctx =
        canvas.getContext("2d");


    function resizeCanvas() {

        canvas.width =
            window.innerWidth;

        canvas.height =
            window.innerHeight;

    }


    resizeCanvas();


    window.addEventListener(
        "resize",
        resizeCanvas
    );


    let particles = [];


    function createFirework() {

        const x =
            100 +
            Math.random() *
            (canvas.width - 200);


        const y =
            80 +
            Math.random() *
            (canvas.height * .45);


        const colors = [

            "#ff4f9a",
            "#ffd166",
            "#ffffff",
            "#c77dff",
            "#4cc9f0"

        ];


        const color =
            colors[
                Math.floor(
                    Math.random() *
                    colors.length
                )
            ];


        for (
            let i = 0;
            i < 70;
            i++
        ) {

            const angle =
                Math.random() *
                Math.PI *
                2;


            const speed =
                1.5 +
                Math.random() * 5;


            particles.push({

                x: x,

                y: y,

                vx:
                    Math.cos(angle)
                    * speed,

                vy:
                    Math.sin(angle)
                    * speed,

                life: 100,

                color: color

            });

        }

    }


    function animateFireworks() {

        ctx.clearRect(
            0,
            0,
            canvas.width,
            canvas.height
        );


        particles =
            particles.filter(
                particle =>
                    particle.life > 0
            );


        particles.forEach(
            particle => {

                particle.x +=
                    particle.vx;

                particle.y +=
                    particle.vy;

                particle.vy +=
                    .045;

                particle.vx *=
                    .99;

                particle.life -=
                    1.2;


                ctx.beginPath();


                ctx.arc(
                    particle.x,
                    particle.y,
                    2,
                    0,
                    Math.PI * 2
                );


                ctx.fillStyle =
                    particle.color;


                ctx.globalAlpha =
                    particle.life / 100;


                ctx.fill();

            }
        );


        ctx.globalAlpha = 1;


        requestAnimationFrame(
            animateFireworks
        );

    }


    setInterval(
        createFirework,
        1000
    );


    animateFireworks();

}


/* =========================================
   PREVENT IMAGE DRAG
========================================= */

document
    .querySelectorAll("img")
    .forEach(image => {

        image.addEventListener(
            "dragstart",
            event => {

                event.preventDefault();

            }
        );

    });
