import { Dragao, DragaoAlado, DragaoMarinho } from './dragoes';

describe('Testes Essenciais de Dragões', () => {
  let consoleSpy: jest.SpyInstance;

  beforeEach(() => {
    consoleSpy = jest.spyOn(console, 'log').mockImplementation(() => {});
  });

  afterEach(() => {
    consoleSpy.mockRestore();
  });

  it('DragaoAlado deve ser criado e atacar corretamente', () => {
    const inferno = new DragaoAlado("Inferno", "Fogo", 20, 35, 280);
    expect(inferno).toBeInstanceOf(DragaoAlado);
    inferno.atacar();
    expect(consoleSpy).toHaveBeenCalledWith(expect.stringContaining("lança uma rajada de Fogo do alto!"));
  });

  it('DragaoMarinho deve ser criado e atacar corretamente', () => {
    const hydra = new DragaoMarinho("Hydra", "Água", 50, 800, true);
    expect(hydra).toBeInstanceOf(DragaoMarinho);
    hydra.atacar();
    expect(consoleSpy).toHaveBeenCalledWith(expect.stringContaining("ataca subaquaticamente com seu poder de Água!"));
  });

  it('Método estático deve invocar o ataque correto para DragaoAlado', () => {
    const ventania = new DragaoAlado("Ventania", "Ar", 18, 30, 320);
    Dragao.mostrarPoderDraconico(ventania);
    expect(consoleSpy).toHaveBeenCalledWith(expect.stringContaining("--- O Ventania (Ar) se prepara para a batalha! ---"));
    expect(consoleSpy).toHaveBeenCalledWith(expect.stringContaining("lança uma rajada de Ar do alto!"));
    expect(consoleSpy).toHaveBeenCalledWith(expect.stringContaining("O ataque do Ventania foi devastador!"));
  });

  it('Método estático deve invocar o ataque correto para DragaoMarinho', () => {
    const abismo = new DragaoMarinho("Abismo", "Sombra", 70, 1500, false);
    Dragao.mostrarPoderDraconico(abismo);
    expect(consoleSpy).toHaveBeenCalledWith(expect.stringContaining("--- O Abismo (Sombra) se prepara para a batalha! ---"));
    expect(consoleSpy).toHaveBeenCalledWith(expect.stringContaining("ataca na superfície com seu poder de Sombra!"));
    expect(consoleSpy).toHaveBeenCalledWith(expect.stringContaining("O ataque do Abismo foi devastador!"));
  });
});