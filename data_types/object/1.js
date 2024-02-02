// Definindo um objeto 'Carro'
const carro = {
    marca: 'Toyota',
    modelo: 'Corolla',
    ano: 2022,
    cor: 'azul',
  
    // Método para obter uma descrição do carro
    obterDescricao: function() {
      return `Um ${this.marca} ${this.modelo} ${this.ano} de cor ${this.cor}.`;
    },
  
    // Método para pintar o carro com uma nova cor
    pintar: function(novaCor) {
      this.cor = novaCor;
      return `O carro agora é ${novaCor}.`;
    }
  };
  
  // Acessando propriedades do objeto
  console.log(carro.marca); // Toyota
  // Chamando métodos do objeto
  console.log(carro.obterDescricao()); // Um 2022 Toyota Corolla de cor azul.
  // Modificando propriedades usando um método
  console.log(carro.pintar('vermelho')); // O carro agora é vermelho.
  // Obtendo a descrição atualizada
  console.log(carro.obterDescricao()); // Um Toyota Corolla 2022 de cor vermelha.