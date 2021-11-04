import { RoleUserPipe } from './role.pipe';

describe(`${RoleUserPipe.name}`, () => {

  const rolePipe = new RoleUserPipe();

  it('Deve retornar uma string(Administrador)', () => {
    expect(rolePipe.transform("true")).toBe("Administrador");
  });

  it('Deve retornar uma string(Usuário)', () => {
    expect(rolePipe.transform("false")).toBe("Usuário");
  });
});
