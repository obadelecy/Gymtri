// Função para salvar as informações da academia
function saveProfile() {
    const updatedProfile = {
        username: document.getElementById("username").value,
        altura: document.getElementById("altura").value,
        peso: document.getElementById("peso").value,
        meta: document.getElementById("text").value,
        profilePic: document.getElementById("profile-pic").src
    };

    // Exibindo as informações no console para depuração
    console.log("Perfil da Academia salvo:", updatedProfile);

    // Salvando as informações no localStorage
    localStorage.setItem('academyProfile', JSON.stringify(updatedProfile));

    // Exibindo o alerta de sucesso
    alert("Perfil atualizado com sucesso!");
}

// Função para pré-visualizar a imagem da foto de perfil antes de salvar
function previewImage(event) {
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            document.getElementById("profile-pic").src = e.target.result;
        };
        reader.readAsDataURL(file);
    }
}

// Carregar o perfil ao iniciar a página
loadProfile();