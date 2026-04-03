document.addEventListener("DOMContentLoaded", () => {
    const neko = document.getElementById("neko");
    const overlay = document.getElementById("overlay");
    const video = document.getElementById("overlayvd");
    const overlayx = document.getElementById("overlayx");

    let contagemCliques = 0;
    let timerReset;

    // O GATILHO: Contar cliques
    neko.addEventListener("click", () => {
        contagemCliques++;

        // Limpa o timer anterior se o usuário clicar rápido de novo
        clearTimeout(timerReset);

        if (contagemCliques === 3) {
            ativar();
            contagemCliques = 0; // Reseta após descobrir o segredo
        } else {
            // Se ele demorar mais de 1.5 segundos entre um clique e outro, a contagem zera
            timerReset = setTimeout(() => {
                contagemCliques = 0;
            }, 1500);
        }
    });

    function ativar() {
        overlay.classList.remove("hidden");
        overlay.classList.add("flex");
        
        setTimeout(() => {
            overlay.classList.remove("opacity-0");
            overlay.classList.add("opacity-100");
        }, 50);

        // Agora o play() funciona com som, porque o gatilho foi um CLICK!
        video.currentTime = 0;
        video.play();
    }

    overlayx.addEventListener("click", () => {
        video.pause();
        overlay.classList.remove("opacity-100");
        overlay.classList.add("opacity-0");

        setTimeout(() => {
            overlay.classList.remove("flex");
            overlay.classList.add("hidden");
        }, 1000);
    });
});