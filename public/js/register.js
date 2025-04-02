function showForm(tipo) {
    document.getElementById('registerAluno').style.display = 'none'
    document.getElementById('registerAcademia').style.display = 'none'
    document.getElementById('registerProfissional').style.display = 'none'

    if(tipo === 'aluno') {
        document.getElementById('registerAluno').style.display = 'block'
    } else if (tipo === 'academia') {
        document.getElementById('registerAcademia').style.display = 'block'
    } else if (tipo === 'profissional'){
        document.getElementById('registerProfissional').style.display = 'block'
    }
}