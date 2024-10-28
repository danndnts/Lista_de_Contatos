// Referências aos elementos HTML
let appForm = document.getElementById('app-form');
let listaPessoas = document.getElementById('listaPessoas');
let btnOrdenar = document.getElementById('btnOrdenar');
let btnExemplo = document.getElementById('btnExemplo');

// Lista de pessoas
let pessoas = [];

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
    let nome = e.target.pessoaNome.value;
    let sobrenome = e.target.pessoaSobrenome.value;
    let telefone = e.target.pessoaTelefone.value;
    let rua = e.target.pessoaRua.value;
    let nrua = e.target.numeroRua.value;
    let cep = e.target.pessoaCep.value;
    let cidade = e.target.pessoaCidade.value;
    let estado = e.target.pessoaEstado.value;
    let email = e.target.pessoaEmail.value;
    let pessoa = { nome, sobrenome, telefone, rua, nrua, cep, cidade, estado, email };

    let validation = validarCampos(pessoa);
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
    let validation = { status: true, error: '' };

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
        let nomeEl = document.createElement('strong');
        nomeEl.appendChild(document.createTextNode(pessoa.nome + ' ' + pessoa.sobrenome));

        let telefoneEl = document.createElement('p');
        telefoneEl.appendChild(document.createTextNode('Telefone: ' + pessoa.telefone));

        let emailEl = document.createElement('p');
        emailEl.appendChild(document.createTextNode('E-mail: ' + pessoa.email));

        let enderecoEl = document.createElement('p');
        enderecoEl.appendChild(document.createTextNode('Rua: ' + pessoa.rua + ', nº: ' + pessoa.nrua));
        enderecoEl.appendChild(document.createElement('br'));
        enderecoEl.appendChild(document.createTextNode('Cidade e estado: ' + pessoa.cidade + ' - ' + pessoa.estado));
        enderecoEl.appendChild(document.createElement('br'));
        enderecoEl.appendChild(document.createTextNode('CEP: ' + pessoa.cep));

        listaPessoas.appendChild(enderecoEl);
        let indice = pessoas.indexOf(pessoa);

        let removerEl = document.createElement('a');
        removerEl.setAttribute('href', '#');
        removerEl.appendChild(document.createTextNode('Remover'));
        removerEl.setAttribute('onclick', 'removerPessoa(' + indice + ')');

        let alterarEl = document.createElement('a');
        alterarEl.setAttribute('href', '#');
        alterarEl.appendChild(document.createTextNode('Alterar'));
        alterarEl.setAttribute('onclick', 'alterarPessoa(' + indice + ')');

        let itemEl = document.createElement('li');
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
    let btnCadastrar = document.getElementById('btnCadastrar');
    let btnEditar = document.getElementById('btnEditar');
    let input_nome = document.getElementById('pessoaNome');
    let input_sobrenome = document.getElementById('pessoaSobrenome');
    let input_telefone = document.getElementById('pessoaTelefone');
    let input_email = document.getElementById('pessoaEmail');
    let input_rua = document.getElementById('pessoaRua');
    let input_nrua = document.getElementById('numeroRua');
    let input_cidade = document.getElementById('pessoaCidade');
    let input_estado = document.getElementById('pessoaEstado');
    let input_cep = document.getElementById('pessoaCep');

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
        let pessoaAlterada = {
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

        let validation = validarCampos(pessoaAlterada);
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
        let x = a.nome.toLowerCase() + a.sobrenome.toLowerCase();
        let y = b.nome.toLowerCase() + b.sobrenome.toLowerCase();
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
