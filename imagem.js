    // Cria o popup
    const popup = document.createElement("div");
    popup.id = "popup";
    popup.innerHTML = `
        <span id="fecha-popup">&times;</span>
        <img id="popup-img" src="" alt="Imagem ampliada">
    `;
    document.body.appendChild(popup);

    const botoes = document.querySelectorAll(".ver-imagem");
    const popupImg = document.getElementById("popup-img");
    const closeBotao = document.getElementById("fecha-popup");

    // Quando clicar no botão, abre o popup com a imagem correspondente
    botoes.forEach(botao => {
        botao.addEventListener("click", () => {
            const img = botao.previousElementSibling; // pega a <img> logo acima
            popupImg.src = img.src;
            popup.style.display = "flex";
        });
    });

    document.addEventListener ('keydown', function(event) {
        if (event.key === "Escape" ){
            popup.style.display = "none";
        }
    });
    
    closeBotao.onclick = () => popup.style.display = "none";
    popup.onclick = e => { if (e.target === popup) popup.style.display = "none"; };