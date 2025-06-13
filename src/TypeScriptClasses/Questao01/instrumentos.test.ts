// instrumentos.test.ts

import { Pandeiro, Cavaco, Instrumento } from './instrumentos';

describe('Testes de Implementação de Instrumento', () => {

  describe('Pandeiro', () => {
    let pandeiro: Pandeiro;

    beforeEach(() => {
      pandeiro = new Pandeiro("Pandeiro Teste", "Percussão", "Madeira", "Manual", 10);
    });

    it('deve afinar e tocar', () => {
      expect(pandeiro.afinado).toBe(false);

      pandeiro.afinar();
      expect(pandeiro.afinado).toBe(true);

      expect(() => pandeiro.tocar()).not.toThrow();

      pandeiro.material = "Acrílico";
      expect(pandeiro.material).toBe("Acrílico");
    });
  });

  describe('Cavaco', () => {
    let cavaco: Cavaco;
    let consoleSpy: jest.SpyInstance;

    beforeEach(() => {
      cavaco = new Cavaco("Cavaquinho Teste", "Cordas", "Cedro", "Dedo", 4);
      consoleSpy = jest.spyOn(console, 'log').mockImplementation(() => {});
    });

    afterEach(() => {
      consoleSpy.mockRestore();
    });

    it('não deve tocar quando desafinado e deve tocar após afinar', () => {
      expect(cavaco.afinado).toBe(false);
      cavaco.tocar();
      expect(consoleSpy).toHaveBeenCalledWith(expect.stringContaining("não está afinado"));

      consoleSpy.mockClear();
      cavaco.afinar();
      expect(cavaco.afinado).toBe(true);
      expect(consoleSpy).toHaveBeenCalledWith(expect.stringContaining("afinado com sucesso!"));

      consoleSpy.mockClear();
      cavaco.tocar();
      expect(consoleSpy).toHaveBeenCalledWith(expect.stringContaining("Tocou o Cavaquinho Teste"));

      cavaco.nome = "Meu Cavaco Personalizado";
      expect(cavaco.nome).toBe("Meu Cavaco Personalizado");
    });
  });

  describe('Polimorfismo da Interface Instrumento', () => {
    it('deve permitir chamar métodos comuns em diferentes instrumentos', () => {
      const meuPandeiro: Instrumento = new Pandeiro("Pandeiro Poli", "Percussão", "Couro", "Manual", 11);
      const meuCavaco: Instrumento = new Cavaco("Cavaco Poli", "Cordas", "Mogno", "Palhetada", 4);

      const instrumentos: Instrumento[] = [meuPandeiro, meuCavaco];

      instrumentos.forEach(instrumento => {
        expect(instrumento.afinado).toBe(false);
        instrumento.afinar();
        expect(instrumento.afinado).toBe(true);

        expect(() => instrumento.tocar()).not.toThrow();
      });
    });
  });
});