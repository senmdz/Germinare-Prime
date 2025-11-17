    // cria o popup
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

    // quando clica no botão, aparece a imagem
    botoes.forEach(botao => {
        botao.addEventListener("click", () => {
            const img = botao.previousElementSibling; 
            popupImg.src = img.src;
            popup.style.display = "flex";
        });
    });

    // quando clica esc ou clica fora da imagem, sai
    document.addEventListener ('keydown', function(event) {
        if (event.key === "Escape" ){
            popup.style.display = "none";
        }
    });
    
    closeBotao.onclick = () => popup.style.display = "none";
    popup.onclick = e => { if (e.target === popup) popup.style.display = "none"; };