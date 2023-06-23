document.getElementById('cadastroForm').addEventListener('submit', function(e) {
    e.preventDefault(); 
    var nome = document.getElementById('nome').value;
    var cargo = document.getElementById('cargo').value;
    var salario = document.getElementById('salario').value;
    var tecnologias = document.getElementById('tecnologias').value;

    var xhr = new XMLHttpRequest();
    xhr.open('POST', 'salvar_cadastro.php', true);
    xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4 && xhr.status === 200) {
            alert('Cadastro salvo com sucesso!');
            limparFormulario();
        }
    };
    xhr.send('nome=' + encodeURIComponent(nome) +
             '&cargo=' + encodeURIComponent(cargo) +
             '&salario=' + encodeURIComponent(salario) +
             '&tecnologias=' + encodeURIComponent(tecnologias));
});

function limparFormulario() {
    document.getElementById('cadastroForm').reset();
}

