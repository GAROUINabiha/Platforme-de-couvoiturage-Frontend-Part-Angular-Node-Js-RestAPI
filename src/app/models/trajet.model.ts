export interface TrajetModelServer {
  id: Number;
  vdepart: String;
  varrive: String;
  date: String;
  heure: String;
  nbrep: String;
  tarif: String;
  checkArray: String;
  email: String;
  typev: String;
  profile: String;
  fname: String;
  lname: String;
}
// tslint:disable-next-line:class-name
export interface serverResponse {
  count: number;
  trajet: TrajetModelServer[];
}
