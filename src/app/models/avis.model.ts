export interface AvisModelServer {
  id: Number;
  comment: String;
  pseudo: String;
  email: String;
}
// tslint:disable-next-line:class-name
export interface serverResponse1 {
  count: number;
  avis: AvisModelServer[];
}
