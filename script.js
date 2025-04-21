AOS.init();

document.getElementById("carta").addEventListener("click", function() {
    let texto = document.querySelector(".texto-consideracao");
    let computedStyle = window.getComputedStyle(texto); 
    if (computedStyle.display === "none") {
        texto.style.display = "block";
    } else {
        texto.style.display = "none";
    }
});

window.onload = function() {
    var audio = document.getElementById('audio');
    var playButton = document.getElementById('playButton');
    playButton.addEventListener('click', function() {
        audio.play().catch(function(error) {
            console.log("Erro ao tentar tocar o áudio: ", error);
        });
        window.scrollTo(0, 0);
    });
}

document.addEventListener("DOMContentLoaded", function() {
    const hearts = ["❤️", "", "", "", ""];
    const bears = ["", "🍫", "‍"];

    function showHeartOrBear() {
        const heartOrBear = Math.random() > 0.5 ? "heart" : "bear";
        const symbol = heartOrBear === "heart" ? hearts[Math.floor(Math.random() * hearts.length)] : bears[Math.floor(Math.random() * bears.length)];
        const div = document.createElement("div");
        div.classList.add(heartOrBear);
        div.textContent = symbol;
        const topPosition = Math.random() * (window.innerHeight - 100) + window.scrollY;
        const leftPosition = Math.min(
            Math.random() * (window.innerWidth - 100),
            window.innerWidth - 100
        );
        div.style.top = `${topPosition}px`;
        div.style.left = `${leftPosition}px`;
        document.body.appendChild(div);
        setTimeout(() => div.remove(), 2000);
    }

    setInterval(showHeartOrBear, 200);

    function updateCounter() {
        const startDate = new Date("2025-02-08T00:00:00");

        function updateTime() {
            const now = new Date();

            let years = now.getFullYear() - startDate.getFullYear();
            let months = now.getMonth() - startDate.getMonth();
            let days = now.getDate() - startDate.getDate();
            let hours = now.getHours() - startDate.getHours();
            let minutes = now.getMinutes() - startDate.getMinutes();
            let seconds = now.getSeconds() - startDate.getSeconds();

            if (seconds < 0) {
                seconds += 60;
                minutes -= 1;
            }
            if (minutes < 0) {
                minutes += 60;
                hours -= 1;
            }
            if (hours < 0) {
                hours += 24;
                days -= 1;
            }
            if (days < 0) {
                months -= 1;
                const prevMonth = new Date(now.getFullYear(), now.getMonth(), 0);
                days += prevMonth.getDate();
            }
            if (months < 0) {
                months += 12;
                years -= 1;
            }

            document.getElementById("time-count").textContent = 
                `${years} anos, ${months} meses, ${days} dias, ${hours} horas, ${minutes} minutos e ${seconds} segundos`;
        }

        updateTime();
        setInterval(updateTime, 1000);
    }

    updateCounter();

    function createParticles() {
        function addParticle() {
            const particle = document.createElement("div");
            particle.classList.add("particle");

            const leftPosition = Math.min(Math.random() * 100, 95);
            const topPosition = -10;

            particle.style.left = `${leftPosition}vw`;
            particle.style.top = `${topPosition}vh`;
            particle.style.animationDelay = `${Math.random() * 3}s`;

            document.body.appendChild(particle);

            particle.addEventListener("animationiteration", () => {
                particle.remove();
                addParticle();
            });
        }

        for (let i = 0; i < 20; i++) {
            addParticle();
        }
    }

    createParticles();
});
