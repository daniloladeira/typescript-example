export abstract class Dragao {
  nome: string;
  elemento: string;
  tamanho: number;

  constructor(nome: string, elemento: string, tamanho: number) {
    this.nome = nome;
    this.elemento = elemento;
    this.tamanho = tamanho;
  }

  public abstract atacar(): void;

  public static mostrarPoderDraconico(drago: Dragao): void {
    console.log(`--- O ${drago.nome} (${drago.elemento}) se prepara para a batalha! ---`);
    drago.atacar();
    console.log(`O ataque do ${drago.nome} foi devastador!`);
  }

  public rugir(): void {
    console.log(`${this.nome} solta um rugido que ecoa pelos vales! GRAAAAH!`);
  }
}

export class DragaoAlado extends Dragao {
  envergaduraAsa: number;
  velocidadeVoo: number;

  constructor(nome: string, elemento: string, tamanho: number, envergaduraAsa: number, velocidadeVoo: number) {
    super(nome, elemento, tamanho);
    this.envergaduraAsa = envergaduraAsa;
    this.velocidadeVoo = velocidadeVoo;
  }

  public atacar(): void {
    console.log(`O ${this.nome} (${this.elemento}) voa a ${this.velocidadeVoo} km/h e lança uma rajada de ${this.elemento} do alto!`);
  }

  public planar(): void {
    console.log(`O ${this.nome} plana majestosamente, exibindo seus ${this.envergaduraAsa} metros de envergadura.`);
  }
}

export class DragaoMarinho extends Dragao {
  profundidadeMaxima: number;
  capacidadeRespiracaoSubaquatica: boolean;

  constructor(nome: string, elemento: string, tamanho: number, profundidadeMaxima: number, capacidadeRespiracaoSubaquatica: boolean) {
    super(nome, elemento, tamanho);
    this.profundidadeMaxima = profundidadeMaxima;
    this.capacidadeRespiracaoSubaquatica = capacidadeRespiracaoSubaquatica;
  }

  public atacar(): void {
    const respiracao = this.capacidadeRespiracaoSubaquatica ? "subaquaticamente" : "na superfície";
    console.log(`O ${this.nome} (${this.elemento}) emerge das profundezas de ${this.profundidadeMaxima}m e ataca ${respiracao} com seu poder de ${this.elemento}!`);
  }

  public mergulhar(): void {
    console.log(`O ${this.nome} mergulha silenciosamente nas águas profundas.`);
  }
}