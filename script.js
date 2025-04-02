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
            let diff = now - startDate;
    
            const years = Math.floor(diff / (1000 * 60 * 60 * 24 * 365.25));
            diff -= years * (1000 * 60 * 60 * 24 * 365.25);
            const months = Math.floor(diff / (1000 * 60 * 60 * 24 * 30.44));
            diff -= months * (1000 * 60 * 60 * 24 * 30.44);
            const days = Math.floor(diff / (1000 * 60 * 60 * 24));
            diff -= days * (1000 * 60 * 60 * 24);
            const hours = Math.floor(diff / (1000 * 60 * 60));
            diff -= hours * (1000 * 60 * 60);
            const minutes = Math.floor(diff / (1000 * 60));
            diff -= minutes * (1000 * 60);
            const seconds = Math.floor(diff / 1000);
    
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