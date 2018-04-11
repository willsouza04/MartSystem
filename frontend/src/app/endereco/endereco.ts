export class Endereco {
  constructor(
    public id?: number,
    public cep?: string,
    public cidade?: string,
    public estado?: string,
    public numero?: number,
    public pais?: string,
    public rua?: string) { }
}
