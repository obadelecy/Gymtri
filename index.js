var admEmail = 'emailAdm@gmail.com'
var acadCnpj = '12345678990001'
var profEmail = 'profissional@gmail.com'
var defaultPassword = '0000'

const btnConfirm = document.getElementById('btnConfirm')
const btnConfirm2 = document.getElementById('btnConfirm2')
const btnConfirm3 = document.getElementById('btnConfirm3')
const email = document.getElementById('email')
const cnpj = document.getElementById('cnpj')
const emailProf = document.getElementById('emailProf')
const containerPassword = document.getElementById('containerPassword')

//Verifica se o btnConfirm existe
if(btnConfirm){
    //Caso exista, adiciona o evento.
    btnConfirm.addEventListener('click', function () {
        if (email.value === admEmail) {
            if (!document.getElementById('password')) { //Verifica se ja não existe o campo "password" criado. Se não, irá criar, se sim, não cria mais.
                const label = document.createElement('label')
                label.for = 'password'
                label.innerText = 'Senha:'
                label.classList = 'titleLabel'
                const input = document.createElement('input')
                input.type = 'password'
                input.id = 'password'
                input.name = 'password'
    
                containerPassword.appendChild(label)
                containerPassword.appendChild(input)
            }
    
            const senha = document.getElementById('password').value
    
            if (senha === defaultPassword) {
                window.location.href = '../Aluno/interfaceUsuario.html'
            } else if (senha) {
                alert('Senha Incorreta!')
            }
        } else if (email !== admEmail){
            alert('Email não cadastrado!')
        }
    })
}

//Verifica se o btnConfirm2 existe
if(btnConfirm2) {
    //Caso exista, adiciona o evento.
    btnConfirm2.addEventListener('click', function () {
        if (cnpj.value === acadCnpj) {
            if (!document.getElementById('password')) { //Verifica se ja não existe o campo "password" criado. Se não, irá criar, se sim, não cria mais.
                const label = document.createElement('label')
                label.for = 'password'
                label.innerText = 'Senha:'
                label.classList = 'titleLabel'
                const input = document.createElement('input')
                input.type = 'password'
                input.id = 'password'
                input.name = 'password'
    
                containerPassword.appendChild(label)
                containerPassword.appendChild(input)
            }
    
            const senha = document.getElementById('password').value
    
            if (senha === defaultPassword) {
                window.location.href = '../Academia/interfaceAcademia.html'
            } else if (senha) {
                alert('Senha Incorreta!')
            }
        } else if (cnpj !== acadCnpj){
            alert('Cnpj não cadastrado!')
        }
    })
}

//Verifica se o btnConfirm existe
if(btnConfirm3){
    //Caso exista, adiciona o evento.
    btnConfirm3.addEventListener('click', function () {
        if (emailProf.value === profEmail) {
            if (!document.getElementById('password')) { //Verifica se ja não existe o campo "password" criado. Se não, irá criar, se sim, não cria mais.
                const label = document.createElement('label')
                label.for = 'password'
                label.innerText = 'Senha:'
                label.classList = 'titleLabel'
                const input = document.createElement('input')
                input.type = 'password'
                input.id = 'password'
                input.name = 'password'
    
                containerPassword.appendChild(label)
                containerPassword.appendChild(input)
            }
    
            const senha = document.getElementById('password').value
    
            if (senha === defaultPassword) {
                window.location.href = '../Profissional/interfaceProfissional.html'
            } else if (senha) {
                alert('Senha Incorreta!')
            }
        } else if (emailProf !== profEmail){
            alert('Email não cadastrado!')
        }
    })
}
