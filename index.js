const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

class Heroi {
  constructor(nome, idade, tipo) {
    this.nome = nome;
    this.idade = idade;
    this.tipo = tipo;
  }

  atacar() {
    let ataque;

    if (this.tipo === 'mago') {
      ataque = 'usou magia';
    } else if (this.tipo === 'guerreiro') {
      ataque = 'usou espada';
    } else if (this.tipo === 'monge') {
      ataque = 'usou artes marciais';
    } else if (this.tipo === 'ninja') {
      ataque = 'usou shuriken';
    } else {
      ataque = 'usou um ataque desconhecido';
    }

    console.log(`O ${this.tipo} ${this.nome} atacou usando ${ataque}`);
  }
}

rl.question('Digite o nome do herói: ', (nome) => {
  rl.question('Digite a idade do herói: ', (idade) => {
    rl.question('Digite o tipo do herói (mago, guerreiro, monge, ninja): ', (tipo) => {
      const heroiDoUsuario = new Heroi(nome, idade, tipo);

      heroiDoUsuario.atacar();

      rl.close();
    });
  });
});
