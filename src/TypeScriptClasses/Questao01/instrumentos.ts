// instrumentos.ts

export interface Instrumento {
  nome: string;
  tipo: string;
  material: string;
  mecanica: string;
  afinado: boolean; // Adicionado para que a interface reflita o estado de afinação
  tocar: () => void;
  afinar: () => void;
}

export class Pandeiro implements Instrumento {
  nome: string;
  tipo: string;
  material: string;
  mecanica: string;
  tamanhoPele: number;
  afinado: boolean; // Pandeiro também pode ter um estado de afinação, mesmo que não usado na lógica de tocar/afinar neste exemplo

  constructor(nome: string, tipo: string, material: string, mecanica: string, tamanhoPele: number) {
    this.nome = nome;
    this.tipo = tipo;
    this.material = material;
    this.mecanica = mecanica;
    this.tamanhoPele = tamanhoPele;
    this.afinado = false; // Padrão
  }

  afinar(): void {
    console.log(`Afinando o ${this.nome} de tipo ${this.tipo} e material ${this.material}`);
    this.afinado = true;
  }

  tocar(): void {
    console.log(`Tocou o ${this.nome} de tipo ${this.tipo} e material ${this.material} com ${this.tamanhoPele} polegadas de pele`);
  }
}

export class Cavaco implements Instrumento { // Agora implementa Instrumento
  nome: string;
  tipo: string;
  material: string;
  mecanica: string;
  numeroCordas: number; // Atributo diferente para Cavaco
  afinado: boolean;

  constructor(nome: string, tipo: string, material: string, mecanica: string, numeroCordas: number) { // Adicionado numeroCordas no construtor
    this.nome = nome;
    this.tipo = tipo;
    this.material = material;
    this.mecanica = mecanica;
    this.numeroCordas = numeroCordas;
    this.afinado = false; // Inicialmente não afinado
  }

  tocar(): void {
    if (this.afinado) {
      console.log(`Tocou o ${this.nome} de tipo ${this.tipo} e material ${this.material} com ${this.numeroCordas} cordas.`);
    } else {
      console.log(`O ${this.nome} não está afinado. Por favor, afine-o antes de tocar.`);
    }
  }

  afinar(): void {
    console.log(`Afinando o ${this.nome}`);
    this.afinado = true;
    console.log(`${this.nome} afinado com sucesso!`);
  }
}