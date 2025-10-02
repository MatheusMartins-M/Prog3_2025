class CrudAPI {
  constructor() {
    // Array para armazenar os registros
    this.dados = [];
    // Variável para registrar o ID, iniciando em 1
    this.id = 1;

   const pacientes = [
  { paciente: 'Jonas Silva', idade: 12, id_especialidade: 100 },
  { paciente: 'Maria Oliveira', idade: 35, id_especialidade: 101 },
  { paciente: 'Carlos Santos', idade: 67, id_especialidade: 105 },
  { paciente: 'Ana Souza', idade: 45, id_especialidade: 104 },
  { paciente: 'Gustavo Ribeiro', idade: 33, id_especialidade: 105 },
  { paciente: 'Jonas Amaral', idade: 19, id_especialidade: 101 },
  { paciente: 'Pedro Almeida', idade: 28, id_especialidade: 103 },
  { paciente: 'Fernanda Costa', idade: 8, id_especialidade: 101 },
  { paciente: 'Ricardo Lima', idade: 50, id_especialidade: 100 },
  { paciente: 'Juliana Rocha', idade: 32, id_especialidade: 104 },
  { paciente: 'Paulo Mendes', idade: 72, id_especialidade: 105 },
  { paciente: 'Camila Ferreira', idade: 40, id_especialidade: 103 },
  { paciente: 'Lucas Martins', idade: 14, id_especialidade: 102 },
  { paciente: 'Roberta Azevedo', idade: 5, id_especialidade: 101 },
  { paciente: 'Bianca Nunes', idade: 25, id_especialidade: 100 },
  { paciente: 'Marcos Teixeira', idade: 48, id_especialidade: 102 },
  { paciente: 'Carlos Carvalho', idade: 37, id_especialidade: 104 },
  { paciente: 'Roberval Barbosa', idade: 54, id_especialidade: 103 },
  { paciente: 'Isabela Chagas', idade: 3, id_especialidade: 101 },
  { paciente: 'Rafael Gomes', idade: 19, id_especialidade: 102 },
  { paciente: 'Helena Duarte', idade: 16, id_especialidade: 105 }
];
    pacientes.forEach(pessoa => {
      this.dados.push({ id: this.id++, ...pessoa });
    });
  }

  // Método para criar um novo registro
  async criar(registro) {
    return new Promise((resolve) => {
      setTimeout(() => {
        const novoRegistro = { id: this.id++, ...registro };
        this.dados.push(novoRegistro);
        resolve(novoRegistro);
      }, 100);
    });
  }

  // Método para ler todos os registros
  async lerTodos() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(this.dados);
      }, 100);
    });
  }

  // Método para ler um registro específico pelo ID
  async lerPorId(id) {
    return new Promise((resolve) => {
      setTimeout(() => {
        const registro = this.dados.find(item => item.id === id);
        resolve(registro);
      }, 100);
    });
  }

  async listaEspecialidades() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve([
          {id:100, nome:"Clínica Médica"},
          {id:101, nome:"Pediatria"},
          {id:102, nome:"Traumatologia"},
          {id:103, nome:"Cardiologia"},
          {id:104, nome:"Dermatologia"},
          {id:105, nome:"Geriatria"}

        ]);
      }, 100);
    });
  }

}

export default new CrudAPI();
