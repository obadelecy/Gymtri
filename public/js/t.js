// Função para salvar as informações da academia
function saveProfile() {
    const updatedProfile = {
        username: document.getElementById("username").value,
        endereco: document.getElementById("endereco").value,
        contatos: document.getElementById("contatos").value,
        missao: document.getElementById("text").value,
        profilePic: document.getElementById("profile-pic").src
    };

    // Exibindo as informações no console para depuração
    console.log("Perfil da Academia salvo:", updatedProfile);

    // Salvando as informações no localStorage
    localStorage.setItem('academyProfile', JSON.stringify(updatedProfile));

    // Exibindo o alerta de sucesso
    alert("Perfil atualizado com sucesso!");
}

// Função para pré-visualizar a foto de perfil antes de salvar
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

// Função para carregar o perfil ao iniciar a página
function loadProfile() {
    const savedData = JSON.parse(localStorage.getItem('academyProfile'));

    if (savedData) {
        // Preenchendo os campos com as informações salvas
        document.getElementById("username").value = savedData.username || "";
        document.getElementById("endereco").value = savedData.endereco || "";
        document.getElementById("contatos").value = savedData.contatos || "";
        document.getElementById("text").value = savedData.missao || "";
        document.getElementById("profile-pic").src = savedData.profilePic || "https://via.placeholder.com/100";
    }
}

// Carregar o perfil da academia ao iniciar a página
loadProfile();
