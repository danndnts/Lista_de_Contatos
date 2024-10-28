// Referências aos elementos HTML
var appForm = document.getElementById('app-form');
var listaPessoas = document.getElementById('listaPessoas');
var btnOrdenar = document.getElementById('btnOrdenar');
var btnExemplo = document.getElementById('btnExemplo');

// Lista de pessoas
var pessoas = [];

// Inicializa a aplicação carregando os dados do LocalStorage
function inicializarApp() {
    pessoas = JSON.parse(localStorage.getItem('pessoas')) || [];
    mostrarLista();
}

// Função para salvar lista no LocalStorage
function salvarNoLocalStorage() {
    localStorage.setItem('pessoas', JSON.stringify(pessoas));
}

// Adiciona uma nova pessoa
function addPessoa(e) {
    e.preventDefault();
    var nome = e.target.pessoaNome.value;
    var sobrenome = e.target.pessoaSobrenome.value;
    var telefone = e.target.pessoaTelefone.value;
    var rua = e.target.pessoaRua.value;
    var nrua = e.target.numeroRua.value;
    var cep = e.target.pessoaCep.value;
    var cidade = e.target.pessoaCidade.value;
    var estado = e.target.pessoaEstado.value;
    var email = e.target.pessoaEmail.value;
    var pessoa = { nome, sobrenome, telefone, rua, nrua, cep, cidade, estado, email };

    var validation = validarCampos(pessoa);
    if (!validation.status) {
        alert(validation.error);
        return;
    }

    pessoas.push(pessoa);
    appForm.reset();
    mostrarLista();
    salvarNoLocalStorage();
}

// Função de validação dos campos
function validarCampos(pessoa) {
    var validation = { status: true, error: '' };

    if (pessoa.nome.length === 0) {
        validation.status = false;
        validation.error = 'Preencha o campo Nome';
    } else if (pessoa.sobrenome.length === 0) {
        validation.status = false;
        validation.error = 'Preencha o campo Sobrenome';
    } else if (pessoa.telefone.length < 10) {
        validation.status = false;
        validation.error = 'Preencha o campo Telefone corretamente';
    } else if (pessoa.cep.length !== 8) {
        validation.status = false;
    }
    return validation;
}

// Função para mostrar a lista de pessoas
function mostrarLista() {
    listaPessoas.innerHTML = '';
    for (let pessoa of pessoas) {
        var nomeEl = document.createElement('strong');
        nomeEl.appendChild(document.createTextNode(pessoa.nome + ' ' + pessoa.sobrenome));

        var telefoneEl = document.createElement('p');
        telefoneEl.appendChild(document.createTextNode('Telefone: ' + pessoa.telefone));

        var emailEl = document.createElement('p');
        emailEl.appendChild(document.createTextNode('E-mail: ' + pessoa.email));

        var enderecoEl = document.createElement('p');
        enderecoEl.appendChild(document.createTextNode('Rua: ' + pessoa.rua + ', nº: ' + pessoa.nrua));
        enderecoEl.appendChild(document.createElement('br'));
        enderecoEl.appendChild(document.createTextNode('Cidade e estado: ' + pessoa.cidade + ' - ' + pessoa.estado));
        enderecoEl.appendChild(document.createElement('br'));
        enderecoEl.appendChild(document.createTextNode('CEP: ' + pessoa.cep));

        listaPessoas.appendChild(enderecoEl);
        var indice = pessoas.indexOf(pessoa);

        var removerEl = document.createElement('a');
        removerEl.setAttribute('href', '#');
        removerEl.appendChild(document.createTextNode('Remover'));
        removerEl.setAttribute('onclick', 'removerPessoa(' + indice + ')');

        var alterarEl = document.createElement('a');
        alterarEl.setAttribute('href', '#');
        alterarEl.appendChild(document.createTextNode('Alterar'));
        alterarEl.setAttribute('onclick', 'alterarPessoa(' + indice + ')');

        var itemEl = document.createElement('li');
        itemEl.appendChild(nomeEl);
        itemEl.appendChild(telefoneEl);
        itemEl.appendChild(emailEl);
        itemEl.appendChild(enderecoEl);
        itemEl.appendChild(alterarEl);
        itemEl.appendChild(removerEl);

        listaPessoas.appendChild(itemEl);
    }
}


// Remove uma pessoa
function removerPessoa(indice) {
    pessoas.splice(indice, 1);
    mostrarLista();
    salvarNoLocalStorage();
}

// Função para editar uma pessoa
function alterarPessoa(indice) {
    var btnCadastrar = document.getElementById('btnCadastrar');
    var btnEditar = document.getElementById('btnEditar');
    var input_nome = document.getElementById('pessoaNome');
    var input_sobrenome = document.getElementById('pessoaSobrenome');
    var input_telefone = document.getElementById('pessoaTelefone');
    var input_email = document.getElementById('pessoaEmail');
    var input_rua = document.getElementById('pessoaRua');
    var input_nrua = document.getElementById('numeroRua');
    var input_cidade = document.getElementById('pessoaCidade');
    var input_estado = document.getElementById('pessoaEstado');
    var input_cep = document.getElementById('pessoaCep');

    input_nome.value = pessoas[indice].nome;
    input_sobrenome.value = pessoas[indice].sobrenome;
    input_telefone.value = pessoas[indice].telefone;
    input_email.value = pessoas[indice].email;
    input_rua.value = pessoas[indice].rua;
    input_nrua.value = pessoas[indice].nrua;
    input_cidade.value = pessoas[indice].cidade;
    input_estado.value = pessoas[indice].estado;
    input_cep.value = pessoas[indice].cep;

    btnCadastrar.style.display = 'none';
    btnEditar.style.display = 'block';

    btnEditar.onclick = function () {
        var pessoaAlterada = {
            nome: input_nome.value,
            sobrenome: input_sobrenome.value,
            telefone: input_telefone.value,
            email: input_email.value,
            rua: input_rua.value,
            nrua: input_nrua.value,
            cidade: input_cidade.value,
            estado: input_estado.value,
            cep: input_cep.value
        };

        var validation = validarCampos(pessoaAlterada);
        if (!validation.status) {
            alert(validation.error);
            return;
        }

        pessoas[indice] = pessoaAlterada;
        mostrarLista();
        salvarNoLocalStorage();

        btnCadastrar.style.display = 'block';
        btnEditar.style.display = 'none';
    };
}

// Ordena a lista de pessoas pelo nome
function ordenarLista() {
    pessoas.sort((a, b) => {
        var x = a.nome.toLowerCase() + a.sobrenome.toLowerCase();
        var y = b.nome.toLowerCase() + b.sobrenome.toLowerCase();
        return x.localeCompare(y);
    });
    mostrarLista();
    salvarNoLocalStorage();
}

// Inicializa a aplicação
inicializarApp();

// Event listeners
appForm.onsubmit = addPessoa;
btnOrdenar.onclick = ordenarLista;
btnExemplo.onclick = gerarListaSeed;