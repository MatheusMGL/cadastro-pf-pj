class Pessoa {
    #nome;

    set setNome(nome) {
        this.#nome = nome;
    }

    get getNome() {
        return this.#nome;
    }
}

class PessoaFisica extends Pessoa {
    #cpf;

    set setCpf(cpf) {
        this.#cpf = cpf;
    }

    get getCpf() {
        return this.#cpf;
    }

    salvar() {
        let nome = prompt('Informe o nome da pessoa física');
        let cpf = prompt('Informe o cpf da pessoa física');
        this.setNome = nome;
        this.setCpf = cpf;
        document.getElementById('pessoaFisica').innerHTML = `
            <li>Nome: ${this.getNome}</li>
            <li>Cpf: ${this.getCpf}</li>
        `;
    }
}

class PessoaJuridica extends Pessoa {
    #cnpj;

    set setCnpj(cnpj) {
        this.#cnpj = cnpj;
    }

    get getCnpj() {
        return this.#cnpj;
    }

    salvar() {
        let nome = prompt('Informe o nome da pessoa jurídica');
        let cnpj = prompt('Informe o cnpj da pessoa jurídica');
        this.setNome = nome;
        this.setCnpj = cnpj;
        document.getElementById('pessoaJuridica').innerHTML = `
            <li>Nome: ${this.getNome}</li>
            <li>Cnpj: ${this.getCnpj}</li>
        `;
    }
}