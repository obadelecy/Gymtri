document.querySelectorAll('.btnChoose').forEach(button => {
    button.addEventListener('click', function() {
        document.getElementById('userType').value = this.dataset.user 

        document.querySelectorAll('.btnChoose').forEach(btn => btn.classList.remove('selected'))

        this.classList.add('selected')
    })
})

document.getElementById('btnConfirm').addEventListener('click', function(ev){

    ev.preventDefault()

    const userType = document.getElementById('userType').value
    const email = document.getElementById('email').value
    const password = document.getElementById('password').value

    if(userType && email && password){
        window.location.href = 'interfaces/' + userType + '.html'
    } else {
        alert('Por favor, selecione um tipo de usuário e preencha todos os campos corretamente.')
    }
})